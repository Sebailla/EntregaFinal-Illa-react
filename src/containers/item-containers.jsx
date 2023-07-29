import React from 'react'
import TabsProduct from '../components/tabs'
import { useNavigate, useParams } from 'react-router-dom';
import ItemList from '../components/itemList';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore/lite'

const Categories = [
    { id: 'all', title: 'Todos los Productos' },
    { id: 'Acuarios', title: 'Acuarios' },
    { id: 'Sustrato', title: 'Sustratos' },
    { id: 'Peces', title: 'Peces' },
    { id: 'Plantas', title: 'Plantas Acuáticas' },
    { id: 'Filtros', title: 'Filtros' },
    { id: 'Calentadores', title: 'Calentadores' }
];

const ItemContainer = () => {

    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { category } = useParams();
    const navigate = useNavigate();
    const current = Categories.some(cat => cat.id === category) ? category : 'all';

    React.useEffect(() => {
        if (!Categories.some(cat => cat.id === category)) {
            navigate('/products/all')
        }
    }, [category, navigate]);

    // -- Acceder a una Colección de Firebase CON filtros --
    React.useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const getCollection = collection(db, 'productos');

        if (category === 'all') {
            getDocs(getCollection)
                .then((snapshot) => {
                    setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                    setLoading(false)
                })
        } else if (Categories.some(categories => categories.id === category)) {
            const q = query(getCollection, where('categoryId', '==', category))
            getDocs(q)
                .then((snapshot) => {
                    setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                    setLoading(false)
                })
        }
        setLoading(false);
    }, [category])

    return (
        <div>
            <TabsProduct current={current} item={Categories} />
            {
                Boolean(loading) ?
                    <h4 style={{ textAlign: 'center', padding: '30px' }}>Cargando Productos ....</h4>
                    : 
                    <div>
                        <ItemList items={items} loading={loading} />
                    </div>
            }
        </div>
    )
}

export default ItemContainer
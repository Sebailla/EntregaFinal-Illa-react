import React from 'react'
import TabsProduct from '../components/tabs'
import { useNavigate, useParams } from 'react-router-dom';
import ItemList from '../components/itemList';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore/lite'

const Categories = [
    { id: 'all', title: 'Todos los Productos' },
    { id: 'acuarios', title: 'Acuarios' },
    { id: 'sustrato', title: 'Sustratos' },
    { id: 'peces', title: 'Peces' },
    { id: 'plantas', title: 'Plantas Acuáticas' },
    { id: 'filtros', title: 'Filtros' }
];

/* const searchCategory = (id) => {
    switch (id) {
        case 'acuarios': return 'acuarios';
        case 'peces': return 'peces';
        case 'plantas': return 'Plantas Acuáticas';
        default:
            return 'sustrato'
    }
} */

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

    /* React.useEffect(() => {
        setLoading(true);
        getProducts(searchCategory(category))
            .then(res => res.json())
            .then(res => {
                const data = res.results?.map((elemento) => {
                    return {
                        id: elemento.id,
                        title: elemento.title,
                        price: elemento.price,
                        image: elemento.thumbnail,
                        stock: elemento.available_quantity
                    }
                })
                setItems(data)
            })
            .finally(() => setLoading(false));
    }, [category]) */


    /* // -- Acceder a Documento de Firebase --
    React.useEffect(() => {
        const db = getFirestore();
        const getProducts = doc(db, 'productos', '0g06cFexMYxSx1Bf5R0K')

        getDocs(getProducts)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log({id: snapshot.id, ...snapshot.data()})
                }
            })
    }, []) */

    /* // -- Acceder a una Colección de Firebase SIN filtros --
    React.useEffect(() => {
        const db = getFirestore();
        const getCollection = collection(db, 'productos');



        getDocs(getCollection)
            .then((snapshot) => {
                console.log(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
            })
    }) */

    // -- Acceder a una Colección de Firebase CON filtros --
    React.useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const getCollection = collection(db, 'productos');

        if (category === 'all') {
            getDocs(getCollection)
                .then((snapshot) => {
                    setLoading(false)
                    setItems(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
                    console.log(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
                })
        } else if (Categories.some(categories => categories.id === category)) {
            const q = query(getCollection, where('categoryId', '==', category))
            getDocs(q)
                .then((snapshot) => {
                    setLoading(false)
                    setItems(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
                    console.log(snapshot.docs.map(el => ({ id: el.id, ...el.data() })))
                })
        }
        setLoading(false);
    }, [category])


    return (
        <div>
            <TabsProduct current={current} item={Categories} />
            <div>
                <ItemList items={items} loading={loading} />
            </div>
        </div>
    )
}

export default ItemContainer
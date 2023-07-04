import React from 'react'
import TabsProduct from '../components/tabs'
import { useNavigate, useParams } from 'react-router-dom';
import {getProducts} from '../sdk/products';
import ItemList from '../components/itemList';

const Categories = [
    {id: 'all', title: 'Todos los Productos'},
    {id: 'sustrato', title: 'Sustrato para Acuarios'},
    {id: 'peces', title: 'Peces'},
    {id: 'plantas', title: 'Plantas Acuáticas'}
];

const searchCategory = (id) => {
    switch (id) {
        case 'sustrato': return 'Sustrato para Acuarios';
        case 'peces': return 'Peces';
        case 'plantas': return 'Plantas Acuáticas'; 
        
        default:
            return 'acuarios'
    }
}

const ItemContainer = () => {

    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const {category} = useParams();
    const navigate = useNavigate();
    const current = Categories.some(cat => cat.id === category) ? category : 'all';

    React.useEffect(() => {
        if(!Categories.some(cat => cat.id === category)){
            navigate('/products/all')
        }
    },[category, navigate]);

    React.useEffect(()=>{
        setLoading(true);
        getProducts(searchCategory(category))
        .then(res => res.json())
        .then(res => {
            const data = res.results?.map((elemento) => {
                return {
                    id: elemento.id,
                    title: elemento.title,
                    price: elemento.price,
                    image: elemento.thumbnail
                }
            })
            setItems(data)
        })
        .finally(() => setLoading(false));
    }, [searchCategory(category)])

    return (
        <div>
            <TabsProduct current={current} item={Categories}/>
            <div>
                <ItemList items={items} loading={loading}/>
            </div>
        </div>
    )
}

export default ItemContainer
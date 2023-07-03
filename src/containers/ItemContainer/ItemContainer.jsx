import React from 'react'
import TabsMenu from '../../components/tab'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../sdk/products'
import ItemList from '../../components/item-list'

const CATEGORIES = [
    {
        id: 'all',
        title: 'Todos'
    },
    {
        id: 'cel',
        title: 'Celulares'
    },
    {
        id: 'rem',
        title: 'Remeras'
    },

]

const searchCategory = (id) => {
    switch (id) {
        case 'Remeras':
            return 'rem';
        case 'Celulares':
            return 'cel';
        default:
            return 'Peces'
    }
}

const ItemContainer = () => {

    const [items, setItems] = React.useState([]);

    const { category } = useParams();

    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true);
        getProducts(searchCategory(category))
            .then(res => res.json())
            .then(res => {
                const data = res.results?.map((elemento) => ({
                    id: elemento.id,
                    title: elemento.title,
                    price: elemento.price,
                    image: elemento.thumbnail
                }));
                setItems(data);
            })
            .finally(() => setLoading(false));
    }, [category])


    return (
        <div>
            <TabsMenu current={category} items={CATEGORIES} />
            <div style={{ padding: 50 }}>
                <ItemList items={items} loading={loading} />
            </div>
        </div>

    )
}

export default ItemContainer
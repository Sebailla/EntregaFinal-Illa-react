import React from 'react'
import ItemCard from './itemCard';

const ItemList = ({ items, loading }) => {
    return (
        <div style={listStyle}>
            {
                loading ?
                    <div>Cargando...</div>
                    :
                    items.map((item) => <ItemCard data={item} />)
            }
        </div>
    )
}

export default ItemList;

const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: '20px'
}
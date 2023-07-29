import React from 'react'
import ItemCard from './itemCard';

const ItemList = ({ items, loading }) => {
    return (

        <div div style={listStyle} >
            {
                items.map((item, index) => <ItemCard key={item.title + index} data={item} />)
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
    gap: '30px',
    backgroundColor: 'rgba(0, 15, 0, 0.05)',
    padding: '20px'
}
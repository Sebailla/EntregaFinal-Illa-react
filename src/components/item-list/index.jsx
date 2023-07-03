import React from 'react'
import ItemCart from '../item-card';

const ItemList = ({ items, loading }) => {
  return (
    <div style={containerStyle}>
      {
        loading ?
          <p>Cargando datos ...</p>
          :
          items.map((item) => <ItemCart data={item} />)
      }
    </div>
  )
}

export default ItemList;

const containerStyle = {
  display: 'flex',
  flenDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px'
}
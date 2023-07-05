import React from 'react'
import { getProduct } from '../sdk/products'
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/product-detail';

const DetailsContainer = ({ thumbnail, title, descriptions, prices }) => {

  const [data, setData] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    getProduct(id)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [id])

  return (
    <div>
      <ProductDetail data={data} />
    </div>
  )
}

export default DetailsContainer;
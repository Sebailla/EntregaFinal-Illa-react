import React from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/product-detail';
import { AppContext } from '../context/context';

const DetailsContainer = () => {

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  const { addProductToCart } = React.useContext(AppContext);
  

  React.useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const getProducts = doc(db, 'productos', id)

    getDoc(getProducts)
      .then((snapshot) => {
        setData({ id: snapshot.id, ...snapshot.data() })
        setLoading(false)
      })
  }, [id])

  return (
    <div>
      {
        Boolean(loading) ?
          <h4 style={{textAlign:'center', padding:'30px'}}>Cargando Productos ....</h4>
          :
          <ProductDetail data={data} addToCart={addProductToCart} loding={loading} />

      }
    </div>
  )
}

export default DetailsContainer;
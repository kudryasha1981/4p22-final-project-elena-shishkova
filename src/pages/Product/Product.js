import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function ProductPage() {

  const { userId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${ userId }`);
      const result = await response.json();

      setProduct(result);
    })();
  }, []);

  return (
    <>
      <h1>{ product.title }</h1>;
      <img src={ product.image } alt={ product.title }/>
    </>
  );
}

export default ProductPage;

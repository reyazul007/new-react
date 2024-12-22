
import React, { useState } from 'react';
import productContext from './porductContext';

const ProductState = (props) => {
let products=[
  {
    id: 1,
    title: 'apple',
    description: 'apple from mustang',
    price: 100,
    instock: 5,
  },
  {
    id: 2,
    title: 'mango',
    description: 'mango from kalaiya',
    price: 50,
    instock: 4,
  },
  {
    id: 3,
    title: 'orange',
    description: 'orange from gorkha',
    price: 100,
    instock: 5,
  },
]
  
  const [product , setProduct] = useState(products);

  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a'
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setArticles(data.articles); // Store only the articles array
      console.log('Fetched data:', data.articles);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  };

  return (
    <productContext.Provider value={{ product, articles, fetchData }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
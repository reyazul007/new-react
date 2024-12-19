import React, { useContext, useEffect } from 'react'
import productContext from '../context/porductContext'


const Profile = () => {
  const context = useContext(productContext)
  const { product } = context
  console.log("this is my product", product);

  // useEffect(() => {
  //   update()
  // }, [])



  return (
    <div className='container mt-4'>
      <h5>This is my product</h5>
      {/* <p>name of my product is {product.name} and price of my product is {product.price}</p> */}
      {product.map((item)=>{
        return(
          <div key={item.id}>
            <h4> name of my products is: {item.title}</h4> 
          </div>
        )
      })}
    </div>
  )
}

export default Profile

// assignment explore useParams hook in react



import React, { useContext, useEffect } from 'react';
import productContext from '../context/porductContext';

const Profile = () => {
  const context = useContext(productContext);
  const { product, articles, fetchData } = context;
  console.log('this is articels', articles);
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h5>This is my News</h5>

      {articles && articles.length > 0 ? (
        articles.map((item) => (
          <div key={item.url }>

            <div className='row'>
            <div className='col-md-12'>
              <div className='col-md-3'>
            <div className="card" >
             <img src={item.urlToImage} className="card-img-top" alt="news images"/>
             <div className="card-body">
               <h5 className="card-title">{item.title}</h5>
               <p className="card-text">{item.description}</p>
               <a href={item.url}  target='blank' className="btn btn-primary">Read news</a>
             </div>
           </div>
           </div>
           </div>
           </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

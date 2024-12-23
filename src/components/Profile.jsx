// import React, { useContext, useEffect } from "react";
// import productContext from "../context/porductContext";

// const Profile = () => {
//   const context = useContext(productContext);
//   const { product ,fetchData, articles} = context;
//   console.log("this is articels", product);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h5 className="text-centre">This is my News</h5>
//       <div className="row">
//         {articles.map((item) => {
//           return (
//             <div className="col-md-3 mb-4" key={item.url}>
//               <div className="card">
//                 <img
//                   src={item.urlToImage}
//                   className="card-img-top"
//                   alt="news images"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title.slice(0, 80)}</h5>
//                   <p className="card-text">{item.description}</p>
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     className="btn btn-primary"
//                   >
//                     Read news
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useContext, useEffect } from "react";
import productContext from "../context/porductContext";
import Apple from "../assets/apple.jpeg";

const Profile = () => {
  const context = useContext(productContext);
  const { product } = context;
  console.log("this is porducts", product);

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h5 className="text-centre">This is my Products</h5>
      <div className="row">
        {product.map((item) => {
          return (
            <div className="col-md-3 mb-4" key={item.url}>
              <div className="card">
                <img src={Apple} className="card-img-top" alt="news images" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={"#"} className="btn btn-primary">
                    add to cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;

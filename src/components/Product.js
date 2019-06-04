import React from 'react';

const Product = (props) => {
    console.log("Props", props);
    return ( 
   <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.product.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">by {props.product.name}</h6>
            <p className="card-text">{props.product.price}</p>
        </div>
    </div>
 );
}
export default Product;
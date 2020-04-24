import React from 'react';


const ProductItem = ({product,addCart}) => {
    console.log("ProductItem")

    return (
        <div className="product__item">
            <div className="product__item-img">
                <img src={process.env.PUBLIC_URL+product.Img} alt="" />
                <p>free shipping</p>
            </div>
            <p className="product__item-name">
                {product.Name}
            </p>
            <div className="product__item-line"></div>
            <p className="product__item-price">
                $ <span>
                    {product.Price.toFixed(0)}</span>
                    .{Math.abs(((product.Price - product.Price.toFixed(0))*100).toFixed(0))}
                    {product.Price - product.Price.toFixed(0) === 0 ? 0 :""}
            </p>
            <p className="product__item-bonus">
                <span>or {product.AmountBonus} x </span>
                <i className="fas fa-dollar-sign">{product.PriceBonus}</i>
            </p>
            <button onClick={() => addCart(product.id)} > add to cart</button>
        </div>
    );
}

export default React.memo(ProductItem);

import React from 'react';

const CartItem = ({cart,deleteCart}) => {
    return (
        <div className="cart__item">
            <i className="fas fa-times" onClick={ ()=> deleteCart(cart.id) } ></i>
            <div className="cart__item-box">
                <div className="cart__item-box1">
                    <div className="cart__item-img">
                        <img src={process.env.PUBLIC_URL + cart.Img} alt="" />
                    </div>
                    <div className="cart__item-infor">
                        <p className="cart__item-name">{cart.Name} </p>
                        <p className="cart__item-size"><span>{cart.Size} </span> | Black with custom print</p>
                        <p className="cart__item-amount">Quantity : {cart.amount} </p>
                    </div>
                    <p className="cart__item-price">
                        &#36; {(cart.Price * cart.amount).toFixed(2)}
                    </p>
                </div>
            </div>
                
        </div>
    );
}

export default CartItem;

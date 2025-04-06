import React from 'react';

function Cart({ cart, clearCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h1>🛒 Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price} $SPT
                            </li>
                        ))}
                    </ul>
                    <p>Общая сумма: {total} $SPT</p>
                    <button onClick={clearCart}>Очистить корзину</button>
                </div>
            )}
        </div>
    );
}

export default Cart;

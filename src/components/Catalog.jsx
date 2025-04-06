import React from 'react';

const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
];

function Catalog({ addToCart }) {
    return (
        <div>
            <h1>📦 Каталог товаров</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price} $SPT
                        <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalog;

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
            <div className="product-list">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Цена: {product.price} $SPT</p>
                        <button onClick={() => addToCart(product)}>Добавить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;

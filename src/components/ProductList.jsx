const products = [
  { id: 1, name: 'Футболка', price: 100 },
  { id: 2, name: 'Наушники', price: 250 },
  { id: 3, name: 'Power Bank', price: 350 },
];

function ProductList() {
  const handleBuy = (product) => {
    console.log('Покупка:', product);
    alert(`Вы выбрали товар: ${product.name}`);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Список товаров:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ background: '#fff', marginBottom: 10, padding: 10, borderRadius: 8, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{p.name}</strong>
                <p style={{ margin: 0 }}>{p.price} $SPT</p>
              </div>
              <button onClick={() => handleBuy(p)} style={{ padding: '8px 12px', border: 'none', borderRadius: 5, background: '#0088cc', color: '#fff' }}>
                Купить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

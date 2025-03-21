import React from 'react';
import ShopItemFunc from './components/store-func/ShopItemFunc';
import './App.css';
import './components/store-func/css/main.css';

function App() {
  // Тестовые данные о товаре
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£',
  };

  return (
    <>
      <div className="card">
        {/* Пример использования ShopItemFunc */}
        <ShopItemFunc item={item} />
      </div>
    </>
  );
}

export default App;

import React from 'react';

const ShopItemFunc = ({ item }) => {

  if (!item || typeof item !== 'object') {
    return <div>Ошибка: Неверные данные о товаре</div>;
  }

  const { brand, title, description, descriptionFull, price, currency } = item;

  const formattedPrice = `${currency}${price.toFixed(2)}`;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="divider"></div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="purchase-info">
        <div className="price">{formattedPrice}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItemFunc;
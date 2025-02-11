import React from 'react';

const StockCard = ({ stock }) => {
  return (
    <div className="stock-card">
      <h3>{stock.name} ({stock.symbol})</h3>
      <p>Price: ${stock.price.toFixed(2)}</p>
    </div>
  );
};

export default StockCard;

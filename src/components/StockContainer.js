import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuy}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock=>{
        return <Stock key={stock.id} onClick={onBuy} stock={stock} />
      })}
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;

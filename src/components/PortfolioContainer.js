import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ boughtStocks, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        boughtStocks.map(stock=> {
          return <Stock key={stock.id} stock={stock} onClick={onSell}  />
        })
      }
    </div>
  );
}

export default PortfolioContainer;

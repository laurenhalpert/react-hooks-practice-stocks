import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, setStocks }) {
  const [boughtStocks, setBoughtStocks] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [filterBy, setFilterBy] = useState("All")
  function handleBuyStock (newStock) {
    const stockInPortfolio = boughtStocks.find(stock=> stock.id === newStock.id)
    if (!stockInPortfolio) {
      setBoughtStocks([...boughtStocks, newStock])
    }
  }
  function handleSale (soldStock) {
    setBoughtStocks(boughtStocks.filter(stock=> stock.id !== soldStock.id))
  }
  function compare (a,b ) {
    if (a.ticker < b.ticker) {
      return -1;
    } else if (a.ticker> b.ticker) {
      return 1;
    }
    return 0;
  }
  function comparePrice (a, b) {
    if (a.price < b.price) {
      return -1;
    } else if (a.price> b.price) {
      return 1;
    }
    return 0;
  }
  const sortedStocksAlphabetically = [...stocks].sort(compare)
  const sortedStocksByPrice = [...stocks].sort(comparePrice)
  const sortedStocksToDisplay = whichSorted()
  function whichSorted() {
    if (sortBy=== "Alphabetically") {
      return sortedStocksAlphabetically
    } else if (sortBy === "Price") {
      return sortedStocksByPrice
    }
    return stocks;
  }
  const stocksToDisplay = sortedStocksToDisplay.filter(stock=> stock.type===filterBy || filterBy === "All")
  return (
    <div>
      <SearchBar sortBy={sortBy} onChangeSort={setSortBy} filterBy={filterBy} onChangeFilter={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} onBuy={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} onSell={handleSale}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

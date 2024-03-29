import axios from "axios";

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const base_url = `https://finnhub.io/api/v1/`;
const apiENV = process.env.REACT_APP_FINNHUB_API;
const api_key = `&token=${apiENV}`;
export const api_key_websocket = `?token=${apiENV}`;

// SAI - KO CHAY DUOC vi (sym) nam trong function symbol:
// const symbol = (sym) => `symbol=${sym}`;

/////////////////////////////////////////////////// COMPANY PROFILE
// https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=c6a500qad3idi8g5o2v0
export const companyProfile = (symbol) =>
  `${base_url}stock/profile2?symbol=${symbol}${api_key}`;

/////////////////////////////////////////////////// QUOTE
//https://finnhub.io/api/v1/quote?symbol=AAPL&token=c6a500qad3idi8g5o2v0

export const quoteData = (symbol) =>
  `${base_url}quote?symbol=${symbol}${api_key}`;
export const quoteDataWebSocket = (symbol) =>
  `wss://ws.finnhub.io/api/v1/quote?symbol=${symbol}${api_key}`;
/////////////////////////////////////////////////// Market News
// https://finnhub.io/api/v1/news?category=general&token=c6a500qad3idi8g5o2v0
const marketNewsGeneral = `news?category=general`;
const marketNewsCrypto = `news?category=crypto`;
export const marketNewsGeneralData = `${base_url}${marketNewsGeneral}${api_key}`;
export const marketNewsCryptoData = `${base_url}${marketNewsCrypto}${api_key}`;

/////////////////////////////////////////////////// Company News
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const last7Days = `${currentYear}-${currentMonth}-${currentDay - 7}`;
const last3Days = `${currentYear}-${currentMonth}-${currentDay - 3}`;
// const companyNews = `company-news`;
// https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c6a500qad3idi8g5o2v0

export const companyNewsData7Days = (symbol) =>
  `${base_url}company-news?symbol=${symbol}&from=${last7Days}&to=${currentDate}${api_key}`;
export const companyNewsData3Days = (symbol) =>
  `${base_url}company-news?symbol=${symbol}&from=${last3Days}&to=${currentDate}${api_key}`;
export const companyNewsDataToday = (symbol) =>
  `${base_url}company-news?symbol=${symbol}${api_key}`;

/////////////////////////////////////////////////// Basic Financials
// https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=c6a500qad3idi8g5o2v0

// const basicFinancials = `stock/metric?$?symbol=${symbol}&metric=all`;
export const basicFinancialsData = (symbol) =>
  `${base_url}stock/metric?symbol=${symbol}&metric=all${api_key}`;

/////////////////////////////////////////////////// Symbol Lookup / Search
// https://finnhub.io/api/v1/search?q=apple&token=c6a500qad3idi8g5o2v0

export const symbolLookupData = (terms) =>
  `${base_url}search?q=${terms}${api_key}`;

// /////////////////////////////////////////////////// Trades - Last Price Updates
// export const socket = new WebSocket(
//   "wss://ws.finnhub.io?token=c6a500qad3idi8g5o2v0"
// );

// const socket = new WebSocket(`wss://ws.finnhub.io${api_key_websocket}`);

// // Connection opened -> Subscribe
// socket.addEventListener("open", function (event) {
//   // socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
//   socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }));
//   // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:ETHUSDT" }));
//   // socket.send(JSON.stringify({ type: "subscribe", symbol: "IC MARKETS:1" }));
// });

// // Listen for messages
// socket.addEventListener("message", function (event) {
//   const str = event.data;
//   console.log(
//     "Message from server ",
//     str.substring(str.indexOf(`"p"`) + 4, str.indexOf(`,"s"`))
//   );
// });

// // Unsubscribe
// var unsubscribe = function (symbol) {
//   socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
// };

//////////////////////////////////////////////////////// DATA FROM STARLITE BACKEND MONGODB
// export const starliteAPI = process.env.REACT_APP_STARLITE_API;
// export const getWatchLists = `${process.env.REACT_APP_STARLITE_API}/watchlists/`;
// export const postWatchList = `${process.env.REACT_APP_STARLITE_API}/watchlists/add`;
// export const updateWatchList = `${process.env.REACT_APP_STARLITE_API}/update-watchlist`;
// export const updateWatchListTickers = `${process.env.REACT_APP_STARLITE_API}/update-watchlist-tickers`;

// export const deleteWatchList = (id) =>
//   `${process.env.REACT_APP_STARLITE_API}/delete-watchlist/${id}`;

export const starliteAPI =
  "https://starlite-backend-production.up.railway.app/";
export const getWatchLists = `https://starlite-backend-production.up.railway.app/watchlists/`;
export const postWatchList = `https://starlite-backend-production.up.railway.app/watchlists/add`;
export const updateWatchList = `https://starlite-backend-production.up.railway.app/update-watchlist`;
export const updateWatchListTickers = `https://starlite-backend-production.up.railway.app/update-watchlist-tickers`;

export const deleteWatchList = (id) =>
  `https://starlite-backend-production.up.railway.app//delete-watchlist/${id}`;

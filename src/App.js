import axios from "axios";
import React , {useState, useEffect} from "react";
import Coins from "./components/Coins";
import {Routes, Route} from 'react-router-dom'
import Coin from "./routes/Coin";
import Parallax from './components/Parallax'
import Loader from "./components/Loader";


function App() {
  const [coins, setcoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setcoins(response.data)
      console.log(response.data[0])
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
      
      <Routes>
         <Route path="/CoinSpotlight" element={<Loader />} />
         <Route path="/parallax" element={<Parallax />} />
         <Route path="/coins" element={<Coins coins={coins}/>} />
         <Route path="/coin" element={<Coin />}>
              <Route path=":coinId" element={<Coin />} />
         </Route>
      </Routes>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlockChainLogo from '../assets/BlockChainLogo.png'
import { API_BASE_URL } from '../config';





function App() {
  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then(response => response.json())
      .then(json => setWalletInfo(json));
  }, []);
 
  const { address, balance } = walletInfo;

  return (
    <div className="App"> 
      <img className="logo" src={BlockChainLogo} alt="application-logo"  />
      <h3>Chain of Blocks</h3>
      <br />
      <Link to="/blockchain">Blockchain</Link>
      <Link to="/conduct-transaction">Conduct a Transaction</Link>
      <Link to="/transaction-pool">Transaction Pool</Link>
      <br />
      <div className="WalletInfo">
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>

      </div>
 
     
    </div>
  );
}

export default App;

import { useAddress, useCoinbaseWallet } from '@thirdweb-dev/react';

function App() {
  // get a function to connect to a particular wallet
  const connectWithMetamask = useCoinbaseWallet();
  // once connected, you can get the connected wallet information from anywhere (address, signer)
  const address = useAddress();
  return (
    <div className='card'>
      <h1>Crypto Wallet</h1>
      <img src='/images/wallet.jpg' alt='Crypto Wallet' />
      <p>
        {address ? (
          <h4>You are Connected as {address}</h4>
        ) : (
          <button onClick={connectWithMetamask}>Connect Coinbase Wallet</button>
        )}
      </p>
    </div>
  );
}

export default App;

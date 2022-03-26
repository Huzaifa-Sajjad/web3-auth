import React from 'react';
import ReactDOM from 'react-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

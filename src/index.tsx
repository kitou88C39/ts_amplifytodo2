import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Authenticator.Provider>
        <Provider store={store}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </Provider>
      </Authenticator.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

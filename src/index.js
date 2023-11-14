import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './store'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chatbox from './components/Chatbox';
import WelcomePage from './components/WelcomePage';

const router = createBrowserRouter([
  {
    path: "/main-page",
    element: <App/>,
  },
  {
    path: "/",
    element: <WelcomePage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router}>

  <App />
 
  </RouterProvider>
  </Provider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

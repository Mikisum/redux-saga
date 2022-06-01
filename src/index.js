
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { Home } from './pages/home/home';
import { LatestNews } from './pages/latestNews/latestNews';
import { PopularNews } from './pages/popularNews/popularNews';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const history = createBrowserHistory();

root.render(

  <Provider store={store}>
    <BrowserRouter history={history}>
      <App>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/latest-news' element={<LatestNews />} />

          <Route path='/popular-news' element={<PopularNews />} />
        </Routes>


      </App>
    </BrowserRouter>
  </Provider>

)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

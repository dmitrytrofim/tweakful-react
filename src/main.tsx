import ReactDOM from 'react-dom/client';
import './assets/index.css';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <Provider store={store}>
 <App />
 // </Provider>
);

import ReactDOM from 'react-dom/client';
import './assets/css/vars.css';
import './assets/css/custom-reset.css';
import './assets/css/index.css';
import './assets/css/animation.css';
import './assets/css/theme.css';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <Provider store={store}>
 <App />
 // </Provider>
);

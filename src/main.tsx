import ReactDOM from 'react-dom/client';
import '@splidejs/react-splide/css';
import './assets/index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import Home from './pages/home';
import ErrorPage from './pages/error-page';
import Features from './pages/features';
import Contacts from './pages/contacts';

const router = createHashRouter([
 {
  path: '/',
  element: <Home />,
  errorElement: <ErrorPage />,
 },
 {
  path: '/features',
  element: <Features />,
 },
 {
  path: '/contacts',
  element: <Contacts />,
 },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <Provider store={store}>
 <RouterProvider router={router} />
 // </Provider>
);

import ReactDOM from 'react-dom/client';
import '@splidejs/react-splide/css';
import './assets/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import Home from './pages/home';
import ErrorPage from './pages/error-page';
import Features from './pages/features';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Home />,
  errorElement: <ErrorPage />,
 },
 {
  path: '/features',
  element: <Features />,
 },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
 // <Provider store={store}>
 <RouterProvider router={router} />
 // </Provider>
);

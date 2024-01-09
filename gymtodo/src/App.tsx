import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root';
import { LoginPage } from './pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Not Found😿</p>,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

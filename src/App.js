import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Utilities/routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;

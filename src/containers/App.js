import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ReactNavbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <ReactNavbar />
      <Outlet />
    </div>
  );
}

export default App;

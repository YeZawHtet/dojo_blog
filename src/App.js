import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
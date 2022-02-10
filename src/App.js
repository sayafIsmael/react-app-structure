import logo from './logo.svg';
import { Link } from "react-router-dom"
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <div className='bg-primary w-full mx-auto flex justify-center items-center h-10'>
          <p className="text-base text-white">Get  no-fee trading for life when you sign up today</p>
        </div>

        <nav className="nav-main">
          <div className="nav-main container mx-auto flex justify-between items-center">
            <a></a>
            <img src="/images/logo.png" />

            <ul className="flex">
              <li><a>All Assets</a></li>
              <li><a>Stocks </a></li>
              <li><a>Crypto </a></li>
              <li><a>Trade </a></li>
            </ul>

            <div className="flex">
              <a>Sign up</a>
              <button className="bg-primary text-white">Get the app</button>
            </div>
          </div>

        </nav>
      </header>
    </div>
  );
}

export default App;

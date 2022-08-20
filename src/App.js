import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Items from './Components/Item_Info/Items';
import CreateItem from './Components/Item_Create/CreateItem';
import ItemInfo from './Components/Item_Info/ItemInfo';
import Demo from './Components/Item_Create/Demo';

function App() {
  return (
    <div className="relative min-h-screen md:flex">

      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">

        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokwidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="sidebar bg-stone-500 text-blue-100 w-56 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <nav>
          <Link to="/item-list" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Item List
          </Link>
          <Link to="/item-info" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Item Info
          </Link>
          <Link to="/item-form" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Create Item
          </Link>
          <Link to="/demo" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Demo
          </Link>

        </nav>
      </div>


      <div className="flex-1 p-10 font-bold">
        <Routes>
          <Route path="/item-info" element={<ItemInfo></ItemInfo>} />
          <Route path="/item-form" element={<CreateItem></CreateItem>} />
          <Route path="/item-list" element={<Items></Items>} />
          <Route path="/demo" element={<Demo></Demo>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

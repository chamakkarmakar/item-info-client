import './App.css';
import { Routes, Route } from "react-router-dom";
import Items from './Components/Item_Info/Items';
import CreateItem from './Components/Item_Create/CreateItem';
import ItemInfo from './Components/Item_Info/ItemInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/item-info" element={<ItemInfo></ItemInfo>} />
        <Route path="/item-form" element={<CreateItem></CreateItem>} />
        <Route path="/item-list" element={<Items></Items>} />
      </Routes>
    </div>
  );
}

export default App;

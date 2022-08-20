import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import SubCatModal from './SubCatModal';
import UnitModal from './UnitModal';

const ItemInfo = () => {
  const navigate = useNavigate();
  const [items,setItems] = useItems();

  const [subModal, setSubModal] = useState(false);
  const [unitModal, setUnitModal] = useState(false);

  const [subCat, setSubCat] = useState('');
  const [subCategory, setSubCategory] = useState([]);

  const [unit, setUnit] = useState('');
  const [unitName, setUnitName] = useState([]);

  const [sub, setSub] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subcategory")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSub(data)
      })
  }, [setSub])
  
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/unit")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUnits(data)
      })
  }, [setUnits])

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
  }

  const handleSave = event => {
    event.preventDefault();

  }
  const handleCancel = () => {
    navigate(`/item-list`);
  }
  return (
    <div className='container mx-auto my-10'>
      <h1 className="text-3xl font-bold text-center underline mb-5">Item Information</h1>

      <form onSubmit={handleSave} className='w-full'>
        {
          items.map(item =>
            <div className='grid grid-cols-9 gap-x-4 mb-4'>
              <select className='bg-gray-300 font-bold' name="item">
                <option value="itemType" selected disabled>Item Type</option>
                <option value="item1">item-1</option>
                <option value="item2">item-2</option>
                <option value="item3">item-3</option>
                <option value="item4">item-4</option>
              </select>

              <input type="text" className='border-2' name="itemName" value={item.itemName} placeholder='Item Name' />

              <select className='bg-gray-300 py-1 font-bold' name="subCat">
                <option value="itemType" selected disabled>SubCategory</option>
                {
                  sub.map(s =>
                    <option key={s._id} value={s} >{s.subCategory}</option>

                  )
                }
                {
                  subCategory.map((sub, index) =>
                    <option key={index + 1} value={sub} >{sub}</option>
                  )
                }

              </select>
              <button className='text-white bg-slate-400 px-3 py-1 font-bold' onClick={() => setSubModal(true)}>ADD</button>


              <select className='bg-gray-300 py-1 font-bold' name="unit">
                <option value="itemType" selected disabled>Unit Name</option>
                {
                  units.map(u =>
                    <option key={u._id} value={u} >{u.unit}</option>

                  )
                }
                {
                  unitName.map((unit, index) =>
                    <option key={index + 1} value={unit}>{unit}</option>
                  )
                }
              </select>
              <button className='text-white bg-slate-400 px-3 py-1 font-bold' onClick={() => setUnitModal(true)}>ADD</button>

              <input type="text" className='border-2' name="itemName" value={item.stockLimit} placeholder='Stock Limit' />

              <button className='text-white bg-slate-400 px-1 py-1 font-bold' onClick={() => setSubModal(true)}>ADD</button>

              <button className='bg-red-400 px-1 py-1 text-white  font-bold' onClick={() => handleDelete(item._id)}>DELETE</button>
            </div>
          )
        }

        <div className="flex justify-around items-center my-10">

          <input className='bg-red-400 text-center cursor-pointer py-1 px-9' type="reset" onClick={() => handleCancel()} value="Cancel" />

          <input className='bg-green-400 text-center cursor-pointer py-1 px-12' type="submit" value="Save" />

        </div>
      </form>
      {/* MODAL */}
      {
        subModal ?
          <SubCatModal
            setSubModal={setSubModal}
            subCat={subCat}
            setSubCat={setSubCat}
            setSubCategory={setSubCategory}
            subCategory={subCategory}
          ></SubCatModal>
          : null
      }
      {
        unitModal ?
          <UnitModal
            setUnitModal={setUnitModal}
            unit={unit}
            setUnit={setUnit}
            unitName={unitName}
            setUnitName={setUnitName}
          ></UnitModal>
          : null
      }

    </div>
  )
}

export default ItemInfo

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import SubCatModal from './SubCatModal';
import UnitModal from './UnitModal';

const ItemInfo = () => {
  const navigate = useNavigate();
  const [items] = useItems();
  // const [sub, setSubCat] = useState('');


  const [subModal, setSubModal] = useState(false);
  const [unitModal, setUnitModal] = useState(false);

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
                    items.map((item, index) =>
                        <option key={index + 1} value={index + 1} >{item.subCategory}</option>
                        
                    )
                }
                {/* <option>{sub}</option> */}

            </select>
              <button className='text-white bg-slate-400 px-3 py-1 font-bold' onClick={() => setSubModal(true)}>ADD</button>


              <select className='bg-gray-300 py-1 font-bold' name="unit">
                <option value="itemType" selected disabled>Unit Name</option>
                {
                    items.map((item, index) =>
                        <option key={index + 1} value={index + 1} >{item.unit}</option>
                        
                    )
                }
            </select>
              <button className='text-white bg-slate-400 px-3 py-1 font-bold' onClick={() => setUnitModal(true)}>ADD</button>

              <input type="text" className='border-2' name="itemName" value={item.stockLimit} placeholder='Stock Limit' />

              <button className='text-white bg-slate-400 px-1 py-1 font-bold' onClick={() => setSubModal(true)}>ADD</button>
              <button className='bg-red-400 px-1 py-1 text-white  font-bold' onClick={() => setSubModal(true)}>DELETE</button>
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
         <SubCatModal setSubModal={setSubModal}></SubCatModal>
          : null
      }
      {
        unitModal ?
         <UnitModal setUnitModal={setUnitModal}></UnitModal>
          : null
      }

    </div>
  )
}

export default ItemInfo

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import SubCat from './SubCat';
import Unit from './Unit';
// import Modal from './Modal';

const ItemInfo = () => {
  const navigate = useNavigate();
  const [items] = useItems();
  const [sub, setSubCat] = useState('');


  const [isOpen, setIsOpen] = useState(false);

  const handleSave = event => {
    event.preventDefault();

  }
  const handleSubCategory = e => {
    e.preventDefault();
    const subCat = e.target.sub.value;
    console.log(subCat);
    setSubCat(subCat);
    setIsOpen(false);
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

              <SubCat setIsOpen={setIsOpen} sub={sub}></SubCat>
              <button className='text-white bg-slate-400 px-3 py-1 font-bold' onClick={() => setIsOpen(true)}>ADD</button>


              <Unit setIsOpen={setIsOpen}></Unit>
              <button className='text-white bg-slate-400 px-3 py-1 font-bold' onClick={() => setIsOpen(true)}>ADD</button>

              <input type="text" className='border-2' name="itemName" value={item.stockLimit} placeholder='Stock Limit' />

              <button className='text-white bg-slate-400 px-1 py-1 font-bold' onClick={() => setIsOpen(true)}>ADD</button>
              <button className='bg-red-400 px-1 py-1 text-white  font-bold' onClick={() => setIsOpen(true)}>DELETE</button>
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
        isOpen ?
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Sub Category
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        X
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <form onSubmit={handleSubCategory}>
                    <div className=" mb-4">
                      <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="sub">
                        Add Sub Category :
                      </label>
                      <input type="text" name="sub" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Sub Category' />
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                      <input
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit" value="ADD"
                      />
                    </div>
                  </form>
                  {/*footer*/}

                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
          : null
      }

    </div>
  )
}

export default ItemInfo

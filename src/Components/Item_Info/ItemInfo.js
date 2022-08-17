import React, { useState } from 'react'
import Modal from './Modal';

const ItemInfo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSave = event => {
        event.preventDefault();

    }
    return (
        <div className='mt-20'>
            <h1 className="text-3xl font-bold underline">Item Information</h1>

            <form onSubmit={handleSave} className='mt-9 mx-12'>
                <div className='flex justify-evenly'>
                    <select className='bg-gray-300 font-bold' name="item">
                        <option value="itemType" selected disabled>Item Type</option>
                        <option value="item1">item-1</option>
                        <option value="item2">item-2</option>
                        <option value="item3">item-3</option>
                        <option value="item4">item-4</option>
                    </select>
                    <input type="text" className='border-2' name="itemName" placeholder='Item Name' />
                    <div>
                        <select className='bg-gray-300 py-1 font-bold' name="subCat">
                            <option value="itemType" selected disabled>Sub Category Name</option>
                            <option value="item1">item-1</option>
                            <option value="item2">item-2</option>
                            <option value="item3">item-3</option>
                            <option value="item4">item-4</option>
                        </select>
                        <button className='text-white bg-slate-400 px-3 py-1 font-semibold' onClick={() => setIsOpen(true)}>ADD</button>
                    </div>
                    <div>
                        <select className='bg-gray-300 py-1 font-bold' name="unit">
                            <option value="itemType" selected disabled>Unit Name</option>
                            <option value="item1">item-1</option>
                            <option value="item2">item-2</option>
                            <option value="item3">item-3</option>
                            <option value="item4">item-4</option>
                        </select>
                        <button className='text-white bg-slate-400 px-3 py-1 font-semibold' onClick={() => setIsOpen(true)}>ADD</button>
                    </div>
                    <input type="text" className='border-2' name="itemName" placeholder='Stock Limit' />
                    <div className='flex justify-between items-center'>
                        <button className='text-white mr-3 bg-slate-400 px-3 py-1 font-semibold' onClick={() => setIsOpen(true)}>ADD</button>
                        <button className='bg-red-400 px-3 py-1 text-white  font-semibold' onClick={() => setIsOpen(true)}>DELETE</button>
                    </div>
                </div>
              
                <div className="flex justify-around items-center my-10">
                    <input className='bg-red-400 text-center py-1 px-9' type="reset" value="Cancel" />
                    <input className='bg-green-400 text-center py-1 px-12' type="submit" value="Save" />
                </div>
            </form>
            {
                isOpen ? <Modal setIsOpen={setIsOpen} /> : null
            }

        </div>
    )
}

export default ItemInfo

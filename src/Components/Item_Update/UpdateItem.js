import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { Id } = useParams();

    const [sub, setSub] = useState([]);
    const [units, setUnits] = useState([]);

    useEffect(() => {
        fetch("https://aqueous-basin-84519.herokuapp.com/subcategory")
            .then(res => res.json())
            .then(data => {
                setSub(data)
            })
    }, [setSub])

    useEffect(() => {
        fetch("https://aqueous-basin-84519.herokuapp.com/unit")
            .then(res => res.json())
            .then(data => {
                setUnits(data)
            })
    }, [setUnits])

    const handleUpdate = event => {
        event.preventDefault();
        const itemType = event.target.item.value;
        const itemName = event.target.itemName.value;
        const subCat = event.target.subCat.value;
        const unit = event.target.unit.value;
        const stock = event.target.stock.value;

        const items = {
            itemType,
            itemName,
            subCat,
            unit,
            stock
        }
        const url = `https://aqueous-basin-84519.herokuapp.com/item/${Id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        console.log(items);
        event.target.reset();
    }
    return (
        <div className="flex justify-center">
            <div className="md:w-3/5 w-full">
                <h1 className='text-2xl text-center my-5 font-semibold'>Update Item</h1>

                <form onSubmit={handleUpdate} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 my-5">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="itemType">
                            Item Type :
                        </label>
                        <select className='w-3/4 py-2 px-3 bg-gray-300 font-bold' name="item" required>
                            <option value="itemType" selected disabled>Item Type</option>
                            <option value="cotton">Cotton</option>
                            <option value="velvet">Velvet</option>
                            <option value="polyster">Polyster</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="itemName">
                            Item Name :
                        </label>
                        <input type="text" name="itemName" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' placeholder='Item Name' />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="subCat">
                            Sub Category :
                        </label>
                        <select className='w-3/4 py-2 px-3 bg-gray-300 font-bold' name="subCat" required>
                            <option value="subCat1" selected disabled>Sub-Category</option>
                            {
                                sub.map(s =>
                                    <option key={s._id} value={s.subCategory} >{s.subCategory}</option>

                                )
                            }

                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="unit">
                            Unit Name :
                        </label>
                        <select className='w-3/4 py-2 px-3 bg-gray-300 font-bold' name="unit" required>
                            <option value="unit1" selected disabled>Unit Name</option>
                            {
                                units.map(u =>
                                    <option key={u._id} value={u.unit} >{u.unit}</option>

                                )
                            }

                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="stock">
                            Stock Limit :
                        </label>
                        <input type="number" name="stock" min={0} className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Stock Limit' />
                    </div>

                    <div className='flex justify-center'>
                        <input className='my-4 cursor-pointer bg-purple-400 w-1/2 rounded text-yellow-50 py-2 px-3' type="submit" value="UPDATE" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UpdateItem

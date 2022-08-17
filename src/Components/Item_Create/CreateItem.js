import React from 'react'

const CreateItem = () => {
    const handleCreate = event => {
        event.preventDefault();
    }
    return (
        <div className="flex justify-center">
            <div className=" w-1/2">
                <form onSubmit={handleCreate} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 my-32">
                    <div className="flex justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="itemType">
                            Item Type :
                        </label>
                        <select className="shadow border rounded w-3/4 py-2 px-3 bg-slate-200 leading-tight focus:outline-none focus:shadow-outline" name='itemType'>
                            <option value="itemtype" selected disabled>Item Type</option>
                            <option value="item1">item1</option>
                            <option value="item2">item2</option>
                            <option value="item3">item3</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="itemName">
                            Item Name :
                        </label>
                        <input type="text" name="itemName" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Item Name' />
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="subCat">
                            Sub Category :
                        </label>
                        <select className="shadow border rounded w-3/4 py-2 px-3 bg-slate-200 leading-tight focus:outline-none focus:shadow-outline" name='subCat'>
                            <option value="subcat" selected disabled>Sub Category</option>
                            <option value="sub1">sub1</option>
                            <option value="sub2">sub2</option>
                            <option value="sub3">item3</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="unit">
                            Unit :
                        </label>
                        <select className="shadow border rounded w-3/4 py-2 px-3 bg-slate-200 leading-tight focus:outline-none focus:shadow-outline" name='unit'>
                            <option value="unitName" selected disabled>Unit</option>
                            <option value="one">one</option>
                            <option value="two">two</option>
                            <option value="three">three</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="stock">
                            Stock Limit :
                        </label>
                        <input type="number" name="stock" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Stock Limit' />
                    </div>

                    <input className='my-4 bg-purple-400 w-1/2 rounded text-yellow-50 py-2 px-3' type="submit" value="ADD" />
                </form>

            </div>
        </div>
    )
}

export default CreateItem

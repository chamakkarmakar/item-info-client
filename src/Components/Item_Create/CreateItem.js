import React from 'react'

const CreateItem = () => {
    const handleCreate = event => {
        event.preventDefault();
        const itemType = event.target.itemType.value;
        const itemName = event.target.itemName.value;
        const subCat = event.target.subCat.value;
        const unit = event.target.unit.value;
        const stock = event.target.stock.value;

        const items = {
            itemType : itemType,
            itemName : itemName,
            subCategory : subCat,
            unit : unit,
            stockLimit : stock
        }
        // console.log(items);

        const url = `http://localhost:5000/item`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(items)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

        event.target.reset();
    }
    return (
        <div className="flex justify-center">
            <div className="md:w-3/5 w-full">
            <h1 className='text-2xl text-center my-5 font-semibold'>Create Item</h1>

                <form onSubmit={handleCreate} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 my-5">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="itemType">
                            Item Type :
                        </label>
                        <input type="text" name="itemType" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Item Type' />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="itemName">
                            Item Name :
                        </label>
                        <input type="text" name="itemName" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Item Name' />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="subCat">
                            Sub Category :
                        </label>
                        <input type="text" name="subCat" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Sub Category' />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="unit">
                            Unit Name :
                        </label>
                        <input type="text" name="unit" className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Unit Name' />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="stock">
                            Stock Limit :
                        </label>
                        <input type="number" name="stock" min={0}className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Stock Limit' />
                    </div>

                    <div className='flex justify-center'>
                    <input className='my-4 cursor-pointer bg-purple-400 w-1/2 rounded text-yellow-50 py-2 px-3' type="submit" value="ADD" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CreateItem

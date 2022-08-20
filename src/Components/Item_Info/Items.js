import React from 'react';
import useItems from '../../Hooks/useItems';

const Items = () => {
    const [items] = useItems();

    return (

        <div className="container mx-auto my-10">
            <h2 className='my-12 font-semibold text-center text-lg'> Items Lists </h2>
            <table className="w-3/4 mx-auto text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Item Type
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Item Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Sub Category
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Unit
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Stock Limit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => 
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.itemType}
                                </th>
                                <td className="py-4 px-6">
                                    {item.itemName}
                                </td>
                                <td className="py-4 px-6">
                                    {item.subCategory}
                                </td>
                                <td className="py-4 px-6">
                                    {item.unit}
                                </td>
                                <td className="py-4 px-6">
                                    {item.stockLimit}
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>

    )
}

export default Items

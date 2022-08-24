import React from 'react';
import useItems from '../../Hooks/useItems';
import { PencilAltIcon, XCircleIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';


const ItemList = () => {
    const [items,setItems] = useItems();
  const navigate = useNavigate();


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
          const url = `https://aqueous-basin-84519.herokuapp.com/item/${id}`;
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
      
      const handleEdit = id => {
        navigate(`/item-form/${id}`)
      }

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
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                <td className="flex justify-between items-center py-4 px-6">
                                    <button className='font-extrabold' onClick={() => handleDelete(item._id)}>
                                        <XCircleIcon className="w-7 h-7 text-red-500"></XCircleIcon>
                                    </button>
                                    <button className='font-extrabold' onClick={() => handleEdit(item._id)}>
                                        <PencilAltIcon className="w-7 h-7 text-blue-500"></PencilAltIcon>
                                    </button>
                                </td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>

    )
}

export default ItemList

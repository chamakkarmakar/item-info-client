import React from 'react'
import useItems from '../../Hooks/useItems';

const Unit = () => {
    const [items] = useItems();

    return (
        <div>
            <select className='bg-gray-300 py-1 font-bold' name="unit">
                <option value="itemType" selected disabled>Unit Name</option>
                {
                    items.map((item, index) =>
                        <option key={index + 1} value={index + 1} >{item.unit}</option>
                        
                    )
                }
            </select>
            
        </div>
    )
}

export default Unit

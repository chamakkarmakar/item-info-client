import React from 'react'
import useItems from '../../Hooks/useItems';


const SubCat = ({sub}) => {
    const [items] = useItems();

    return (
        <div>
            <select className='bg-gray-300 py-1 font-bold' name="subCat">
                <option value="itemType" selected disabled>SubCategory</option>
                {
                    items.map((item, index) =>
                        <option key={index + 1} value={index + 1} >{item.subCategory}</option>
                        
                    )
                }
                <option>{sub}</option>

            </select>
        </div>
    )
}

export default SubCat

import { PlusCircleIcon } from '@heroicons/react/outline';
import { XCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubCatModal from '../Item_Info/SubCatModal';
import UnitModal from '../Item_Info/UnitModal';

const ItemInfo = () => {
  const navigate = useNavigate();

  const [rowsData, setRowsData] = useState([
    {
      itemType: '',
      itemName: '',
      subCategory: '',
      unit: '',
      stockLimit: ''
    }
  ]);

  const [subModal, setSubModal] = useState(false);
  const [unitModal, setUnitModal] = useState(false);

  const [subCat, setSubCat] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [sub, setSub] = useState([]);

  const [unit, setUnit] = useState('');
  const [unitName, setUnitName] = useState([]);
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

  const handleDeleteRow = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  }

  const handleAddRow = () => {
    const rowsField = {
      itemType: '',
      itemName: '',
      subCategory: '',
      unit: '',
      stockLimit: ''
    }
    setRowsData([...rowsData, rowsField]);
  }
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const rows = [...rowsData];
    rows[index][name] = value;
    setRowsData(rows);

  }

  const handleSave = event => {
    event.preventDefault();

    const url = `https://aqueous-basin-84519.herokuapp.com/item`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(rowsData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    event.target.reset();

  }

  const handleCancel = () => {
    navigate(`/item-list`);
  }

  console.log(rowsData);

  return (
    <div>
      <h1 className='my-7 text-center underline font-semibold text-2xl'>Item Information</h1>
      <form onSubmit={handleSave} className='w-full'>
        <button type='button' className='font-extrabold' onClick={handleAddRow}>
          <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
        </button>
        {
          rowsData.map((data, index) => {
            const { itemType, itemName, subCategory, unit, stockLimit } = data;
            return (
              <div key={index} className='grid grid-cols-6 gap-x-4 mb-4'>

                {/* Item Type  */}
                <select className='bg-gray-300 font-bold' name="itemType" value={itemType} onChange={e => handleChange(index, e)}>
                  <option selected disabled>Item Type</option>
                  <option value="cotton">Cotton</option>
                  <option value="velvet">Velvet</option>
                  <option value="polyster">Polyster</option>
                </select>

                {/* Item Name  */}
                <input type="text" className='border-2 text-center' value={itemName} name="itemName" placeholder='Item Name' onChange={e => handleChange(index, e)} />

                {/* Sub Category & ADD button  */}
                <div className='flex justify-between items-center'>
                  <select className='bg-gray-300 py-1 font-bold' name="subCategory"  onChange={e => handleChange(index, e)}>
                    <option value={subCategory} selected disabled>Sub-Category</option>
                    {
                      sub.map(s =>
                        <option key={s._id} value={s.subCategory} >{s.subCategory}</option>

                      )
                    }
                    {
                      subCategories.map((sub, index) =>
                        <option key={index + 1} value={sub} >{sub}</option>
                      )
                    }

                  </select>
                  <button className='font-extrabold' onClick={() => setSubModal(true)} >
                    <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
                  </button>
                </div>

                {/* Unit & ADD button  */}
                <div className='flex justify-evenly items-center'>
                  <select className='bg-gray-300 py-1 font-bold' name="unit" onChange={e => handleChange(index, e)}>
                    <option value={unit} selected disabled>Unit Name</option>
                    {
                      units.map(u =>
                        <option key={u._id} value={u.unit} >{u.unit}</option>

                      )
                    }
                    {
                      unitName.map((unit, index) =>
                        <option key={index + 1} value={unit}>{unit}</option>
                      )
                    }
                  </select>
                  <button className='font-extrabold' onClick={() => setUnitModal(true)}>
                    <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
                  </button>
                </div>

                {/* Stock Limit  */}
                <input type="text" className='border-2 text-center' value={stockLimit} name="stockLimit" placeholder='Stock Limit' onChange={e => handleChange(index, e)} />

                <div className='flex justify-evenly items-center'>
                  {/* Add Row button */}
                  <button type='button' className='font-extrabold' onClick={handleAddRow}>
                    <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
                  </button>

                  {/* Delete Row button */}
                  <button type='button' className='font-extrabold' onClick={handleDeleteRow}>
                    <XCircleIcon className="w-7 h-7 text-red-500"></XCircleIcon>
                  </button>
                </div>

              </div>
            )
          }

          )
        }

        <div className="flex justify-around items-center my-10">
          {/* Cancel button  */}
          <input className='bg-red-400 text-center cursor-pointer py-1 px-9' type="reset" value="Cancel"
            onClick={() => handleCancel()} />

          {/* Save button  */}
          <input className='bg-green-400 text-center cursor-pointer py-1 px-12' type="submit" value="Save" />
        </div>

      </form>
      {/* MODAL */}
      {
        subModal ?
          <SubCatModal
            setSubModal={setSubModal}
            subCat={subCat}
            setSubCat={setSubCat}
            setSubCategories={setSubCategories}
            subCategories={subCategories}
          ></SubCatModal>
          : null
      }
      {
        unitModal ?
          <UnitModal
            setUnitModal={setUnitModal}
            unit={unit}
            setUnit={setUnit}
            unitName={unitName}
            setUnitName={setUnitName}
          ></UnitModal>
          : null
      }
    </div>
  )
}

export default ItemInfo

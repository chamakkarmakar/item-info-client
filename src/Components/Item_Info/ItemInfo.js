import { PlusCircleIcon } from '@heroicons/react/outline';
import { XCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubCatModal from '../Item_Info/SubCatModal';
import UnitModal from '../Item_Info/UnitModal';

const ItemInfo = () => {
  const navigate = useNavigate();

  const [rowsData, setRowsData] = useState([0]);

  const [subModal, setSubModal] = useState(false);
  const [unitModal, setUnitModal] = useState(false);

  const [subCat, setSubCat] = useState('');
  const [subCategory, setSubCategory] = useState([]);
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


  const handleSave = event => {
    event.preventDefault();
    // const item1 = event.target.item1.value;
    // const itemName1 = event.target.itemName1.value;
    // const subCat1 = event.target.subCat1.value;
    // const unit1 = event.target.unit1.value;
    // const stock1 = event.target.stock1.value;

    // const item2 = event.target.item2.value;
    // const itemName2 = event.target.itemName2.value;
    // const subCat2 = event.target.subCat2.value;
    // const unit2 = event.target.unit2.value;
    // const stock2 = event.target.stock2.value;

    // const item3 = event.target.item3.value;
    // const itemName3 = event.target.itemName3.value;
    // const subCat3 = event.target.subCat3.value;
    // const unit3 = event.target.unit3.value;
    // const stock3 = event.target.stock3.value;

    // const up1 = {
    //   itemType: item1,
    //   itemName: itemName1,
    //   subCategory: subCat1,
    //   unit: unit1,
    //   stockLimit: stock1
    // }

    // const up2 = {
    //   itemType: item2,
    //   itemName: itemName2,
    //   subCategory: subCat2,
    //   unit: unit2,
    //   stockLimit: stock2
    // }

    // const up3 = {
    //   itemType: item3,
    //   itemName: itemName3,
    //   subCategory: subCat3,
    //   unit: unit3,
    //   stockLimit: stock3
    // }

    // const insertedvalue = [up1,up2,up3]



    // const url = `https://aqueous-basin-84519.herokuapp.com/item`;
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(insertedvalue)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    // event.target.reset();

  }

  const handleCancel = () => {
    navigate(`/item-list`);
  }

  const handleAddRow = () => {
    setRowsData([...rowsData,{}]);
  }
  const handleChange = (index,e)=>{
    const {name,value}=e.target;
    const rows = [...rowsData];
    rows[index][name]=value;
    setRowsData(rows);
  }

  return (
    <div>
      <h1 className='my-7 text-center underline font-semibold text-2xl'>Item Information</h1>
      <form onSubmit={handleSave} className='w-full'>
            <button className='font-extrabold' onClick={handleAddRow}>
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>
        
        {
          rowsData.map(index=>
            <div className='grid grid-cols-6 gap-x-4 mb-4'>
          <select className='bg-gray-300 font-bold' name="item1" onChange={e=>handleChange(index,e)}>
            <option value="itemType" selected disabled>Item Type</option>
            <option value="cotton">Cotton</option>
            <option value="velvet">Velvet</option>
            <option value="polyster">Polyster</option>
          </select>

          <input type="text" className='border-2 text-center' name="itemName1" placeholder='Item Name' onChange={e=>handleChange(index,e)}/>

          <div className='flex justify-between items-center'>
            <select className='bg-gray-300 py-1 font-bold' name="subCat1" onChange={e=>handleChange(index,e)}>
              <option value="subCat1" selected disabled>Sub-Category</option>
              {
                sub.map(s =>
                  <option key={s._id} value={s.subCategory} >{s.subCategory}</option>

                )
              }
              {
                subCategory.map((sub, index) =>
                  <option key={index + 1} value={sub} >{sub}</option>
                )
              }

            </select>
            <button className='font-extrabold' onClick={() => setSubModal(true)} >
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>
          </div>


          <div className='flex justify-evenly items-center'>
            <select className='bg-gray-300 py-1 font-bold' name="unit1" onChange={e=>handleChange(index,e)}>
              <option value="unit1" selected disabled>Unit Name</option>
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

          <input type="text" className='border-2 text-center' name="stock1" placeholder='Stock Limit' onChange={e=>handleChange(index,e)}/>

          <div className='flex justify-evenly items-center'>
            <button className='font-extrabold' onClick={handleAddRow}>
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>

            <button className='font-extrabold' >
              <XCircleIcon className="w-7 h-7 text-red-500"></XCircleIcon>
            </button>
          </div>

        </div>
            )
        }
        

        {/* <div className='grid grid-cols-6 gap-x-4 mb-4'>
          <select className='bg-gray-300 font-bold' name="item2" required>
            <option value="itemType" selected disabled>Item Type</option>
            <option value="cotton">Cotton</option>
            <option value="velvet">Velvet</option>
            <option value="polyster">Polyster</option>
          </select>

          <input type="text" className='border-2 text-center' name="itemName2" placeholder='Item Name' required/>

          <div className='flex justify-between items-center'>
            <select className='bg-gray-300 py-1 font-bold' name="subCat2" required>
              <option value="subCat2" selected disabled>Sub-Category</option>
              {
                sub.map(s =>
                  <option key={s._id} value={s.subCategory} >{s.subCategory}</option>

                )
              }
              {
                subCategory.map((sub, index) =>
                  <option key={index + 1} value={sub} >{sub}</option>
                )
              }

            </select>
            <button className='font-extrabold' onClick={() => setSubModal(true)}>
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>
          </div>


          <div className='flex justify-evenly items-center'>
            <select className='bg-gray-300 py-1 font-bold' name="unit2" required>
              <option value="unit2" selected disabled>Unit Name</option>
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

          <input type="text" className='border-2 text-center ' name="stock2" placeholder='Stock Limit' required/>

          <div className='flex justify-evenly items-center'>
            <button className='font-extrabold'>
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>

            <button className='font-extrabold' >
              <XCircleIcon className="w-7 h-7 text-red-500"></XCircleIcon>
            </button>
          </div>

        </div> */}

        {/* <div className='grid grid-cols-6 gap-x-4 mb-4'>
          <select className='bg-gray-300 font-bold' name="item3" required>
            <option value="itemType" selected disabled>Item Type</option>
           <option value="cotton">Cotton</option>
            <option value="velvet">Velvet</option>
            <option value="polyster">Polyster</option>
          </select>

          <input type="text" className='border-2 text-center' name="itemName3" placeholder='Item Name' required/>

          <div className='flex justify-between items-center'>
            <select className='bg-gray-300 py-1 font-bold' name="subCat3" required>
              <option value="subCat3" selected disabled>Sub-Category</option>
              {
                sub.map(s =>
                  <option key={s._id} value={s.subCategory} >{s.subCategory}</option>

                )
              }
              {
                subCategory.map((sub, index) =>
                  <option key={index + 1} value={sub} >{sub}</option>
                )
              }

            </select>
            <button className='font-extrabold' onClick={() => setSubModal(true)}>
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>
          </div>


          <div className='flex justify-evenly items-center'>
            <select className='bg-gray-300 py-1 font-bold' name="unit3" required>
              <option value="unit3" selected disabled>Unit Name</option>
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

          <input type="text" className='border-2 text-center' name="stock3" placeholder='Stock Limit' required/>

          <div className='flex justify-evenly items-center'>
            <button className='font-extrabold'>
              <PlusCircleIcon className="w-7 h-7 text-purple-500"></PlusCircleIcon>
            </button>

            <button className='font-extrabold' >
              <XCircleIcon className="w-7 h-7 text-red-500"></XCircleIcon>
            </button>
          </div>

        </div> */}

        <div className="flex justify-around items-center my-10">

          <input className='bg-red-400 text-center cursor-pointer py-1 px-9' type="reset" value="Cancel"
            onClick={() => handleCancel()} />

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
            setSubCategory={setSubCategory}
            subCategory={subCategory}
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

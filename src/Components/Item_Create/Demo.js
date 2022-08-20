import React, { useEffect, useState } from 'react'

const Demo = () => {
  const [sub, setSub] = useState([]);
  const [cat, setCat] = useState('');
  const [items,setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/subcategory")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSub(data)
      })
  }, [setSub])

  const handleSubCategory = e => {
    e.preventDefault();
    const subCat = e.target.sub.value;
    setCat(subCat)

    setItems([...items,cat]);

    const subcategory = {
      subCategory: subCat
    }

    const url = `http://localhost:5000/subcategory`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(subcategory)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      e.target.reset();
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <select className='bg-gray-300 py-1 font-bold' name="subCat">
          <option value="itemType" defaultValue="itemType" disabled>SubCategory</option>
          {
            sub.map((s, index) =>
              <option key={index + 1} value={index + 1} >{s.subCategory}</option>

            )
          }
          {
            items.map((i,index)=> 
            <option value={i} key={index+1}>{i}</option>)
          }

        </select>
      </div>
      <div>
        <form onSubmit={handleSubCategory}>
          <div className=" mb-4">
            <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="sub">
              Add Sub Category :
            </label>
            <input type="text" 
            onChange={e=>setCat(e.target.value)}
            name="sub" 
            className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Sub Category' />
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

            <input
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit" value="ADD"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Demo

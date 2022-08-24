import React from 'react'


const SubCatModal = ({ setSubModal, subCat, setSubCat, setSubCategories, subCategories }) => {
  

  const handleSubCategory = e => {
    e.preventDefault();
    const sub = e.target.sub.value;
    console.log(sub);
    setSubCategories([...subCategories, subCat]);

    const subcategory = {
      subCategory: subCat
    }
    const url = `https://aqueous-basin-84519.herokuapp.com/subcategory`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(subcategory)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
      })
    setSubModal(false);
    e.target.reset();

  }

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-center font-semibold">
                Sub Category
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setSubModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}

            <form onSubmit={handleSubCategory}>
              <div className="flex flex-col items-center mb-4">
                <label className="block text-grey-darker text-lg font-bold mb-2" htmlFor="sub">
                  Add Sub Category :
                </label>
                <input type="text"
                  name="sub"
                  onChange={e => setSubCat(e.target.value)}
                  className='shadow border rounded w-3/4 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"' placeholder='Sub Category' />
              </div>
              <div className="flex items-center justify-end p-6 ">
                <button
                  className="text-red-500 cursor-pointer background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setSubModal(false)}
                >
                  Close
                </button>
                <input
                  className="bg-emerald-500 cursor-pointer text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit" value="ADD"
                />
              </div>
            </form>
            {/*footer*/}

          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default SubCatModal

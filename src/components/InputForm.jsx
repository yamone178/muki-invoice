import React from 'react'

const InputForm = () => {
  return (
    <div>
        <h4 className='text-lg  font-semibold mb-4'>Input Your Invoice</h4>

        <form action="" className=' p-4 border grid grid-cols-12 gap-5'>

            <div className="col-span-5">


            <div className="flex justify-between  mb-3">
                <label htmlFor="name" className=''>No</label>
                <input id='name' type="text" className='input-box'/>
            </div>

            </div>

            <div className="col-span-7">
            <div className="">
                <div className="flex justify-between mb-3">
                        <label htmlFor="date" className=''>Date</label>
                        <input id='date' type="date" className='w-[250px] input-box'/>
                </div>

                <div className="flex justify-between mb-3">
                        <label htmlFor="name" className=''>Name</label>
                        <input id='name' type="text" className='w-[250px] input-box'/>
                </div>

                <div className="flex justify-between mb-3">
                        <label htmlFor="phone" className=''>Phone</label>
                        <input id='phone' type="number" className='w-[250px] input-box'/>
                </div>

                <div className="flex justify-between mb-3">
                        <label htmlFor="address" className=''>Address</label>
                        <textarea className='w-[250px] input-box'  name="" id="address" cols="" rows="3"></textarea>
                </div>


    
            </div>

            </div>




            
           
        </form>


    </div>
  )
}

export default InputForm
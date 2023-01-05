import React from 'react'
import InputBox from './InputBox'

const InputForm = () => {
  return (
    <div>
        <h4 className='text-lg  font-semibold mb-4'>Input Your Invoice</h4>

        <form action="" className=' p-4 border grid grid-cols-12 gap-5'>

            <div className="col-span-5">
            
            <InputBox label="N0" type="number" width = 'w-[200px]'/>


            </div>

            <div className="col-span-7">
            <div className="">
                <InputBox label="Date" type="date" />

                <InputBox label="Name" type="text" />

                <InputBox label="Phone" type="number" />


                <div className="flex justify-between mb-3">
                        <label htmlFor="address" className=''>Address</label>
                        <textarea className='w-[250px] input-box'  name="" id="address" cols="" ></textarea>
                </div>


    
            </div>

            </div>




            
           
        </form>


    </div>
  )
}

export default InputForm
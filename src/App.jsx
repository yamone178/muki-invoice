import React from 'react'
import InputForm from './components/InputForm'

const App = () => {
  return (
    <div className='m-6'>
      <h2 className='text-3xl  text-center  font-extrabold mb-6 font-header italic '><span className='text-pink-400'> MUKI</span> INVOICE</h2>

      <div className="grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-6">
        <InputForm />
        </div>
       

        <div className="col-span-12 md:col-span-6">
       
        </div>
       
      </div>


    </div>
  )
}

export default App
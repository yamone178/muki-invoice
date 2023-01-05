import React from 'react'
import InputForm from './components/InputForm'
import CreateTable from './components/CreateTable.jsx'
import { Button } from 'flowbite-react'

const App = () => {
  return (
    <div className='m-6'>
      <h2 className='text-3xl  text-center  font-extrabold mb-6 font-header italic '><span className='text-pink-400'> MUKI</span> INVOICE</h2>

      <div className="grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-6">
        <InputForm />
        </div>
       

        <div className="col-span-12 md:col-span-12">

          <Button className="bg-pink-400 text-black px-3 py-1 ml-auto hover:bg-pink-500 outline-none focus:!ring-0 focus:border-0 transition duration-75 ">
            Add Item
          </Button>

          <CreateTable />
          
       
        </div>
       
      </div>


    </div>
  )
}

export default App
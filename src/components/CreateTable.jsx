import React from 'react'
import { Table } from 'flowbite-react'
import InputBox from './InputBox'


const CreateTable = () => {
  return (
    <div className='mt-5'>
        <Table>
        <Table.Head>
            <Table.HeadCell className='w-[150px]'>
                No
            </Table.HeadCell>
            <Table.HeadCell className='w-[500px]'>
                Particulars
            </Table.HeadCell>

            <Table.HeadCell className='w-[150px]'>
                Qty
            </Table.HeadCell>
            <Table.HeadCell className='w-[250px]'>
                Price
            </Table.HeadCell>

            <Table.HeadCell>
                Amount
            </Table.HeadCell>
                
            <Table.HeadCell>
            <span className="sr-only">
                Edit
            </span>
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <InputBox compo='table' type="number"/>
            </Table.Cell>
            <Table.Cell>
                <InputBox compo='table'  type="text" />
            </Table.Cell>
            <Table.Cell>
                <InputBox compo='table' type="number" />
            </Table.Cell>
            <Table.Cell>
                <InputBox compo='table' type="number"  />
            </Table.Cell>
            <Table.Cell>
                <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                Edit
                </a>
            </Table.Cell>
            </Table.Row>
           
        </Table.Body>
        </Table>
    </div>
  )
}

export default CreateTable
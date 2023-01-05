import React from 'react'

const InputBox = ({label, type, width, compo}) => {
  return (
    <div>

        {
            compo === 'table'?

            (
                <input  type={type} className={ `${width ? width : 'w-full'}  border-0 focus:border-0 focus:ring-0 focus:outline-none`}/>

            ) :

            (

                <div className="flex justify-between mb-3">
                    <label htmlFor={label} className=''>{label}</label>
                    <input id={label} type={type} className={ `${width ? width : 'w-[250px]'}   input-box`}/>
                </div>
            )
        }



    </div>
  )
}

export default InputBox
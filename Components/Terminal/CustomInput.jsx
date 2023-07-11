import React from 'react'

const CustomInput = ({inputRef}) => {

    
  return (
    <div>
       <div className='flex flex-row'>
       <h1><span className='text-red-400'>root</span><span className='text-green-300'>@</span> <span className='text-cyan-500'>technicalranjit</span><span className='text-green-300'>:$ ~  </span> 
 </h1>
       <input ref={inputRef} type='text'
        
        className='bg-transparent  outline-none
        pl-2
        text-white
        '

        />

       </div>
    </div>
  )
}

export default CustomInput
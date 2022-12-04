import React, { useState } from 'react'

function Newsletter() {
    const [phone, setPhone] = useState("");

    const onSubmit =(e)=>{
        e.preventDefault();
        const Post = {
            phone:phone
        }

        console.log(Post);
    }
  return (
    <div className='py-20'>
        <form>
      <div className='text-center' onSubmit={onSubmit}>
            <p className=' lg:text-3xl text-2xl font-bold uppercase md:px-0 px-10'>We will call you on the number provided</p>
            <p className='opacity-90 pb-4 md:px-0 px-10'>Stay up-to-date and connect with us to more information</p>
      </div>
      <div className='flex m-auto justify-center gap-2  '>
        <input className='outline-none bg-gray-50 border px-2 py-2 md:w-4/12 w-6/12 rounded-sm' onChange={(e)=>setPhone(e.phone.value)} placeholder='Enter Your Number...'/>
        <button className='bg-gray-900 text-white py-2 md:px-4 px-1 md:w-1/12 w-2/12 rounded-sm hover:bg-gray-700' type='submit'>Send</button>
      </div>
      </form>
    </div>
  )
}

export default Newsletter

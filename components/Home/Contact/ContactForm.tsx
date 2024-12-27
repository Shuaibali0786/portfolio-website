import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
        <h1 className='text-bg text-2xl md:text-3xl lg:text--[2.5rem] font-bold'>
            Let's work together
        </h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'> Drop me a line , give me a call, or send me a message by submitting the form.</p>
        {/* input fields */}
        <form className='mt-8 block w-full overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <input type="text" placeholder='First name' className='flex- bg-black  text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />

                <input type="text" placeholder='Last name' className='flex- bg-black  text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
                
            </div>

            <div className='flex pt-5  flex-col md:flex-row items-center justify-between gap-4'>
                <input type="text" placeholder='Email address' className='flex- bg-black  text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />

                <input type="text" placeholder='Fone number' className='flex- bg-black  text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
                
            </div>

            <div>
              <select className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
                <option value='' disabled >
                  Select an option
                </option>
                <option value ='frontend'>
                  Frontend Development
                </option>
                <option value ='backend'>
                  Backend Development
                </option>
                <option value ='fullstack'>
                  Fullstack Development
                </option>
              </select>
            </div>
            <div>
              <textarea className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none' rows={7} placeholder='Message'></textarea>
              <div className='mt-4'>
                <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>Send Message</button>
              </div>
            </div>

        </form> 
     
    </div>
  )
}

export default ContactForm

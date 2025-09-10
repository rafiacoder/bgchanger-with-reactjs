import { useState } from 'react'

function App() {
  const [color,setColor] = useState("skyblue")

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color}}>

        <div className=' w-full h-[70px] flex justify-between bg-amber-950 pt-3 px-5  text-white font-bold text-lg'>

          <button
          onClick={() => setColor("black")} 
          className="relative rounded font-bold bg-black px-10 py-2 duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057] text-white mb-4">
          black
          </button> 

        <button
          onClick={() => setColor("yellow")} 
          className="relative rounded font-bold bg-yellow-500 px-10 py-2  duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057] text-white  mb-4">
          yellow
        </button> 

        <button
          onClick={() => setColor("red")} 
          className="relative rounded font-bold bg-red-500 px-10 py-2 duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057] text-white  mb-4">
          red
        </button> 

        <button
          onClick={() => setColor("purple")} 
          className="relative rounded font-bold bg-purple-500 px-10 py-2 duration-300 ease-in-out  hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057] text-white  mb-4">
          purple
        </button> 
        
          <button
          onClick={() => setColor("pink")} 
          className="relative rounded font-bold bg-pink-500 px-10 py-2  duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#495057] active:shadow-[#495057] text-white  mb-4">
          pink
        </button>
        </div>
        <button
          onClick={() => setColor("skyblue")}
          className="relative rounded font-bold bg-[#022c19] px-10 py-2 shadow-[0_5px_#14532d] duration-300 ease-in-out hover:top-[1px] hover:shadow-[0_3px_#14532d] active:shadow-[#14532d] flex justify-center items-center text-white mt-20 ml-5">
          Reset to Default
        </button> 
        
     </div>
    </>
  )
}

export default App

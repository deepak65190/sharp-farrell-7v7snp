'use client'
import {useState,useEffect, useRef} from 'react'
const Page=()=>{
    const [count ,setCount]= useState(0)
    const interverId=useRef<any>(null)
    const handleStart=()=>{
       if(interverId.current) return
     interverId.current=   setInterval(()=>{
            setCount((prev)=>prev+1)
        } ,1000)
       
    }
    const handleStop=()=>{
        clearInterval(interverId.current)
        interverId.current=null
        console.log("stop")
    }
    const handleReset=()=>{
        console.log("reset")
        // handleStop()
        console.log(interverId)
        clearInterval(interverId.current)
        setCount(0)
    }

    useEffect(()=>{
return ()=>clearInterval(interverId.current)
    },[])
    return(
        <div className="h-screen
         w-full flex flex-col items-center justify-center">
            <h1 className='font-bold text-6xl'>{count} </h1>
            <button className='px-5 cursor-pointer py-3 bg-green-500 text-white  mt-5 rounded-md' onClick={handleStart}>Start</button>
            <button className='px-5 cursor-pointer py-3 bg-red-500 text-white  mt-5 rounded-md' onClick={handleStop}>Stop</button>
            <button className='px-5 cursor-pointer py-3 bg-orange-500 text-white  mt-5 rounded-md' onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Page;
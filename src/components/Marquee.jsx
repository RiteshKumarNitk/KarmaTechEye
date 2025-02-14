import React from 'react'
import { animate, motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'> 
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:5}} className='text-[17vw] whitespace-nowrap leading-none font-["Gilroy"] font-semibold uppercase pt-0 -mb-5'>We are Ochi </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:5}} className='text-[17vw] whitespace-nowrap leading-none font-["Gilroy"] font-semibold uppercase pt-0 -mb-5'>We are Ochi </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration:5}} className='text-[17vw] whitespace-nowrap leading-none font-["Gilroy"] font-semibold uppercase pt-0 -mb-5'>We are Ochi </motion.h1>
      </div>
    </div>
  )
}

export default Marquee

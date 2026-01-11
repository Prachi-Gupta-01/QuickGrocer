'use client'
import { ShoppingBasket , Bike} from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

function Welcome({nextStep}:{nextStep: (step:number)=> void }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <ShoppingBasket className="text-green-600 w-10 h-10 " />
        <h1 className='text-4xl font-bold mb-4 text-green-800'>QuickGrocer</h1>
      </motion.div>
      <motion.p 
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 ,y:0}}
      transition = {{ duration: 0.6, delay: 0.4 }}
      className= 'mt-4 text-gray-700 text-lg md:text-xl max-w-lg'
    >
        Your one-stop solution for quick and easy grocery shopping. Let's get started!
         
      </motion.p>
      <motion.div
      initial = {{ opacity: 0, scale: 1 }}
      animate = {{ opacity: 1, y: 0 }}
      transition = {{ duration: 0.6, delay: 0.6 }}
      className='flex items-center justify-center text-center gap-10 mt-10'>
        <ShoppingBasket className = 'w-24 h-24 md:w-32 md:h-32 text-green-600 drop-shadow-md'/>
        <Bike className= 'w-24 h-24 md:w-32 md:h-32 text-orange-500 drop-shadow-md'/>
      </motion.div>
      <motion.button
      initial = {{ opacity: 0, y: 20 }}
      animate = {{ opacity: 1, y:0}}
      transition = {{ duration: 0.8, delay: 0.9}}
      className = 'inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full mt-12 shadow-lg hover:shadow-xl transition-shadow duration-300'>Next   
      onclick={()=> nextStep(2)}   
      </motion.button>  
    </div> 
  )
}

export default Welcome
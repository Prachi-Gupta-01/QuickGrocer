import { ArrowLeft, Lock, Leaf, Mail, User, EyeOff, Eye, LogIn, Loader2 } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image';
import googlelogo from '@/googlelogo.jpeg' 
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
function RegisterForm({ previousStep }: { previousStep: (step:number) => void }) {
    const [name,setName]= React.useState('');
    const [email,setEmail]= React.useState('');
    const [password,setPassword]= React.useState('');
    const [showPassword,setShowPassword]= React.useState(false);
    const [loading , setLoading]= React.useState(false); 
    const router = useRouter()
    const handleRegister=async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const result = await axios.post('/api/register',{
                name,
                email,password
            });
            router.push('/login');
            setLoading(false);
            // You can redirect the user or show a success message here
        } catch (error) {
            console.error('Registration failed:', error);
            setLoading(false);
            // Handle error (e.g., show an error message to the user)
        }
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
        <div className='absolute top-6 left-6 flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors cursor-pointer' onClick={() => previousStep(1)}>
            <ArrowLeft className='w-5 h-5'/>
            <span className='font-medium'>Back</span>
        </div>
        <motion.h1 
        initial = {{ opacity: 0, y: -10 }}
        animate = {{ opacity: 1, y:0}}
        transition = {{ duration: 0.5 }}
        className='text-4xl font-extrabold   text-green-700 mb-2'> Create Account</motion.h1>
    <p> Join QuickGrocer today <Leaf className='w-5 h-5 text-green-400'/> </p>
    <motion.form 
    onSubmit={handleRegister}
    initial = {{ opacity: 0, y: 20 }}
    animate = {{ opacity: 1, y:0}}
    transition = {{ duration: 0.5, delay: 0.2 }}
    className='flex flex-col gap-5 w-full max-w-sm'>
        <div className='relative'>
            <User className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
            <input type="text" placeholder='Full Name' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400' onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        <div className='relative'>
            <Mail className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
            <input type="email" placeholder='Your Email' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className='relative'>
            <Lock className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
            <input type={showPassword?"text":"password"} placeholder='Password-min 6 characters' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            {showPassword ? <EyeOff className='absolute right-3 top-3.5 w-5 h-5 text-gray-400' onClick={() => setShowPassword(false)} /> : <Eye className='absolute right-3 top-3.5 w-5 h-5 text-gray-400' onClick={() => setShowPassword(true)} />}
        </div>
        {(() => {
            const formValidation = name.length > 0 && email.length > 0 && password.length >= 6;
            return (
                <button disabled={!formValidation || loading} className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${formValidation ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                {loading ? <Loader2 className='w-5 h-5 animate-spin'/> : "Register"}
        
                </button>
            );
        })()}
    <div className ='flex items-center gap-2 text-gray-400 text-sm mt-2'> 
        <span className='flex-1 h-px bg-gray-300'>  </span>
            OR
        <span className='flex-1 h-px bg-gray-300'>  </span>

        </div> 
    <div className='w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-xl text-gray-700 font-medium transition-all duration-200' onClick={()=>signIn("google",{callbackUrl:"/"})}>
        <Image src={googlelogo} alt='Google' width={20} height={20} className='inline-block mr-2'/>Continue with Google
    </div>
    </motion.form>
    
    <p className= 'cursor-pointer text-gray-600 mt-6 text-sm flex items-center gap-1' onClick={() => router.push("/login")}> Already have an account? <LogIn className='w-4 h-4 ml-1'/> <span className='text-green-600'>Login</span></p>
    </div>
  )
}

export default RegisterForm
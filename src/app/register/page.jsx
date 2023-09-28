"use client"
import UserRegister from '../components/user-register/User-register';
import { useState } from 'react';



export default function Register (){
    const [data, setData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        city: '',
        country: 'ukraine',
        password: '',
        status: 'initial',
        role: 1
      });

    
    return (
       <>
        <UserRegister data={data} setData={setData} />
     
    </>
       
    )
}
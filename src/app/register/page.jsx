"use client"
import UserRegister from '../components/user-register/User-register';
import { useState } from 'react';


export default function Register (){
    const [data, setData] = useState({
        email: '',
        fname: '',
        lname: '',
        phone: '',
        city: '',
        pass: '',
        status: 'initial',
        user: 'default1'
      });

    
    return (
       <>
        <UserRegister data={data} setData={setData} />
     
    </>
       
    )
}
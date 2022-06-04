import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import styles from "../components/form.module.css"
import Card from '../components/Card';

const Form = () => {
    const [form, setForm] = useState({
        username:"",
        number:"",
        date:"",
        cvv:"",
     });

     const onChange = (e) =>{
        let {name,value} =e.target;
        setForm({
            ...form, 
            [name]:value,
        })

    };

  return (
    <div>
        <form className={styles.form} action="">
            <div>
                <label htmlFor="">Name:</label>
                <Input variant='filled' name="username" onChange={onChange}  value={form.username} placeholder='Enter your name..' size='sm' />
            </div>

            <div>
                <label htmlFor="">Card number:</label>
                <Input  variant='filled' name="number" onChange={onChange}   value={form.number} placeholder='Enter Card Number...' size='sm' />
            </div>
            <div>
                <label htmlFor="">Expiry month:</label>
                <Input variant='filled' name="date" onChange={onChange}   value={form.date}  placeholder='DD/YY' size='sm' />
            </div>
            <div>
                <label htmlFor="">CVV:</label>
                <Input variant='filled' name="cvv" onChange={onChange}  value={form.cvv}  placeholder='Enter cvv' size='sm' />
            </div>
        </form>

        <Card username={form.username} number={form.number} date={form.date} cvv={form.cvv} />
    </div>
  )
}

export default Form
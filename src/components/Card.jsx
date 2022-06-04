import { StylesProvider } from '@chakra-ui/react'
import React from 'react';
import styles from "../components/form.module.css"

const card = ({username, number,date,cvv}) => {
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.img}>
                <img src="https://pngimg.com/uploads/visa/visa_PNG30.png" alt="" />
            </div>

            <div className={styles.number}>
                <h2>{number}</h2>
            </div>

            <div className={styles.name}>
                <label htmlFor="">Card Holder</label>
                <h3>{username}</h3>
            </div>

            <div className={styles.date}>
                <label htmlFor="">Expiry Date</label>
                <h3>{date}</h3>
            </div>

            <div className={styles.cvv}>
                <label htmlFor="">CVV</label>
                <h3>{cvv}</h3>
            </div>
        </div>
    </div>
  )
}

export default card
import React from 'react'
import styles from './maisinfo.module.css'


const MaisInfo = () => {
    return (
        <div className={styles.container}>
            <h2>Código do pedido: #1</h2>            
            <h3>Produtos: </h3>
            <ul>
                <li>Shapoo de Mel</li><p>R$ 50,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
            </ul>
            
        </div>
    )
}

export default MaisInfo

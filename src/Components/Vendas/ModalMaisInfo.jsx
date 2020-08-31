import React from 'react'
import styles from './modalmaisinfo.module.css'
import Modal from '../Modal/Modal'


const MaisInfo = ({setModal}) => {


    return (
        <Modal title={'Detalhes do Pedido'} setModal={setModal}>
        <div className={styles.container}>
            <h2>Código do pedido: #1</h2> 
            <h3>Cliente: Ricardo Gusi</h3>  
            <br/>         
            <h3>Produtos: </h3>
            <ul>
                <li>Shapoo de Mel</li><p>R$ 50,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                {/* <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p>
                <li>Própolis</li><p>R$ 20,00</p> */}
            </ul>
            <h4>Total: R$ 250,00</h4>
            
        </div>
        </Modal>
    )
}

export default MaisInfo

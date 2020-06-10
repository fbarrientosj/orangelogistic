import React from 'react';
import { Carousel, Timeline } from 'antd';
import { motion } from "framer-motion";


const About = () => {

    return (
  <div id="container">
    
      <h1>🍊 Cómo ganar vendiendo naranjas?</h1>
      <hr></hr>
      <br></br>
      <p>Ganar dinero vendiendo naranjas es muy simple. Debes gestionar la venta de cajas de naranjas de 15 kilos 
        a tus contactos. Tú solo debes generar el pedido y nosotros nos encargamos del despacho. Tu ganarás una comisión variable
        dependiendo de tu precio de venta (más detalles en FAQ). Para comenzar a ganar solo debes seguir los siguientes pasos:
      </p>
      <br></br>
      <Timeline pending="Ganando 🤑 " >

        <Timeline.Item color='#FF0000'>Créate una cuenta</Timeline.Item>
        <Timeline.Item color='#FF3300'>Lee el FAQ de la página! (MUY IMPORTANTE)</Timeline.Item>
        <Timeline.Item color='#ff6600'>Ingresa un pedido y la información del despacho</Timeline.Item>
        <Timeline.Item color='#ff9900'>Espera confirmación de aceptación de pedido vía whatsapp</Timeline.Item>
        <Timeline.Item color='#FFCC00'>Recibe el pago del cliente por la caja</Timeline.Item>
        <Timeline.Item color='#FFFF00'><p>Deposítanos en nuestra cuenta</p> </Timeline.Item>
      </Timeline>
    </div>
    )};

export default About;

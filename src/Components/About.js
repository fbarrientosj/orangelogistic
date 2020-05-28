import React from 'react';
import { Carousel, Timeline } from 'antd';
import { motion } from "framer-motion";


const About = () => {

    return (
  <div id="container">
    
      <h1>🍊 Cómo ganar vendiendo naranjas?</h1>
      <hr></hr>
      <br></br>
      <p>Ganar dinero vendiendo naranjas es muy simple. Debes venderles cajas de narajas de 15 kilos 
        a tus contactos. Éstas deben ser repartidas a domicilio y tu te ganarás una comisión variable
        dependiendo de tu precio de venta (más detalles en FAQ). Para comenzar a ganar solo debes seguir los siguientes pasos:
      </p>
      <br></br>
      <Timeline pending="Ganando 🤑 " >

        <Timeline.Item color='red'>Créate una cuenta</Timeline.Item>
        <Timeline.Item color='red'>Lee el FAQ de la página! (MUY IMPORTANTE)</Timeline.Item>
        <Timeline.Item color='red'>Haz tu pedido</Timeline.Item>
        <Timeline.Item color='red'>Espera confirmación de aceptación de pedido vía whatsapp</Timeline.Item>
        <Timeline.Item color='red'>Retira en la dirección indicada</Timeline.Item>
        <Timeline.Item color='red'>Entrega a tus clientes en sus casas</Timeline.Item>
        <Timeline.Item color='green'><p>Depositanos en nuestra cuenta</p> </Timeline.Item>
      </Timeline>
    </div>
    )};

export default About;

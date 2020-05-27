import React from 'react';
import { Carousel, Timeline } from 'antd';
import { motion } from "framer-motion";


const About = () => {

    return (
  <div id="container">
    <h1>Cómo ganar vendiendo naranjas?</h1>
    <div id="first">
      <motion.div
      className="container"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    />
    <p> </p>
    <motion.div
      className="container"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    />
    <p> </p>
    <motion.div
      className="container"
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    />
    
    </div>

    <div id="second">
      
      <Timeline pending="Ganando 🤑 " >

        <Timeline.Item color='red'>Créate una cuenta</Timeline.Item>
        <Timeline.Item color='red'>Haz tu pedido</Timeline.Item>
        <Timeline.Item color='red'>Espera confirmación de aceptación de pedido vía whatsapp</Timeline.Item>
        <Timeline.Item color='red'>Retira en la dirección indicada</Timeline.Item>
        <Timeline.Item color='red'>Entrega cliente final</Timeline.Item>
        <Timeline.Item color='green'>
        <p>Deposita la diferencia en nuestra cuenta
        (en un máximo de</p>
        <p>7 días después del retiro de la fruta)</p> </Timeline.Item>
      </Timeline>
    </div>
    </div>
    )};

export default About;

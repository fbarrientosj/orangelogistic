import React, {useState} from 'react';
import { List, Avatar } from 'antd';

const data = [
  {
    title: '¿Cuánto ganaré por caja vendida?',
    desc: 'Lo que ganes dependerá de tu precio de venta. Tú debes devolverme $11000 pesos por caja por lo que ganes dependerá de tu precio de venta.',
  },
  {
    title: '¿Existe algún precio sugerido?',
    desc: 'Se recomienda vender la caja en $15.000 dado este es un precio bastante menor a los supermercados y es más bajo que la competencia.'
  },
  {
    title: '¿Cuánto pesa cada caja?',
    desc: 'Cada caja pesa 15 kilos (+-500 gramos).'
  },
  {
    title: '¿Puedo devolver una caja que retiré pero no logré vender?',
    desc: 'No. Si ya retiraste la caja para venderla no puedes devolvérnosla.'
  }, 
  {
    title: '¿Debo pagar el costo de la caja al retirarla?',
    desc: 'No. Puedes pagarnos de vuelta en un plazo máximo de 7 días.'
  }, 
  {
    title: '¿Puedo subdividir la caja de 15 kilos para vender de a menos kilos?',
    desc: 'Sí. Tú puedes cambiar al packaging como quieras, solo debes depositar el total del monto de la caja antes de los 7 días.'
  }, 
  {
    title: '¿Dónde encuentro flyers para promocionar las cajas?',
    desc: 'En una de las pestañas de esta página existen algunos flyers pre hechos (recuerda agregarles tus datos de contacto). Si te motivas puedes crear tus propios anuncios.'
  }, 
  {
    title: '¿Las naranjas son de jugo o de mesa?',
    desc: 'Estas naranjas son un híbrido. Poseen mucho jugo pero también son muy dulces para comerse directamente.'
  }, 
  {
    title: '¿De dónde vienen las naranjas y de qué calidad son?',
    desc: 'Provienen del fundo San Antonio, ubicado en la localidad de Pichidegua (sexta región). Son de calidad exportación.'
  }
];
let questionmark = require('../img/4.png')


const Faq = () => {

    return (
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={questionmark} />}
              title={<a href={questionmark} download>{item.title}</a>}
              description={item.desc}
            />
          </List.Item>
        )}
      />
    )};


export default Faq;
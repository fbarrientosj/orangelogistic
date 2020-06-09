import React, {useState} from 'react';
import { List, Avatar } from 'antd';

const data = [
  {
    title: '¿Cuánto ganaré por caja vendida?',
    desc: 'Lo que ganes dependerá de tu precio de venta. Tú debes devolverme $12.000 pesos por caja por lo que ganes dependerá de tu precio de venta.',
  },
  {
    title: '¿Existe algún precio sugerido?',
    desc: 'Se recomienda vender la caja en $16.000 dado este es un precio bastante menor a los supermercados y es más bajo que la competencia.'
  },
  {
    title: '¿Cuánto pesa cada caja?',
    desc: 'Cada caja pesa 15 kilos (+-500 gramos).'
  }, 
  {
    title: '¿Me cobrarán el delivery?',
    desc: 'No, está incluído en los $12.000'
  }, 
  {
    title: '¿Qué pasa si se despacha una caja y no hay nadie en el domicilio',
    desc: 'Se te recargarán $2.000 que equivale al precio de despacho.'
  }, 
  {
    title: '¿Cúando se despacharán las cajas?',
    desc: 'Por ahora la fecha es variable. Puede ser desde el domingo 7 hasta el viernes 12. Más actualizaciones serán enviadas por interno a los vendedores dependiendo de cada pedido.'
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
              title={item.title}
              description={item.desc}
            />
          </List.Item>
        )}
      />
    )};


export default Faq;
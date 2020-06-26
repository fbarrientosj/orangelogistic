import React, {useState} from 'react';
import { List, Avatar, Collapse } from 'antd';
import cara from '../img/blood.jpg';
import cara2 from '../img/c4.jpg';
import cara3 from '../img/c5.jpg';
import { CardHeader } from 'reactstrap';

const data = [
  {
    title: '¿Cuánto ganaré por caja/malla vendida?',
    desc: 'Lo que ganes dependerá de tu precio de venta. Tú debes devolverme $12.300 pesos por caja/malla por lo que ganes dependerá de tu precio de venta.',
  },
  {
    title: '¿Existe algún precio sugerido?',
    desc: 'Se recomienda vender la caja/malla en $16.000 dado este es un precio bastante menor a los supermercados y es más bajo que la competencia.'
  },
  {
    title: '¿Cuánto pesa cada caja/malla?',
    desc: 'Cada caja/malla pesa 15 kilos (+-500 gramos). Disclaimer: Esta vez podría tocarte una malla o una caja indistíntamente.'
  }, 
  {
    title: '¿Me cobrarán el delivery?',
    desc: 'No, está incluído en los $12.300'
  }, 
  {
    title: '¿Qué pasa si se despacha una caja/malla y no hay nadie en el domicilio',
    desc: 'Se te recargarán $2.300 que equivale al precio de despacho.'
  }, 
  {
    title: '¿Cúando se despacharán las caja/malla?',
    desc: 'Por ahora la fecha es variable. Puede ser desde el domingo 4 de julio hasta el viernes 9 de julio. Más actualizaciones serán enviadas por interno a los vendedores dependiendo de cada pedido.'
  }, 
  {
    title: '¿Dónde encuentro flyers para promocionar las caja/malla?',
    desc: 'En una de las pestañas de esta página existen algunos flyers pre hechos (recuerda agregarles tus datos de contacto). Si te motivas puedes crear tus propios anuncios.'
  }, 
  {
    title: '¿Qué tipo de naranja es?',
    desc: 'El tipo de naranja es Cara-Cara. Esta naranja tiene la característica de ser roja por dentro. El sabor es igual al de una naranja normal (pero más dulce). Más fotos disponibles por el grupo de vendedores',
  },
  {
    title: '¿Las naranjas son de jugo o de mesa?',
    desc: 'Estas naranjas son un híbrido. Poseen mucho jugo pero también son muy dulces para comerse directamente.'
  }, 
  {
    title: '¿De dónde vienen las naranjas y de qué calidad son?',
    desc: 'Provienen del fundo San Antonio, ubicado en la localidad de Pichidegua (sexta región). Son de calidad exportación.'
  }, 
  {
    title: '¿Recibiré comisión si la venta no se efectúa?',
    desc: 'No. Eso sí, se el camión fue a despachar el pedido y no se efectuó la venta, se te cargarán $2000 :('
  }
];
let questionmark = require('../img/4.png')

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Faq = () => {

    return (
        <div>
        <div>
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
    </div>
    <div>
      <h1> </h1>
      <h1>Sobre las naranjas cara cara</h1>
      <img src={cara} alt="Logo" width="70%" class="center"/>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="No entiendo nada de esto de las 'naranjas cara-cara', explícame!" key="1">
          <p>Las naranjas tipo cara-cara son naranjas con la característica de ser rojas por dentro. Generalmente son transadas en mercados europeos exclusivos, ya que además de ser muy dulces, son usadas para hacer distintas preparaciones culinarias debido a su intenso color.</p>
        </Panel>
        <Panel header="¿Tienen el sabor de una naranja normal?" key="2">
          <p>Sí. Tiene el sabor de una naranja normal. Tienden a ser más dulces y jugosas que las naranjas fukumoto (de semanas anteriores). Tienen un color más pálido por fuera, pero por dentro uff!</p>
        </Panel>
        <Panel header="¿Tienen las mismas características que la naranja fukumoto (de semanas anteriores)?" key="3">
          <p>Sí. Es una naranja híbrida (jugo & mesa). Tiene un largo período de vida antes de descomponerse (cerca de 2 semanas).</p>
        </Panel>
        <Panel header="Más fotos?" key="3">
        <img src={cara2} alt="Logo" width="70%" class="center"/>
        <img src={cara3} alt="Logo" width="70%" class="center"/>
        </Panel>
    </Collapse>
    </div>
    </div>
    )};



export default Faq;
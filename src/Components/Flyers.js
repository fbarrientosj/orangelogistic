import React, {useState} from 'react';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Historia Instagram 1',
    photo: require('../img/1.pdf')
  },
  {
    title: 'Historia Instagram 2',
    photo: require('../img/2.pdf')
  },
  {
    title: 'Post Instagram 1',
    photo: require('../img/min3.png')
  }
];
const Flyers = () => {

    return (
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.photo} />}
              title={<a href={item.photo} download>{item.title}</a>}
              description="Recuerda agregar tus datos de contacto al pie de la imagen"
            />
          </List.Item>
        )}
      />
    )};


export default Flyers;
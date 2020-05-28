import React, {useState} from 'react';
import { Button } from 'antd';
import './App.less';

import { Layout, Menu, Breadcrumb } from 'antd';

import DeliveryForm from './Components/SimpleForm';
import RegisterForm from './Components/RegisterForm';
import About from './Components/About';
import Flyers from './Components/Flyers';

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { Header, Content, Footer } = Layout;
const key = {'sheet': process.env.REACT_APP_1_API_KEY, 'encryption':  process.env.REACT_APP_2_API_KEY};
function App() {

  const [view, setview] = useState('about');
  
  return (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" /> 
      <Menu theme="dark" mode="horizontal" title="🍊" defaultSelectedKeys={['1']}>
        <Menu.Item onClick={() => setview('about')} key="1">🍊 Cómo funciona?</Menu.Item>
        <Menu.Item onClick={() => setview('signin')} key="2">Haz un pedido</Menu.Item>
        <Menu.Item onClick={() => setview('delivery')} key="3">Regístrate como vendedor</Menu.Item>
        <Menu.Item onClick={() => setview('flyers')} key="4">Flyers</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      
        {view === 'about' ? <Breadcrumb.Item></Breadcrumb.Item> : ''}
        {view === 'signin' ?<Breadcrumb.Item>Regístrate y comienza a vender</Breadcrumb.Item> : ''}
        {view === 'delivery' ? <Breadcrumb.Item>Recuerda que tienes que estar registrado para hacer un pedido!</Breadcrumb.Item> : ''}
        {view === 'flyers' ? <Breadcrumb.Item>Algunos anuncios que puedes publicar en redes sociales</Breadcrumb.Item> : ''}
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {view === 'about' ? <About></About> : ''}
        {view === 'signin' ? <DeliveryForm {...key}></DeliveryForm> : ''}
        {view === 'delivery' ? <RegisterForm {...key}></RegisterForm> : ''}
        {view === 'flyers' ? <Flyers {...key}></Flyers> : ''}
  
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Cualquier duda mándame un whatsapp +56965688057 😊</Footer>

  </Layout>
  
);
}

export default App;

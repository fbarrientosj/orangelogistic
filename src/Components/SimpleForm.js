import React, {useState} from 'react';
import moment from 'moment';
import { Form, Input, Button, InputNumber, AutoComplete, DatePicker, Spin, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';


const { GoogleSpreadsheet } = require('google-spreadsheet');

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 11,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 8,
  },
};

 

const Demo = (key) => {
  
    const [passwordError, setError] = useState(false);
    const [loading, setloading] = useState(false);
    const [success, setsuccess] = useState(false);

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = value => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['@gmail.com', '@uc.cl', '@udd.cl', '@uandes.cl'].map(domain => `${value}${domain}`));
      }
    };

  const websiteOptions = autoCompleteResult.map(email => ({
    label: email,
    value: email,
  }));

    async function passwordVerification(mail, password) {
    
    var creds = require('../client_secret.json');
    var doc = new GoogleSpreadsheet(key.sheet);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    
    const sheet = doc.sheetsByIndex[1];
    
    const rows = await sheet.getRows();
    var success = false;
    console.log('HOLA')
    rows.forEach(row => {
        if (CryptoAES.decrypt(row.password, 'a').toString(CryptoENC) == CryptoAES.decrypt(password, 'a').toString(CryptoENC) && row.mail == mail){
            success = true;
        }}
    )
    return success;}

    
  

  const onFinish = async values => {
    setsuccess(false);
    setloading(true);
    var creds = require('../client_secret.json');
    var doc = new GoogleSpreadsheet(key.sheet);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    var pass = CryptoAES.encrypt(values.password, 'OrangeBussiness').toString();
    let verification = await passwordVerification(values.mail.toLowerCase(), pass)

    if (verification) {
    const sheet = doc.sheetsByIndex[0];
    const larryRow = await sheet.addRow({ mail: values.mail.toLowerCase(), cantidad: values.cantidad,
        retiro: values.retiro.format('DD-MM-YYYY'), fecha: moment().format('DD-MM-YYYY')});
    console.log('Success:');
    setError(false);
    setsuccess(true);
    } else {
        setError(true);
        setsuccess(false);
    }
    setloading(false);
  };


  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (!loading){
  return (
    <div>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      type="flex" 
      align="center"
      justify="center" 
      align="middle" 
      display='inline-block'
>
    <Form.Item
        name="mail"
        label="E-mail"
        
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      > 
      
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} >
          <Input suffix='😊'/>
        </AutoComplete>
    
      </Form.Item>

      <Form.Item
        label={
          <span>
            Número de cajas&nbsp;
            <Tooltip title="Máximo de 30 cajas">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        name="cantidad"
        rules={[
          {
            required: true,
            message: 'Te falta agregar el número de cajas a pedir',
          },
        ]}
      >
        <InputNumber max={30} min={1} defaultValue={1} size='large' autoFocus={true}/>
      </Form.Item>

      <Form.Item label="Cuándo retirarás?" 
      name="retiro"
      rules={[
          {
            required: true,
            message: 'Agrega la fecha de retiro',
          },
        ]}>
          <DatePicker />
        </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Ingresa la contraseña',
          },
          { defaultValue: 1 }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <b style={{color:'red'}} >{passwordError ? 'Contraseña o nombre erróneo' : ''}</b> 
      <b style={{color:'green'}} class='centered' >{success ? 'Pedido creado con éxito' : ''}</b> 
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ textAlign: 'center' }}>
          Submit
        </Button>
      </Form.Item>
      
    </Form>  
    </div>
  )
}else{
    return (<Spin size='large' />)
}}



export default Demo;

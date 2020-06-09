import React, {useState} from 'react';
import moment from 'moment';
import { Form, Input, Button, InputNumber, AutoComplete, Cascader, Spin, Tooltip, Select } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';


const { GoogleSpreadsheet } = require('google-spreadsheet');


const { Option } = Select;

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

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 80,
      }}
    >
      <Option value="+569">+569</Option>
    </Select>
  </Form.Item>
);

const residences = [
  {
    value: 'Las Condes',
    label: 'Las Condes'
  },
  {
    value: 'Lo Barnechea',
    label: 'Lo Barnechea',
  },
  {
      value: 'Providencia',
      label: 'Providencia'
  },
  {
    value: 'Ñuñoa',
    label: 'Ñuñoa'
},
{
    value: 'Vitacura',
    label: 'Vitacura',
},
{
    value: 'Peñalolén',
    label: 'Peñalolén'
},
{
    value: 'Otro',
    label: 'Otro'
},
];

 

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
    let comuna_fixed = values.comuna.join('')
    const larryRow = await sheet.addRow({ mail: values.mail.toLowerCase(), cliente: values.cliente,
        celular: values.celular, fecha: moment().format('DD-MM-YYYY'), calle: values.calle, 
        numero: values.numero, departamento: values.departamento, comuna: comuna_fixed,  
        observacion: values.observacion });
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
      <h1 style={{color:'red'}} >{passwordError ? 'Contraseña o nombre erróneo' : ''}</h1> 
      <h1 style={{color:'green'}} class='centered' >{success ? 'Pedido creado con éxito' : ''}</h1>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
        prefix: '+569'
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
        name="cliente"
        label="Nombre cliente"
        
        rules={[
          {
            required: true,
            message: 'Agrega el nombre del cliente',
          },
        ]}
      > 
          <Input suffix='😊'/>
      </Form.Item>

      <Form.Item
        name="celular"
        label={
          <span>
            Teléfono de contacto&nbsp;
            <Tooltip title="En caso de que hayan problema con la entrega">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          { min: 8, message: 'El número debe contener 8 dígitos' },
          { max: 8, message: 'El número debe contener 8 dígitos' },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          suffix='☎️'
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="calle"
        label="Calle"
        
        rules={[
          {
            required: true,
            message: 'Agrega la calle del despacho',
          },
        ]}
      > 
          <Input suffix='🙇'/>
      </Form.Item>

      <Form.Item
        label='Número de casa/edificio'
        name="numero"
        rules={[
          {
            required: true,
            message: 'Te falta el número de la casa de despacho',
          },
        ]}
      >
        <InputNumber size='large' autoFocus={true}/>
      </Form.Item>

      <Form.Item
        name="departamento"
        label={
          <span>
            Número de departamento&nbsp;
            <Tooltip title="Si el despacho es a una casa, déjalo vacío!">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
      > 
          <Input suffix='🏢'/>
      </Form.Item>

      <Form.Item
        name="comuna"
        label={
          <span>
            Comuna&nbsp;
            <Tooltip title="Si la comuna no está, no tenemos despacho :(">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Ingresa la comuna de despacho',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="observacion"
        label={
          <span>
            ¿Algún detalle extra?&nbsp;
            <Tooltip title="Timbre malo, restricción horaria del despacho ...">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
      > 
          <Input suffix='❗'/>
      </Form.Item>

      <Form.Item
        name="mail"
        label="Tu email"
        
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
          <Input suffix='✉'/>
        </AutoComplete>
    
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

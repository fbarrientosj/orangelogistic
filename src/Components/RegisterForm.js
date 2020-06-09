import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Spin,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import CryptoAES from 'crypto-js/aes';


const { GoogleSpreadsheet } = require('google-spreadsheet');


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const residences = [
  {
    value: 'Las Condes',
    label: 'Las Condes',
    children: [
      {
        value: 'Los Dominicos',
        label: 'Los Dominicos',
      },
      {
        value: 'San Damián',
        label: 'San Damián',
      },
      {
        value: 'Sector Escuela Militar',
        label: 'Sector Escuela Militar',
      },
      {
        value: 'Sector Rotonda Atenas',
        label: 'Sector Rotonda Atenas',
      },
      {
        value: 'Otro',
        label: 'Otro',
      },
    ],
  },
  {
    value: 'Lo Barnechea',
    label: 'Lo Barnechea',
    children: [
      {
        value: 'Los Trapenses',
        label: 'Los Trapenses',
      },
      {
        value: 'El Huinganal',
        label: 'El Huinganal',
      },
      {
        value: 'Otro',
        label: 'Otro',
      },
    ],
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
    children: [
        {
          value: 'Sector clínica Alemana',
          label: 'Sector clínica Alemana',
        },
        {
          value: 'Sector Santa María Manquehue',
          label: 'Sector Santa María Manquehue',
        },
        {
          value: 'Otro',
          label: 'Otro',
        },
      ],
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
const formItemLayout = {
  labelCol: {
    xs: {
      span: 1,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 5,
    },
    sm: {
      span: 11,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 5,
      offset: 0,
    },
    sm: {
      span: 6,
      offset: 5,
    },
  },
};

const RegistrationForm = (key) => {
  const [form] = Form.useForm();
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);

  const onFinish = async values => {
    setsuccess(false);
    setloading(true);
    var creds = require('../client_secret.json');  
    var doc = new GoogleSpreadsheet(key.sheet);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[1];
    let direccion = values.residencia.join('-')
    var pass = CryptoAES.encrypt(values.password, key.encryption).toString();
    const larryRow = await sheet.addRow({ nombre: values.nombre, mail: values.mail.toLowerCase(),
        apellido: values.apellido, residencia: direccion, celular: values.celular,
         password: pass, creacion: moment().format('DD-MM-YYYY'), instagram : values.instagram});
    setloading(false);
    setsuccess(true);
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


  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['@gmail.com', '@uc.cl', '@udd.cl', '@uandes.cl'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(mail => ({
    label: mail,
    value: mail,
  }));

  if (loading){
    return (<Spin size='large' />)
  } else {
  return (
    <div>
    <h1 style={{color:'green'}} class='centered' >{success ? 'Cuenta creada con éxito' : ''}</h1> 

    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['Comuna', 'Sector'],
        prefix: '+569',
      }}
      scrollToFirstError
    >

    <Form.Item
        name="nombre"
        label="Nombre"
        
        rules={[
          {
            required: true,
            message: 'Agrega tu nombre',
          },
        ]}
      > 
          <Input suffix='😊'/>
      </Form.Item>
      <Form.Item
        name="apellido"
        label="Apellido"
        
        rules={[
          {
            required: true,
            message: 'Agrega tu apellido',
          },
        ]}
      > 
          <Input suffix='😊'/>
      </Form.Item>
      <Form.Item
        name="instagram"
        label="Instagram"
        
        rules={[
          {
            required: true,
            message: 'Agrega tu cuenta de instagram',
          },
        ]}
      > 
          <Input suffix='✅' prefix='@'/>
      </Form.Item>

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
          <Input suffix='📧'/>
        </AutoComplete>
    
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          { min: 6, message: 'La contraseña debe tener más de 6 caracteres' },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="residencia"
        label="Lugar de residencia"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="celular"
        label="Celular"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
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
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}};

export default RegistrationForm;
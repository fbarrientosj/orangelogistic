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
    value: 'Vitacura',
    label: 'Vitacura',
},
{
    value: 'Peñalolén',
    label: 'Peñalolén'
}, 
{
  value: 'Chicureo',
  label: 'Chicureo'
}
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
      
        if (row.mail == mail){
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
      <h1 style={{color:'red'}} >Lamentablemente estamos fuera de stock! Más actualizaciones en los próximos días!</h1> 
    </div>
  )
}else{
    return (<Spin size='large' />)
}}



export default Demo;

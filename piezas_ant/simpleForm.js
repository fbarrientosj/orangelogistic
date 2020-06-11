
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
        {
          required: true,
          message: 'Agrega el número del cliente',
        },
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

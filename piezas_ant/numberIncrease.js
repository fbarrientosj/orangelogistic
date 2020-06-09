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
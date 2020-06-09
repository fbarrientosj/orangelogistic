<Form.Item label="Cuándo retirarás?" 
      name="retiro"
      rules={[
          {
            required: true,
            message: 'Agrega la fecha de retiro',
          },
        ]}>
          <DatePicker 
          disabledDate={current => {
            return  current < moment().add(-1, "day")}}/>
        </Form.Item>
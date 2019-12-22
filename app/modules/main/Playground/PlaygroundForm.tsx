import React, { PureComponent } from 'react';

import Cascader from 'antd/lib/cascader';
import DatePicker from 'antd/lib/date-picker';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import TimePicker from 'antd/lib/time-picker';

const { Option } = Select;

export default class PlaygroundForm extends PureComponent {
  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  render() {
    return (
      <Form {...this.formItemLayout}>
        <Form.Item
          label="Fail"
          validateStatus="error"
          help="Should be combination of numbers & alphabets"
        >
          <Input placeholder="unavailable choice" id="error" />
        </Form.Item>

        <Form.Item label="Warning" validateStatus="warning">
          <Input placeholder="Warning" id="warning" />
        </Form.Item>

        <Form.Item
          label="Validating"
          hasFeedback={true}
          validateStatus="validating"
          help="The information is being validated..."
        >
          <Input placeholder="I'm the content is being validated" id="validating" />
        </Form.Item>

        <Form.Item label="Success" hasFeedback={true} validateStatus="success">
          <Input placeholder="I'm the content" id="success" />
        </Form.Item>

        <Form.Item label="Warning" hasFeedback={true} validateStatus="warning">
          <Input placeholder="Warning" id="warning2" />
        </Form.Item>

        <Form.Item
          label="Fail"
          hasFeedback={true}
          validateStatus="error"
          help="Should be combination of numbers & alphabets"
        >
          <Input placeholder="unavailable choice" id="error2" />
        </Form.Item>

        <Form.Item label="Success" hasFeedback={true} validateStatus="success">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Warning" hasFeedback={true} validateStatus="warning">
          <TimePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Error" hasFeedback={true} validateStatus="error">
          <Select defaultValue="1">
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Validating"
          hasFeedback={true}
          validateStatus="validating"
          help="The information is being validated..."
        >
          <Cascader defaultValue={['1']} options={[]} />
        </Form.Item>

        <Form.Item label="inline" style={{ marginBottom: 0 }}>
          <Form.Item
            validateStatus="error"
            help="Please select the correct date"
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          >
            <DatePicker />
          </Form.Item>
          <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>
            -
          </span>
          <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <DatePicker />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Success" hasFeedback={true} validateStatus="success">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    );
  }
}

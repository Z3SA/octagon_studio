import React, { PureComponent } from 'react';

import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Pagination from 'antd/lib/pagination';
import Steps from 'antd/lib/steps';
import AutoComplete from 'antd/lib/auto-complete';
import Checkbox from 'antd/lib/checkbox';
import Input from 'antd/lib/input';
import Cascader from 'antd/lib/cascader';
import DatePicker from 'antd/lib/date-picker';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import Rate from 'antd/lib/rate';
import Radio from 'antd/lib/radio';
import Switch from 'antd/lib/switch';
import Slider from 'antd/lib/slider';
import TreeSelect from 'antd/lib/tree-select';
import Transfer from 'antd/lib/transfer';
import TimePicker from 'antd/lib/time-picker';

import styles from './Playground.m.scss';
import PlaygroundForm from './PlaygroundForm';

const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;
const { Step } = Steps;
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Option, OptGroup } = Select;
const { TreeNode } = TreeSelect;

export default class Playground extends PureComponent {
  dropdown1 = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="">
          2nd menu item{' '}
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  dropdown2 = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled={true}>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );

  cascader1Options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  multipleSelectOptions = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6'];

  transferData = () => {
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    return mockData;
  }

  render() {
    return (
      <div className={styles.Playground}>
        <Title level={2}>Playground</Title>

        <Row gutter={16}>
          <Col span={15}>
            <Button type="primary" className={styles.Playground__btn}>
              Buton 1
            </Button>
            <Button className={styles.Playground__btn}>Buton 2</Button>
            <Button className={styles.Playground__btn} type="dashed">
              Buton 3
            </Button>
            <Button className={styles.Playground__btn} type="danger">
              Button 4
            </Button>
            <Button className={styles.Playground__btn} type="link">
              Button 5
            </Button>
            <Button
              className={styles.Playground__btn}
              type="primary"
              shape="circle"
              icon="search"
            />
            <Button className={styles.Playground__btn} type="primary" icon="search">
              Button 7
            </Button>
            <Button className={styles.Playground__btn} type="primary" loading={true}>
              Button 8
            </Button>

            <Button.Group className={styles.Playground__btn}>
              <Button type="primary">
                <Icon type="left" />
                Go back
              </Button>
              <Button type="primary">
                Go forward
                <Icon type="right" />
              </Button>
            </Button.Group>

            <Button.Group className={styles.Playground__btn}>
              <Button type="primary" icon="cloud" />
              <Button type="primary" icon="cloud-download" />
            </Button.Group>
          </Col>

          <Col span={9} style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
            <Button ghost={true} type="primary" className={styles.Playground__btn}>
              Buton 1
            </Button>
            <Button ghost={true} className={styles.Playground__btn}>
              Buton 2
            </Button>
            <Button ghost={true} className={styles.Playground__btn} type="dashed">
              Buton 3
            </Button>
            <Button ghost={true} className={styles.Playground__btn} type="danger">
              Button 4
            </Button>
            <Button ghost={true} className={styles.Playground__btn} type="link">
              Button 5
            </Button>
          </Col>

          <Col span={24} style={{ margin: '30px 0' }}>
            <Typography>
              <Paragraph>
                In the process of internal desktop applications development, many
                different design specs and implementations would be involved, which might
                cause designers and developers difficulties and duplication and reduce the
                efficiency of development.
              </Paragraph>
              <Paragraph>
                After massive project practice and summaries, Ant Design, a design
                language for background applications, is refined by Ant UED Team, which
                aims to{' '}
                <Text strong={true}>
                  uniform the user interface specs for internal background projects, lower
                  the unnecessary cost of design differences and implementation and
                  liberate the resources of design and front-end development
                </Text>
              </Paragraph>
              <Title level={2}>Guidelines and Resources</Title>
              <Paragraph>
                We supply a series of design principles, practical patterns and high
                quality design resources (<Text code={true}>Sketch</Text> and{' '}
                <Text code={true}>Axure</Text>), to help people create their product
                prototypes beautifully and efficiently.
              </Paragraph>

              <Paragraph>
                <ul>
                  <li>
                    <a href="/docs/spec/proximity">Principles</a>
                  </li>
                  <li>
                    <a href="/docs/pattern/navigation">Patterns</a>
                  </li>
                  <li>
                    <a href="/docs/resource/download">Resource Download</a>
                  </li>
                </ul>
              </Paragraph>
            </Typography>
          </Col>

          <Col span={6}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>

              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
              </Breadcrumb.Item>

              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
          </Col>

          <Col span={6}>
            <Dropdown overlay={this.dropdown1}>
              <Button className={styles.Playground__btn}>Hover for dropdown 1</Button>
            </Dropdown>

            <Dropdown overlay={this.dropdown2}>
              <Button className={styles.Playground__btn}>Hover for dropdown 2</Button>
            </Dropdown>
          </Col>

          <Col span={12} style={{ marginBottom: '16px' }}>
            <Menu mode="horizontal">
              <Menu.Item key="mail">
                <Icon type="mail" />
                Navigation One
              </Menu.Item>

              <Menu.Item key="app" disabled={true}>
                <Icon type="appstore" />
                Navigation Two
              </Menu.Item>

              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon type="setting" />
                    Navigation Three - Submenu
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>

                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
          </Col>

          <Col span={6} style={{ marginBottom: '16px' }}>
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>

                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>

                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>

              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Navigation Three</span>
                  </span>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>

          <Col span={12}>
            <Pagination showSizeChanger={true} defaultCurrent={3} total={500} />
            <br />
            <Pagination showSizeChanger={true} defaultCurrent={3} total={500} />
          </Col>

          <Col span={12}>
            <Steps>
              <Step status="finish" title="Login" icon={<Icon type="user" />} />
              <Step
                status="finish"
                title="Verification"
                icon={<Icon type="solution" />}
              />
              <Step status="process" title="Pay" icon={<Icon type="loading" />} />
              <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
          </Col>

          <Col span={6}>
            <Steps direction="vertical" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </Col>

          <Col span={6}>
            <Steps direction="vertical" size="small" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </Col>

          <Col span={6}>
            <AutoComplete
              style={{ width: 200 }}
              dataSource={['Burns Bay Road', 'Downing Street', 'Wall Street']}
              placeholder="Type data"
            />
          </Col>

          <Col span={6}>
            <AutoComplete
              dataSource={['Burns Bay Road', 'Downing Street', 'Wall Street']}
              style={{ width: 200 }}
            >
              <TextArea
                placeholder="input here"
                className="custom"
                style={{ height: 50 }}
              />
            </AutoComplete>
          </Col>

          <Col span={6}>
            <Checkbox>Checkbox 1</Checkbox>
            <Checkbox defaultChecked={false} disabled={true} />
            <Checkbox defaultChecked={true} disabled={true} />
            <br />
            <Checkbox.Group
              options={['Apple', 'Pear', 'Orange']}
              defaultValue={['Apple']}
            />
          </Col>

          <Col span={6}>
            <Cascader
              defaultValue={['zhejiang', 'hangzhou', 'xihu']}
              options={this.cascader1Options}
              style={{ width: '100%' }}
            />
          </Col>

          <Col span={6}>
            <Cascader options={this.cascader1Options} placeholder="Please select" />
          </Col>

          <Col span={6}>
            <DatePicker />
          </Col>

          <Col span={6}>
            <MonthPicker placeholder="Select month" />
          </Col>

          <Col span={6}>
            <RangePicker />
          </Col>

          <Col span={6}>
            <WeekPicker placeholder="Select week" />
          </Col>

          <Col span={12} style={{ padding: '16px 0' }}>
            <PlaygroundForm />
          </Col>

          <Col span={6}>
            <InputNumber min={1} max={10} defaultValue={3} />
          </Col>

          <Col span={6}>
            <Input placeholder="Basic usage" />
          </Col>

          <Col span={6}>
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
          </Col>

          <Col span={6}>
            <Input
              addonBefore={
                <Select defaultValue="Http://" style={{ width: 90 }}>
                  <Option value="Http://">Http://</Option>
                  <Option value="Https://">Https://</Option>
                </Select>
              }
              addonAfter={
                <Select defaultValue=".com" style={{ width: 80 }}>
                  <Option value=".com">.com</Option>
                  <Option value=".jp">.jp</Option>
                  <Option value=".cn">.cn</Option>
                  <Option value=".org">.org</Option>
                </Select>
              }
              defaultValue="mysite"
            />
          </Col>

          <Col span={6}>
            <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
          </Col>

          <Col span={6}>
            <Input.Password placeholder="input password" />
          </Col>

          <Col span={6}>
            <Rate />
          </Col>

          <Col span={6}>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
          </Col>

          <Col span={12}>
            <Radio.Group defaultValue="c" buttonStyle="solid">
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b" disabled={true}>
                Shanghai
              </Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </Col>

          <Col span={3}>
            <Switch defaultChecked={true} />
            <br />
            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={true} />
            <br />
            <Switch checkedChildren="1" unCheckedChildren="0" />
            <br />
            <Switch
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked={true}
            />
          </Col>

          <Col span={6}>
            <Slider defaultValue={30} />
            <Slider defaultValue={30} disabled={true} />
          </Col>

          <Col span={6}>
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled={true}>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>

            <Select defaultValue="lucy" style={{ width: 120 }} disabled={true}>
              <Option value="lucy">Lucy</Option>
            </Select>

            <Select defaultValue="lucy" style={{ width: 120 }} loading={true}>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>

          <Col span={6}>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a1', 'b2']}
            >
              {this.multipleSelectOptions.map(item => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Col>

          <Col span={6}>
            <Select defaultValue="lucy" style={{ width: 200 }}>
              <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </OptGroup>
              <OptGroup label="Engineer">
                <Option value="Yiminghe">yiminghe</Option>
              </OptGroup>
            </Select>
          </Col>

          <Col span={6}>
            <TreeSelect
              showSearch={true}
              style={{ width: 300 }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="Please select"
              allowClear={true}
              treeDefaultExpandAll={true}
            >
              <TreeNode value="parent 1" title="parent 1" key="0-1">
                <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                  <TreeNode value="leaf1" title="my leaf" key="random" />
                  <TreeNode value="leaf2" title="your leaf" key="random1" />
                </TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                  <TreeNode
                    value="sss"
                    title={<b style={{ color: '#08c' }}>sss</b>}
                    key="random3"
                  />
                </TreeNode>
              </TreeNode>
            </TreeSelect>
          </Col>

          <Col span={12}>
            <Transfer
              dataSource={this.transferData()}
              titles={['Source', 'Target']}
              render={item => item.title}
            />
          </Col>

          <Col span={6}>
            <TimePicker onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}

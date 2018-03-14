import React, { Component } from 'react';
import omsLogo from '../../assets/images/winmain_logo.png';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class App extends Component {
    render() {
        return (
            <Layout className="main-win">
                <Header className="main-win__header">
                    <img src={omsLogo} />
                </Header>
                <Layout>
                    <Content>content</Content>
                    <Sider>side</Sider>
                </Layout>
                <Footer></Footer>
            </Layout>
        );
    }
}

import React, { Component } from 'react';
import { Menu, Breadcrumb } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider
                            width={200}
                            style={{ background: '#fff' }}
                        >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                >
                                <Menu.Item key="1">系统基础信息</Menu.Item>
                                <Menu.Item key="2">系统拓扑</Menu.Item>
                                <Menu.Item key="3">域名查询</Menu.Item>
                                <Menu.Item key="4">域名查询</Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            
                        </Content>
                    </Layout>
                </Layout>
            </div>  
        );
    }
}

export default App;

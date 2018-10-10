import React, { Component } from 'react';
import { Menu, Layout, Breadcrumb, Button, Dropdown, Icon } from 'antd';
import './Home.scss';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
    handleMenuClick = (event) => {
        console.log(event.domEvent.target.innerHTML);   
    }
    render() {
        const optionsMenu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="1">个人中心</Menu.Item>
              <Menu.Item key="2">注销</Menu.Item>
            </Menu>
        );
        return (
            <div className="home">
                <Layout>
                    <Header>
                        <div className="logo" />
                        <div className="title">北京交通大学下一代互联网互联设备国家工程实验室</div>
                        <div className="options">
                            <Dropdown overlay={optionsMenu}>
                                <Button>
                                    <Icon type="user"/>admin<Icon type="caret-down" />
                                </Button>
                            </Dropdown>
                        </div>
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
                                <SubMenu key="4" title={<span>域名管理</span>}>
                                    <Menu.Item key="sub1">添加域名</Menu.Item>
                                    <Menu.Item key="sub2">更新域名</Menu.Item>
                                    <Menu.Item key="sub3">删除域名</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5">域名审批</Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}></Content>
                    </Layout>
                </Layout>
            </div>  
        );
    }
}

export default Home;

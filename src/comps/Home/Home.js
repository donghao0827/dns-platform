import React, { Component } from 'react';
import { Menu, Layout, Breadcrumb, Button, Dropdown, Icon } from 'antd';
import './Home.scss';
import '../LeftNav/LeftNav';
import LeftNav from '../LeftNav/LeftNav';
import Topology from '../Topology/Topology';
import Personal from '../Personal/Personal';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const leftNav = {
    "1": "Personal",
    "2": "Topology"
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: "Personal"
        }
    }
    handleMenuClick = (event) => {
       this.setState({
           nav: leftNav[event.key]
       })
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
                <Layout style={{ height: "100%" }}>
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
                    <Layout style={{ height: "100%" }}>
                        <Sider
                            width={200}
                            style={{ background: '#fff' }}
                        >
                            <LeftNav 
                                handleClick = { this.handleMenuClick.bind(this) }
                            />
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px', height: "100%" }}>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, height: "100%" }}>
                                { this.state.nav === "Personal" ? <Personal /> : null }
                                { this.state.nav === "Topology" ? <Topology /> : null }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>  
        );
    }
}

export default Home;

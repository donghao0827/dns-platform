import React from 'react';
import "./LeftNav.scss";
import { Menu } from 'antd';
const { SubMenu } = Menu;

class LeftNav extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.props.handleClick;
    } 

    render() {
        return(
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                onClick = { this.handleClick }
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
        ) 
    }
}

export default LeftNav;
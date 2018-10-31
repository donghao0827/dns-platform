import React from "react";
import "./Node.scss";

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
            showInfo: false,
            showOption: false
        }
    }

    handleShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
            showOption: false
        })
    }

    handleShowOption = () => {
        this.setState({
            showOption: !this.state.showOption,
            showInfo: false
        })
    }

    getInfo = () => {
        return (
            <ul className="info">
                <li><label>管理机构:</label><span>CNNIC</span></li>
                <li><label>位置:</label><span>中国北京</span></li>
                <li><label>域名:</label>.CN</li>  
            </ul>
        )
    }

    getOption = () => {
        return (
            <ul className="opt">
                <li>新建域名</li>
                <li>注销域名</li>
                <li>修改域名</li>
                <li>审核域名</li>
            </ul>  
        )
    }

    render() {
        return (
            <div className="node" style={{ position: "absolute", left: this.props.position.left, top: this.props.position.top }}>
                <div className="icon" onClick={ this.handleShowInfo }></div>
                <div className="option" onClick={ this.handleShowOption }>操作</div>
                { this.state.showInfo ? this.getInfo() : null }
                { this.state.showOption ? this.getOption() : null }
            </div>
        )
    }
}

export default Node;
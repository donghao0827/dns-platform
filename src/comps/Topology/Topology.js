import React from 'react';
import './Topology.scss';
import Node from './children/Node';

class Topology extends React.Component {
    render() {
        return (
            <div className="topology">
                <Node position={{ left: "250px", top: "150px" }}/>
                <Node position={{ left: "500px", top: "150px" }}/>
                <Node position={{ left: "700px", top: "250px" }}/>
                <Node position={{ left: "500px", top: "450px" }}/>
                <Node position={{ left: "250px", top: "400px" }}/>
            </div>
        )
    }
}

export default Topology; 

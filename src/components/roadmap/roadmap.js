import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.gif';
import roadmap2 from '../../assets/newpic.jpg';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Phase 1',
                    title: 'GENSIS A51',
                    content: 'Drop Genesis Pack, Sell Out/Burn Out, Donate, and Deploy Phase 2.'
                },
                {
                    tag: 'Phase 2',
                    title: 'AFTERBURNER',
                    content: 'Keep the buzz alive. Build amazing stuff. Airdrop you that stuff. (Club Members Only)'
                },
                {
                    tag: 'Phase 3',
                    title: 'METAVERSE',
                    content: 'My dream is to build an immersive AR/VR experience inside the metaverse.'
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <img src={roadmap2} alt='roadmap' />
            </div>

        );
    }
}

export default RoadMap;
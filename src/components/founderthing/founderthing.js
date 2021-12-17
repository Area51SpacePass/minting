import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewTeam from '../../components/newteam/newteam';

import AboutGif from '../../assets/team/dicklogo.png';
import YButton from "../basic/YButton";

//import CSS
import './founderthing.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control' id="team">
                
                    
                    <NewTeam />
                        
                    
                
            </div>
        );
    }
}

export default About;
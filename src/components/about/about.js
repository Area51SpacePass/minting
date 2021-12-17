import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/Unreal Export 4 Jack Frost LGG.JPG';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div id="about" className='about-control' style={{marginTop: 0, paddingTop: 0}}>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header>
                                THE <span>AREA 51</span> SPACE PASS NFT

                            </header>
                            <p style={{ color: "white", textAlign: "center" }}>
                                The Area 51 Space Pass NFT’s are a collection of 4,200 non-fungible music and art collectibles living on the Ethereum blockchain.  These super-rare NFT’s are a revolutionary combination of Music NFT, 3D Avatar PFP, and Utility NFT in one.
                            </p>
                            <p style={{ color: "white", textAlign: "center" }}>
                                8 Planets In Our Solar System<br/>
                                8 Exclusive Unreleased Songs<br/>
                                8 Different 3D Metaverse Avatars<br/>
                                4,200 Unique Collectible Music & Art NFT’s
                            </p>

                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 5px", borderRadius: 20 }} src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
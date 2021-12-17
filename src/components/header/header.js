import React from "react";

import Logo from '../../assets/logo.png'
import il from '../../assets/Unreal Export 4 Jack Frost LGG.JPG'
import VideoPart from '../../components/videopart/videopart';

//import css
import './header.css';

import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap';


import './footer.css';

//import social icons
import {
    BsTwitter,
    BsDiscord,
    BsInstagram
} from 'react-icons/bs';
//import components
import YButton from "../basic/YButton";
function onMintClick() {
    document.getElementById("mint").scrollIntoView();
    // alert("Your dick is hard!");
}
function onTeamClick() {
    document.getElementById("team").scrollIntoView();
}
function onRoadClick() {
    document.getElementById("roadmap").scrollIntoView();
}
function onWhitelistClick() {
    document.getElementById("whitelist").scrollIntoView();
}

function onSocialsClick() {
    document.getElementById("socials").scrollIntoView();
}

function onAboutClick() {
    document.getElementById("about").scrollIntoView();
}

function onGameClick() {
    document.getElementById("roadmap").scrollIntoView();
}

function onFaqClick() {
    document.getElementById("faq").scrollIntoView();
}


function openSea() {
    window.open("");
}
class Header extends React.Component {
    render() {
        return (
            <>

                <div className='header-control'>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Brand className="myNavBar" href="#home">
                                <img src={Logo} width={100} height={100} alt='logo'  />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link style={{ fontWeight: 900 }}
                                        onClick={onMintClick} >MINT</Nav.Link>
                                    <Nav.Link style={{ fontWeight: 900 }}
                                        onClick={onAboutClick} >ABOUT</Nav.Link>
                                    <Nav.Link style={{ fontWeight: 900 }}
                                        onClick={onRoadClick}>ROADMAP</Nav.Link>
                                    <Nav.Link style={{ fontWeight: 900 }}
                                        onClick={onWhitelistClick} >MERCH</Nav.Link>
                                    <Nav.Link style={{ fontWeight: 900 }}
                                        onClick={onTeamClick} >TEAM</Nav.Link>
                                    <Nav.Link style={{ fontWeight: 900 }}
                                        onClick={onFaqClick} >FAQ</Nav.Link>
                                    {/* <Nav.Link> */}

                                    <Nav.Link style={{ fontWeight: 900 }}
                                        >OPENSEA</Nav.Link>
                                    <text style={{ width: 20 }}></text>
                                    <div>
                                        <a style={{ textDecoration: "none", color: "white", paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jack_frost36/"> <BsInstagram size={32} /></a>
                                        <a style={{ textDecoration: "none", color: "white", paddingLeft: 10, paddingRight: 10 }} target="_blank" rel="noopener noreferrer" href="https://twitter.com/SpacePassNFT"> <BsTwitter size={32} /></a>
                                        <a style={{ textDecoration: "none", color: "white", paddingLeft: 10 }} target="_blank" rel="noopener noreferrer" href="https://discord.gg/qv8BCDGYFT"> <BsDiscord size={32} />   </a>
                                    </div>
                                    {/* <a href="https://google.com/"><YButton text='OPENSEA' /></a>
                                    </Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                     {/* <div className='header-content'>
                        <h1><img className="thePicture" src={il}/></h1> */}
                    {/* <div className='header-content-buttons-container'>
                    <YButton text='DISCORD' /> &nbsp;
                        <YButton text='TWITTER' />
                    </div> */}
                    {/* </div> */}
                    <div></div>
                </div>
            </>
        );
    }
}

export default Header;
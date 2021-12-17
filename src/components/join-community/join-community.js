import React from "react";
import { Container } from "react-bootstrap";

//import Components
import YButton from "../basic/YButton";
import hoodie1 from "../../assets/1hoodie.PNG";
import hoodie2 from "../../assets/2hoodie.PNG";
import hoodie3 from "../../assets/3hoodie.PNG";
import hoodie4 from "../../assets/4hoodie.PNG";

//import CSS
import './join-community.css';
class JoinCommunity extends React.Component {
    render() {
        return (
            <div>
                <div className='join-community-control' id="whitelist" style={{marginBottom: 0, paddingBottom: 0}}>
                    <Container style={{ textAlign: "center" }}>
                        <div style={{ backgroundColor: "#1234E8", border: "10px solid black", padding: 10, borderRadius: 20, margin: 10 }}>
                            <h1><span>MERCH & DIGITAL METAVERSE WEARABLES </span></h1>
                            <p style={{ fontWeight: 900, color: "white" }}> We are an established company and we already sell merch.  We are bringing this merch into the metaverse.  Starting with the largest metaverse games, we plan to launch digital merch wearable lines across all the major metaverse platforms.  </p>
                            <div>
                                <img className="hoodie" src={hoodie1}></img>
                                <img className="hoodie" src={hoodie2}></img>
                                <img className="hoodie" src={hoodie3}></img>
                                <img className="hoodie" src={hoodie4}></img>
                            </div>
                        </div>
                        {/* <a href="https://forms.gle/2kSmjoTAefDWWyMA6"><YButton text='JUNK MAIL' /></a> */}
                    </Container>
                </div>
                
                <div className='join-community-controle' id="whitelist" style={{marginTop: 0, paddingTop: 50, marginBottom: 0, paddingBottom: 0}}>
                    <Container style={{ textAlign: "center" }}>
                        <div>
                            <p style={{ fontWeight: 900, color: "white", paddingBottom: 0, marginBottom: 0, fontSize: 10 }}> Disclaimer: When you mint this NFT you are purchasing a collectible Music NFT with a high-resolution PFP (Profile Pic) JPEG image.  The additional utility is not guaranteed.

                                The Area 51 Space Pass NFT is the Genesis Collection of the Jack Frost Metaverse Experience NFT's.

                                Minting December 2021.

                                Welcome to The Metaverse.
                            </p>
                            <div>

                            </div>
                        </div>
                        {/* <a href="https://forms.gle/2kSmjoTAefDWWyMA6"><YButton text='JUNK MAIL' /></a> */}
                    </Container>
                </div>
            </div>
        );
    }
}

export default JoinCommunity;
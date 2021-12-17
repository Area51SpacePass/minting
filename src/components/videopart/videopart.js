import React from "react";

import "./videopart.css";
// import mt from "../../assets/images/header/mt_lockup-color-glow.png"
import video from "../../assets/images/header/Hype Video 8 - Frost.mov"
import symbol from "../../assets/images/header/symbol.svg"
import logo from "../../assets/images/header/logo.svg"
import ethLogo from "../../assets/images/header/ethLogo.svg";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mute:"UnMute"
        }
    }
    onMute = () =>{
        const {mute}= this.state; 
        if (mute === "Mute")
            this.setState({mute: "UnMute"})
        else
            this.setState({mute:"Mute"})
    }
    render(){
        return(
            <div className="bg-indigo-900">
                <div className="g-flex-justify-center" style={{transform: "scale(0.858906) translateZ(0px)"}}>
                    <div id = "home" className="g-relative w-screen h-screen arrow">
                        <div className="header-desktop hidden g-overflow-hidden lg:block ">
                            <div className="header-desktop-layout" style={{transform: "translate(-50%, -50%)"}}>*
                                <div style={{opacity: ".9", width: "100%", height: "100%"}}>
                                    {
                                        this.state.mute === "Mute"&&
                                        <video className="pt-20" style={{width:"100%"}} src ={video} preload="auto" autoplay="true" loop />
                                    }
                                     {
                                        this.state.mute === "UnMute"&&
                                        <video className="pt-20" style={{width:"100%"}} src ={video} preload="auto" autoplay="true" loop muted="true" />
                                    }
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header;
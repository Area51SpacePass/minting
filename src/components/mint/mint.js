import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Assets
import MintGif from '../../assets/ezgif.com-gif-maker(9).gif';
import YButton from "../basic/YButton";

import { BsFileMinusFill, BsFilePlusFill } from 'react-icons/bs';

//import CSS
import './mint.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Mint() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintNum, setMintNum] = useState(1)
    const claimNFTs = (_amount) => {
        _amount = document.getElementById("inputBox").textContent;
        if (_amount <= 0) {
            return;
        }
        setFeedback("Minting your Official BooCrew NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(blockchain.account, _amount)
            // ********
            // You can change the line above to
            // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
            // users to be able to mint through your website!
            // And after you're done with whitelisted users buying from your website,
            // You can switch it back to .mint(blockchain.account, _amount).
            // ********
            .send({
                gasLimit: 285000 * _amount,
                to: "0xeefBA5763C798Ca53D9b3426d900bca1FA45d27f", // the address of your contract
                from: blockchain.account,
                value: blockchain.web3.utils.toWei((0.069 * _amount).toString(), "ether"),
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback(
                    "Your BooCrew NFT has been successfully minted!"
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    const plus_num = () => {
        // const {mintNum} = this.state;
        if (mintNum >= 8) return;
        setMintNum(mintNum + 1);
        // if (mintNum == 25) return;
    }
    const minus_num = () => {
        // const {mintNum} = this.state;
        if (mintNum <= 1) return;
        setMintNum(mintNum - 1)
    }
    return (
        <div className='mint-control' id='mint'>
            <Container>
                <Row>
                    <Col md={6} xs={12} className='mint-image'>
                        <img src={MintGif} alt='mint gif' />
                    </Col>
                    <Col md={6} xs={12} className='mint-description'>
                        <header>
                        <text style={{ color: "white" }}>MINT YOUR AREA 51 SPACE PASS!</text><br/>
                        <text style={{ color: "white" }}>MINT 8 NFTS FOR A CHANCE TO COLLECT</text>  <br/>
                            <text style={{ color: "white" }}>THE WHOLE ALBUM!</text>
                        </header>
                        <p style={{ textAlign: "center", color: "white" }}>
                            PRIVATE CLUB ACCESS<br/>
                            EPIC MUSIC NFT<br/>
                            3D AVATAR COLLECTIBLE<br/>
                            EXCLUSIVE CONTENT<br/>
                            METAVERSE AIRDROPS<br/>
                            ROYALTY FREE LICENSING RIGHTS<br/>
                            <text style={{fontSize: 25}}>*ONLY WHITELISTED USERS CAN MINT UNTIL 12/18/2021*</text>
                            
                        </p>
                        <div className='number-control'>
                            <BsFileMinusFill color='white' size={40} onClick={() => minus_num()} />
                            <span id="inputBox" >{mintNum}</span>
                            <BsFilePlusFill color='white' size={40} onClick={() => plus_num()} />
                        </div>
                        <p style={{ marginTop: 0, marginBottom: 0 }}>0.069 ETH + Gas</p>
                        {
                            blockchain.account === "" || blockchain.smartContract === null ?
                                <div className="flex-column">
                                    <button className='ybutton'
                                        onClick={(e) => {
                                            console.log("--------")
                                            e.preventDefault();
                                            dispatch(connect());
                                            getData();
                                        }}>CONNECT</button>
                                    {blockchain.errorMsg !== "" ? (
                                        <div style={{ textAlign: "center", fontSize: 20, color: "white" }}>
                                            {blockchain.errorMsg}
                                        </div>

                                    ) : null}
                                </div>
                                :
                                <button className='ybutton'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        claimNFTs(1);
                                        getData();
                                    }}>{claimingNft ? "BUSY" : "MINT"}</button>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Mint;
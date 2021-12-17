import React from "react";

import "./newteam.css";
import TeamMember from "./newteamMember";

import team1 from "../../assets/images/team/Area 51 Space Pass NFT BLACK(1).png";
import team2 from "../../assets/images/team/Toy Booger .69.png"
import team3 from "../../assets/images/team/Smiles By Letters Circle.jpeg"
import team4 from "../../assets/images/team/Tammy Cosmic Cowgirl PFP Profile Pic.png";
import team5 from "../../assets/images/team/Space Punk PFP Dev or Someone.png";
import team6 from "../../assets/images/team/Cropped Smiles for Shamus.png";
import team7 from "../../assets/images/team/Marketing Girl NFT Cosmic Cowgirls PFP.png";
import team8 from "../../assets/images/team/Chibi Labs.jpeg";
import team10 from "../../assets/images/team/ant.550a54f5.png";
import team11 from "../../assets/images/team/jetmade.bbda6e36.png"
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                {
                    img: team1,
                    title: "JACK FROST",
                    job: "MUSIC & NFT ARTIST",
                    des: "10+ Years in Music, 6+ Years in Crypto, & 1,000+ Years in Space.",
                    skills: "Music Production, Graphic Design, & Space Travel.",
                    planet: "EARTH"

                },
                {
                    img: team2,
                    title: "SEAN",
                    job: "BLOCKCHAIN DEVELOPER",
                    des: "6+ Years in Software Development, 4+ Years in Crypto.",
                    skills: "Solidity, Web Development, & Drumming.",
                    planet: "NEPTUNE"

                },
                {
                    img: team3,
                    title: "PLANET CRYPTO",
                    job: "ADVISOR & OPERATIONS DIRECTOR",
                    des: "20+ Years In Business & High-Tech, 6+ Years In Crypto.",
                    skills: "Sales, Tech Implementations, Social Influence, & Surfing.",
                    planet: "MARS"

                },
                {
                    img: team4,
                    title: "FIRST LADY OF NFT",
                    job: "CREATIVE DIRECTOR",
                    des: "15+ Years in Business & Creative Design, 6+ Years in Crypto.",
                    skills: "Creative Design, User Experience, & Singing.",
                    planet: "VENUS"

                },
                {
                    img: team5,
                    title: "CAPT BLOCKBEARD",
                    job: "FINANCE DIRECTOR",
                    des: "25+ Years in Finance, 6+ Years in Crypto.",
                    skills: "Finance & Accounting, IT Security, & Golf.",
                    planet: "URANUS"

                },
                {
                    img: team6,
                    title: "MR RIGHT",
                    job: "SOCIAL RESPONSIBILITY DIRECTOR",
                    des: "5+ Years in Social Work, 6+ Years in Crypto.",
                    skills: "Social Consciousness, Inspiration, & Meditation.",
                    planet: "JUPITER"

                },
                {
                    img: team7,
                    title: "MRS RAGER",
                    job: "MARKETING DIRECTOR",
                    des: "10+ Years in Marketing, 6+ Years in Crypto.",
                    skills: "Marketing, Sales, & Football.",
                    planet: "MERCURY"

                },
                {
                    img: team8,
                    title: "LGG",
                    job: "3D MODELING PARTNER",
                    des: "20+ Years in Graphic Design & 3D Modeling, 3+ Years in Crypto.",
                    skills: "3D/AR/VR Modeling, Motion Design, & Hiking.",
                    planet: "SATURN"

                },
            ]
        }
    }
    render() {
        return (
            <div id="team">
                <div className="g-relative team-layout " id="team">
                    <div className="team-title sm:text-5xl" style={{ textAlign: "center", marginBottom: 0, paddingBottom: 20 }}>
                        <span>MEET OUR TEAM</span>
                    </div>
                    <div className="g-flex-justify-center">
                        <div>
                            <ul className="team-member-layout" style={{ listStyle: "none" }}>
                                {
                                    this.state.members.map((item, index) => {
                                        return (
                                            <li>
                                                <TeamMember
                                                    skills={item.skills}
                                                    planet={item.planet}
                                                    job={item.job}
                                                    img={item.img}
                                                    title={item.title}
                                                    des={item.des}
                                                    twitter={item.twitter}
                                                    opensea={item.opensea}
                                                />
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;
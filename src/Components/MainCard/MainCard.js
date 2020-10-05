import React from 'react';

import AvatarImg from '../../assets/75258597_2608470886148595_6665509266388668832_o.jpg'
import fbIcon from '../../assets/facebook.png'
import gtIcon from '../../assets/github.png'
import gmIcon from '../../assets/gmail.png'

import './MainCard.css'

const MainCard = ({ icons, from, children, title, description, jobImg }) => {

    const iconsDiv = (from, icons) => {
        if (from === "profile") {
            return (
                <div className="Icons">
                    <a target="_blank" rel="noopener noreferrer" style={{ height: "40%" }} href="https://www.facebook.com/profile.php?id=100009571263718"><img height="100%" alt="fb" src={fbIcon} /></a>
                    {/* <a target="_blank" rel="noopener noreferrer" style={{ height: "40%" }} href="https://discord.com/users/315799781320687617"><img height="100%" alt="dis" src={disIcon} /></a> */}
                    <a target="_blank" rel="noopener noreferrer" style={{ height: "40%" }} href="https://www.github.com/NarGhazaryan"><img height="100%" alt="fb" src={gtIcon} /></a>
                    <a style={{ height: "40%" }} href="mailto:nar.ghazaryan.dev@gmail.com"><img height="100%" alt="dis" src={gmIcon} /></a>
                </div>
            )
        }
        else {
            return icons
        }
    }

    const icon = iconsDiv(from, icons)

    return (
        <div className="MainCard">
            <div className="Header">
                <div className="Avatar">
                    <div className="AvatarWrapper">
                        <img style={{ width: "115%", height: "115%", backgroundSize: "cover" }} alt="Avatar" src={from === 'profile' ? AvatarImg : jobImg} />
                    </div>
                </div>
                <div className="Desc">
                    <p style={{ display: "inline-block", margin: 0, color: "rgb(79, 227, 195)", fontSize: 22 }}>{title}</p>
                    <p id={from === "profile" ? "text" : ""} style={{ display: "inline-block", margin: 0, color: "rgb(79, 227, 195)", fontSize: 18 }}>{description}</p>
                </div>
            </div>
            {icon}
            {children}
        </div>
    );
}

export default MainCard;
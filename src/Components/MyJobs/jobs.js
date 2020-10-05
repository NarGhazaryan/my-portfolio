import React from 'react';

import gtIcon from '../../assets/github.png'
import glIcon from '../../assets/global.png'

export const jobsArr = [
    {
        title: "Retrocity",
        description: "React | Frontend",
        gitClone: "https://github.com/NarGhazaryan/retrocity.git",
        icons: (
            <div className="Icons">
                <a target="_blank" rel="noopener noreferrer" style={{ height: "2.3rem", paddingBottom: 30 }} href="https://github.com/NarGhazaryan/retrocity">
                    <img height="100%" alt="github page" src={gtIcon} />
                </a>
                <a target="_blank" rel="noopener noreferrer" style={{ height: "2.3rem", paddingBottom: 30 }} href="https://retro-city.web.app">
                    <img height="100%" alt="web page" src={glIcon} />
                </a>
            </div>
        )
    },
    {
        title: "JS Web Constructor",
        description: "JS | Frontend",
        gitClone: "https://github.com/NarGhazaryan/js-constructor.git",
        icons: (
            <div className="JobIcons">
                <a target="_blank" rel="noopener noreferrer" style={{ height: "2.3rem", paddingBottom: 30 }} href="https://github.com/NarGhazaryan/js-constructor">
                    <img height="100%" alt="github page" src={gtIcon} />
                </a>
                <a target="_blank" rel="noopener noreferrer" style={{ height: "2.3rem", paddingBottom: 30 }} href="https://js-constructor-nar.web.app">
                    <img height="100%" alt="web page" src={glIcon} />
                </a>
            </div>
        )
    },
    {
        title: "This Portfolio",
        description: "React | Frontend",
        gitClone: "https://github.com/NarGhazaryan/my-portfolio.git",
        icons: (
            <div className="JobIcons">
                <a target="_blank" rel="noopener noreferrer" style={{ height: "2.3rem", paddingBottom: 30 }} href="https://github.com/NarGhazaryan/my-portfolio">
                    <img height="100%" alt="github page" src={gtIcon} />
                </a>
            </div>
        )
    },
    {
        title: "Honey Morning",
        description: "React Native | Frontend",
        gitClone: "https://github.com/NarGhazaryan/honey-morning.git",
        icons: (
            <div className="JobIcons">
                <a target="_blank" rel="noopener noreferrer" style={{ height: "2.3rem", paddingBottom: 30 }} href="https://github.com/NarGhazaryan/honey-morning">
                    <img height="100%" alt="github page" src={gtIcon} />
                </a>
            </div>
        )
    },

]
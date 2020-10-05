import React from 'react';
import Particles from 'react-particles-js';

import MyJobs from '../MyJobs/MyJobs';
import MainCard from '../MainCard/MainCard';

import './Main.css'


const Main = () => {

    const scrollToRef = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })

    return (
        <div className='Main' >
            <div style={{ height: "100vh", display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                <Particles
                    style={{
                        background: "rgb(41, 47, 49)",
                        position: "fixed",
                        top: 0,
                        left: 0
                    }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 125
                            },
                            "size": {
                                "value": 5
                            },
                            "color": {
                                "value": "rgb(79, 227, 195)"
                            },
                            "line_linked": {
                                "color": "rgb(79, 227, 195)",
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        },
                        "inks": {
                            "color": "#ffffff",
                            "distance": 150,
                            "enable": true,
                            "opacity": 0.5,
                            "width": 1,
                        },
                        "collisions": {
                            "enable": true,
                        },
                    }} />
                <div style={{ width: '21vw', height: '50vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MainCard from="profile" description="JS Developer" title="Narek Ghazaryan" scrollToRef={scrollToRef} >
                        <div onClick={scrollToRef} className="Butto" >
                            My Jobs
                        </div>
                    </MainCard>
                </div>
            </div>
            <div id="down" style={{ height: "100vh" }}>
                <MyJobs />
            </div>
        </div>
    );
}

export default Main;
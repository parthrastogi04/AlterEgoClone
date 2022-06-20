import React from 'react'
import ReactPlayer from 'react-player'
import img_cont from "./main_logo_awards.png"

export default function Navbar() {
    return (
        <>
        <div className='frontpage'>

             <div className="bg-video">
            <ReactPlayer width='100%' objectFit='fill' height='100vh' url="https://player.vimeo.com/video/626392197"
             playing={true} muted={true} loop={true} />
            </div>
            
            <div className="nav">
            <div className='main'>

                <div className="part1"></div>
                <div className="part2"></div>

            </div>
            </div>

            <div className="grids">
            <center><div className="s1"></div></center>
            <center><div className="s2"></div></center>

            <div className="info">
                <center><button>METAVERSE</button></center>
            </div>
            </div>

            <div className="text">
                <div className="leftside"><div className="cityname"></div>MILAN</div>
                <div className="rightside">MONACO <div className="cityname"></div></div>
            </div>

            <div className="awards_image">
                <img src={img_cont} alt="" />
            </div>

            <div className="endline"></div>
            <div className="end"></div>
            
        </div>
        
        </>
  )
}

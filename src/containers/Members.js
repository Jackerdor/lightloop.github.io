import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion'
import memberData from '../data/member.json';

const list = {
  visible: {opacity:1},
  hidden: {opacity:0},
}


function Members() {

  
  const controls = useAnimation()

  const [id, setId] = React.useState(2)
  function handleClick(event) {
    const id = event.target.id;
    setTimeout(() => {
      setId(id)
    }, 10);
  }



  /* useEffect(() => {
    
  }[setId]) */

    return (
      <div className="fitScreen">
      <div className="nav-grid-space"></div>
      <div className="team-wrapper">
        <motion.div initial="hidden" animate="visible" variants={list} className="team-flexl">
          <div className="team-title">
            <div className="gradient-box-team"></div>
            THE<h1>TEAM</h1>
            </div>
          <div className="member-photo-wrapper">
            <div className="member-photo" style={{backgroundImage:`url(http://localhost:3000/${memberData.[id].image.name}.png)`}}>
              <div className="member-photo-gl"></div>
              <div className="member-photo-gb"></div>
              <div className="member-photo-gr"></div>
            </div>
          </div>
        </motion.div>
        <motion.div animate={controls} className="team-flexr">
          <div className="member-title">
            <h1>{memberData.[id].name}</h1>
            <p></p>
            {memberData.[id].role}
          </div>
          <div className="team-links">
            <a className="website-link">VISIT WEBSITE</a>

            <a className="orb-link"><i class={"fab fa-linkedin-in"}></i></a>
            <a className="orb-link"><i class="fab fa-artstation"></i></a>
          </div>
          <div className="biography-header"><h1>BIOGRAPHY</h1><div className="biography-line"></div></div>
          <div className="biography-information"> 
          {memberData.[id].biography}
          </div>
        </motion.div>
        <div className="outline-box"></div>
        <motion.div animate={controls} className="team-navigator"> 
        <a id="0" onClick={handleClick}>AIDAN LONERGAN</a><sp>|</sp>
        <a id="1" onClick={handleClick}>SANDEEP TALUDHAR</a><sp>|</sp>
        <a id="2" onClick={handleClick}>JAKE NEWTON</a><sp>|</sp>
        <a id="3" onClick={handleClick}>MARTIN KAMMINGA</a>
        <p></p>
        <a id="4" onClick={handleClick}>ALFIE MITCHELL</a><sp>|</sp>
        <a id="5" onClick={handleClick}>CHRISTOPHER FERNANDES</a><sp>|</sp>
        <a id="6" onClick={handleClick}>BILLY DANIEL ALLEN</a><sp>|</sp>
        <a id="7" onClick={handleClick}>MACIEJ OUSCH</a>
        <p></p>
        <a id="8" onClick={handleClick}>JACK BILLING</a><sp>|</sp>
        <a id="9" onClick={handleClick}>ADAM PHILIPS</a><sp>|</sp>
        <a id="10" onClick={handleClick}>TIJAN HOLDER</a><sp>|</sp>
        <a id="11" onClick={handleClick}>ALEX ANGERT</a>
        </motion.div>
      </div>
    </div>

    )
}

export default Members

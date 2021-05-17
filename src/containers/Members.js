import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion'
import memberData from '../data/member.json';

const variants = {
  fadein: {opacity:1, y:0,
  transition:{
    staggerChildren: 0.5,
  }}, 
  fadeout: {opacity:0, y:-40,
  transition:{
    staggerChildren: 0.5,
  }},
}

const item = {
  fadein: { opacity: 1, y:0 },
  fadeout: { opacity: 0, y:0 }
}



function Members() {

  const [id, setId] = React.useState(2)
  const [hasWebsite, setHasWebsite] = React.useState('block')
  const [hasLinkedin, setHasLinkedin] = React.useState('block')
  const [hasArtstation, setHasArtstation] = React.useState('block')
  const [hasBehance, setHasBehance] = React.useState('none')

  const websiteCheck = (id) => {
    if (memberData.[id].website == null){
      setHasWebsite('none')
    } else {
      setHasWebsite('block')
    }}

  const behanceCheck = (id) => {
    if (memberData.[id].behance == null){
      setHasBehance('none')
    } else {
      setHasBehance('block')
    }}

  const linkedInCheck = (id) => {
    if (memberData.[id].linkedin == null){
      setHasLinkedin('none')
    } else {
      setHasLinkedin('block')
    }}

  const artstationCheck = (id) => {
      if (memberData.[id].artstation == null){
        setHasArtstation('none')
      } else {
        setHasArtstation('block')
      }}

  function handleClick(event) {

    const idMember = event.target.id;
    if (idMember == id){
      return
    }
    else{
    setIsChanging(isChanging => !isChanging)
    setTimeout(() => {
      setId(idMember)
      websiteCheck(idMember)
      behanceCheck(idMember)
      linkedInCheck(idMember)
      artstationCheck(idMember)
      setIsChanging(isChanging => !isChanging)
    }, 400);
  }
  }

const [isChanging, setIsChanging] = useState(false)

  /* useEffect(() => {
    
  }[setId]) */

    return (
      <div className="fitScreen">
      <div className="nav-grid-space"></div>
      <div className="team-wrapper">
        <div className="team-flexl">
          <div className="team-title">
            <div className="gradient-box-team"></div>
            THE<h1>TEAM</h1>
            </div>
          <motion.div animate={isChanging ? "fadeout" : "fadein"} variants={variants} className="member-photo-wrapper">
            <div className="member-photo" style={{backgroundImage:`url(http://localhost:3000/${memberData.[id].image.name}.png)`}}>
              <div className="member-photo-gl"></div>
              <div className="member-photo-gb"></div>
              <div className="member-photo-gr"></div>
            </div>
          </motion.div>
        </div>
        <motion.div animate={isChanging ? "fadeout" : "fadein"} variants={variants} className="team-flexr">
          <motion.div variants={item} className="member-title">
            <h1>{memberData.[id].name}</h1>
            <p></p>
            {memberData.[id].role}
          </motion.div>
          <motion.div variants={item} className="team-links">
            <div className="links-title">WEBSITE LINKS</div>
            <a className="orb-link" href={memberData.[id].website} target="_blank" style={{textDecoration:'none', display:hasWebsite}}><i class="fas fa-globe"></i></a>
            <a className="orb-link" href={memberData.[id].linkedin} target="_blank" style={{textDecoration:'none', display:hasLinkedin}}><i class="fab fa-linkedin-in"></i></a>
            <a className="orb-link" href={memberData.[id].behance} target="_blank" style={{textDecoration:'none', display:hasBehance}}><i class="fab fa-behance"></i></a>
            <a className="orb-link" href={memberData.[id].artstation} target="_blank" style={{textDecoration:'none', display:hasArtstation}}><i class="fab fa-artstation"></i></a>
          </motion.div>
          <motion.div variants={item} className="biography-header"><h1>BIOGRAPHY</h1><div className="biography-line"></div></motion.div>
          <motion.div variants={item} className="biography-information"> 
          {memberData.[id].biography}
          </motion.div>
        </motion.div>
        <div className="outline-box"></div>
        <motion.div className="team-navigator"> 
        <div className="team-tip">- CLICK US -</div>
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

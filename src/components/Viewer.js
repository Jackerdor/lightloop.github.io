import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const variants = {
    fadein: {opacity:1, y:0,},
    fadeout: {opacity:0, y:-40}
  }

const Viewer = (props) => {

const [isDisplayed, setIsDisplayed] = useState('flex')
const [displayTransition, setDisplayTransition] = useState(false)

function handleChildClick(e) {
    e.stopPropagation();
}

function handleClick() {
    setDisplayTransition(!displayTransition)
    setTimeout(() => {
    setIsDisplayed('none')
    console.log(displayTransition)
    }, 200)
}

    return (   
        <motion.div animate={displayTransition ? "fadeout" : "fadein"} variants={variants} onClick={handleClick} style={{display:isDisplayed}} class="viewer-wrapper">
            <div onClick={handleChildClick} class="viewer">
                <div onClick={handleChildClick} class="viewer-object"></div>
            </div>
            <div class="viewer-back">- CLICK OFF TO RETURN -</div>
        </motion.div>
    )
}

export default Viewer

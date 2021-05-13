import ProjectCard from '../components/projects/ProjectCard'
import projectData from '../data/project.json'
import React, {useState, useEffect, useRef} from 'react'

function Projects() {

let [state, setState] = useState({
  visible: false,
  ratio: 0
})
/*
const ref = useRef()

useEffect(() => { const observer = new IntersectionObserver(([entry]) => {
  
  setState({

    visible: entry.isIntersecting,

    ratio: entry.intersectionRatio
  })

}), {threshold: [.25, .5, .75, 1]
});
*/
const [number, setNumber] = React.useState(0)



    return (
      <div className="fitScreen">
      <div className="nav-grid-space"></div>
        <div className="cntrAll works-wrapper">
          
          <div className="cntrAll works-selected-text">SELECTED</div>
          
          <div className="carousel-wrapper">
          <div className="cntrAll carousel">
        
          <ProjectCard />
{/*            <div className="thumbnail2 tn-unfocused">
              <div className="unfocused-title1">JOE</div>
              <div className="gradient-lr"></div>
            </div>
            <div className="thumbnail1 tn-focused"></div>
            <div className="thumbnail3 tn-unfocused">
              <div className="unfocused-title2">BLITZKRIEG</div>
              <div className="gradient-rl"></div>
            </div>
            <div className="thumbnail3 tn-unfocused"></div>
            <div className="thumbnail3 tn-unfocused"></div>
            <div className="thumbnail3 tn-unfocused"></div> 
    */}

            <div className="gradient-rr"></div>
            <div className="gradient-ll"></div>
          </div>
          </div>

          <div className="cntrAll title-box">
            <div className="title">DRAW</div>
            <div className="directed">Directed by <p></p><h1>Martin Kamminga</h1></div>
          </div>
          <div className="cntrAll tag-box">
            <div className="info-header">DESCRIPTION</div>
            <div className="tags">
              <div class="tag-item">SHORT FILM</div>
              <div class="tag-item">ANIMATION</div>
              <div class="tag-item">LIVE ACTION</div>
            </div>
          </div>
          <div className="cntrAll information-box">Two kings battle for mastery of the chessboard.</div>
          <div className="works-title"><div className="gradient-box"></div>PROJECTS</div>
          <div className="outline-box"></div>
        </div>
      </div>
    )
}

export default Projects

import ProjectCard from '../components/projects/ProjectCard'
import projectData from '../data/project.json'
import React, {useState, useEffect, useRef} from 'react'



function Projects() {

const navRef = useRef();
const projectRef = [];

function scrollCallback(entries: IntersectionObserverEntry[]) {
  if (entries[0].isIntersecting) {

}
}


/* const observer = React.useRef(
  new IntersectionObserver((entries) => {
    const first = entries[0];
    console.log(first);
  }, { threshold: 1 })
);
const [element, setElement] = React.useState(null); 

React.useEffect(() => {
  const currentElement = element;
  const currentObserver = observer.current

  if (currentElement) {
    currentObserver.observe(currentElement);
  }

  return () => {
    if (currentElement){
      currentObserver.unobserve(currentElement);
    }
  };
}, [element]);

let [state, setState] = useState({
  visible: false,
  ratio: 0
}) */

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
const [number, setNumber] = React.useState(0);

const clickHandler = (e) => {
  console.log(projectRef.thumbnail)
}


    return (

      <div className="fitScreen">
      <div className="nav-grid-space"></div>
        <div className="cntrAll works-wrapper">
          
          <div className="cntrAll works-selected-text">SELECTED</div>
          
          <div className="carousel-wrapper">
          <div className="cntrAll carousel" ref={navRef}>
          <div className="carousel-padding"></div>
          {projectData.map(project => <ProjectCard id={project.id} ref={index => this.elementRefs[index] = projectRef} thumbnail={project.thumbnail} onClick={clickHandler} />)}
          <div className="carousel-padding"></div>

            <div className="gradient-rr"></div>
            <div className="gradient-ll"></div>
          </div>
          </div>

          <div className="cntrAll title-box">
            <div className="title" onClick={clickHandler} >DRAW</div>
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

import ProjectCard from "../components/projects/ProjectCard";
import projectData from "../data/project.json";
import React, { useState, useEffect, useRef } from "react";
import { useElementScroll } from "framer-motion";

function Projects() {
  const carouselRef = useRef();
  const { scrollX } = useElementScroll(carouselRef);
  const projectRefs = useRef([]);
  projectRefs.current = [];

  const clickHandler = (e) => {
    console.log(ProjectCard.key);
  };

const addToRefs = (el) => {
  console.log(el)
}

  return (
    <div className="fitScreen">
      <div className="nav-grid-space"></div>
      <div className="cntrAll works-wrapper">
        <div className="cntrAll works-selected-text">SELECTED</div>

        <div className="carousel-wrapper" ref={carouselRef}>
          <div className="cntrAll carousel">
            <div className="carousel-padding"></div>

            {projectData.map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={el => (projectRefs.current = [...projectRefs.current, el])}
                thumbnail={project.thumbnail}
                onClick={clickHandler}
                range={[
                  600 + 500 * index - window.innerWidth / 2,
                  800 + 500 * index - window.innerWidth / 2,
                  1000 + 500 * index - window.innerWidth / 2,
                  1200 + 500 * index - window.innerWidth / 2,
                ]}
                boi={scrollX}
              />
            ))}

            <div className="carousel-padding"></div>

            <div className="gradient-rr"></div>
            <div className="gradient-ll"></div>
          </div>
        </div>

        <div className="cntrAll title-box">
          <div className="title" onClick={clickHandler}>
            THE BAIT
          </div>
          <div className="directed">
            Directed by <p></p>
            <h1>Aidan Lonergan</h1>
          </div>
        </div>
        <div className="cntrAll tag-box">
          <div className="info-header">DESCRIPTION</div>
          <div className="tags">
            <div class="tag-item">ADVERT</div>
            <div class="tag-item">ANIMATION</div>
            <div class="tag-item">AWARENESS</div>
          </div>
        </div>
        <div className="cntrAll information-box">
          Don't let your best friend fall victim to dog baiting. Be vigiliant.
        </div>
        <div className="works-title">
          <div className="gradient-box"></div>PROJECTS
        </div>
        <div className="outline-box"></div>
      </div>
    </div>
  );
}

export default Projects;

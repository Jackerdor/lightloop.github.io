import projectData from '../../data/project.json'

const ProjectCard = () => {

    const renderedOutput = projectData.map((item, index) => 
    <div className="thumbnail tn-unfocused" id={item.index} style={{backgroundImage:`url(http://localhost:3000/${item.thumbnail})`}}>
        <div className="item-gradient-lr"></div>  
        <div className="item-gradient-rl"></div>  
        </div>
    )

    return (
        [renderedOutput]
    )
}

export default ProjectCard

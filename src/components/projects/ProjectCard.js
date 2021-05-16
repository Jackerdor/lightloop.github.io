const ProjectCard = (props) => {

    return (
        <div className="thumbnail tn-unfocused" ref={props.ref} onClick={props.onClick} id={props.id} style={{backgroundImage:`url(http://localhost:3000/${props.thumbnail})`}}>
        <div className="item-gradient-lr"></div>  
        <div className="item-gradient-rl"></div>  
        </div>
    )
}

export default ProjectCard

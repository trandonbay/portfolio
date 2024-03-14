const ProjectItem = ({ image, name, skills, link }) => {
    return (
        <a href={link}>
            <div className="projectItem">
                <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
                <h2> {name} </h2>
                <h3> {skills} </h3>
            </div>
        </a>
    )
};

export default ProjectItem;
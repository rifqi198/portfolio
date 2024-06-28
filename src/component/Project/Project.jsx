import data from "../../assets/data"
import "./Project.css"
const Project = () => {
    return(
        <div className="project-container">
            <h1 className="project-title">Project</h1>
            {data.map(item => (
                <div key={item.id} className="project-card">
                    <img src={item.img} alt={item.title} className="project-image"/>
                    <div className="project-detail">
                        <div className="project-title-container">
                            <h1 className="project-card-title">{item.title}</h1>
                            <h1 className="project-type">{item.type}</h1>
                        </div>
                        <p className="project-description">{item.description}</p>
                        <a href={item.link} target="_blank"><button className="project-link">{item.to}</button></a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project
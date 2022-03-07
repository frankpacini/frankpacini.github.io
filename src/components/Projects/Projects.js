import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectPopup from '../ProjectPopup/ProjectPopup'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <div className='project'>
            <h3>{project.name}</h3>

            <p className='project__description'>{project.description}</p>
            <ProjectPopup key={uniqid()} project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

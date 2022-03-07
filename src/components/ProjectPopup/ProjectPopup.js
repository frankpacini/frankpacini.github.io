import {useContext, useRef} from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Popup from 'reactjs-popup';
import { Carousel } from 'react-responsive-carousel';
import { ThemeContext } from '../../contexts/theme'
import 'reactjs-popup/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProjectPopup.css'

const ProjectPopup = ({ project }) => {
  const [{ themeName }] = useContext(ThemeContext)
  const popupEndRef = useRef()

  const scrollToBottom = () => {
    popupEndRef.current?.scrollIntoView()
  }

  return (
    <Popup trigger={
      <button type="button" className='btn btn--outline' style={{margin: "auto"}}>
        View
      </button>
    } modal nested onOpen={() => scrollToBottom()} className={`popup-${themeName}`}>
      {close => (
        <div className="modal">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>
          <div style={{margin: "15px"}}>
            <h3 className="modal-title"> {project.name} </h3>
            <div className="modal-content">
              <Carousel>
                <div>
                    <img src="https://images.unsplash.com/photo-1603408639326-fad10b8fbc1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZyUyMHdheXxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://miro.medium.com/max/600/0*npRqA-IodJWs4jae.jpg" alt=""/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2021/01/application-software-2.jpg" alt=""/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
              </Carousel>

              <p className='project__description'>{project.description}</p>

              {project.stack && (
                <ul className='project__stack'>
                  {project.stack.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
        
              <div className="modal-links">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    aria-label='source code'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                )}
          
                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    aria-label='live preview'
                    className='link link--icon'
                  >
                    <LaunchIcon />
                  </a>
                )}
              </div>
              <div ref={popupEndRef} />
            </div>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default ProjectPopup

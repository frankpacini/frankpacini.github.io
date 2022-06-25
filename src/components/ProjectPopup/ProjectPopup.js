import {useContext, useRef} from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

import Popup from 'reactjs-popup';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'

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
              <Carousel showThumbs={false} className={`carousel-${themeName}`}>
                {project.videos.map((video) => 
                  <ReactPlayer key={uniqid()} controls width="100%" url={video} />
                )}
                {project.pictures.map((picture) => 
                  <img key={uniqid()} src={picture} alt=""  style={{maxHeight: "75vh", width: "auto"}}/>
                )}
              </Carousel>

              <p className='project__description'>
              {project.full_description === null || project.full_description === "" ? project.description : project.full_description}
              </p>

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

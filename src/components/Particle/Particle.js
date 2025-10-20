import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useEffect, useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import './Particle.css'
import { about } from '../../portfolio'

const Particle = () => {
  const { name, role, description, resume, social } = about

  useEffect(() => {
    const particleGroundScript = document.createElement("script");
    particleGroundScript.type = "text/javascript"
    particleGroundScript.src = "/static/libs/jquery.particleground.js";
    particleGroundScript.async = true;

    particleGroundScript.onload = () => {
      const demoScript = document.createElement("script");
      demoScript.type = "text/javascript"
      demoScript.src = "/static/libs/demo.js";
      demoScript.async = true;
      demoScript.onload = () => {
        window.runParticle();
      }
      document.body.appendChild(demoScript);
    }

    document.body.appendChild(particleGroundScript);
  }, [])

  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  const titleStyle = {
    fontFamily: 'Syncopate, sans-serif', 
    fontWeight: 10,
    color: themeName === 'dark' ? "white" : "black"
  }

  const linkStyle = {
    color: "white"
  }

  const iconStyle = {
    fontSize: "2em", 
    color: themeName === 'dark' ? "white" : "black",
    padding: "0px 5px 0px",
    display: "inline-block"
  }

  return (
    <div id="particles">
      <div id="header">
        <Header/>
      </div>
      <div id="intro">
      <img src="/static/assets/profile2.png" alt="Profile" style={{width: '250px'}}/>
        <h2 style={titleStyle}>
          {name}
        </h2>
        <hr style={{width: "50%", backgroundColor: "#E83951", borderColor: "#E83951"}}/>
        {/* <h3 style={titleStyle}>
          {role}
        </h3> */}
        <a href={resume} style={{display: "inline-block", verticalAlign: "top"}}>
          {
            themeName === 'light' ? (
              <img src="/static/assets/resume-icon.png" alt="" height="35" width="35"/>
            )
            : (
              <img src="/static/assets/resume-icon-invert.png" alt="" height="35" width="35"/>
            )
          }
        </a>
        {social.linkedin && (
          <a href={`https://www.linkedin.com/in/${social.linkedin}/`} style={linkStyle}>
            <i className="fab fa-linkedin" style={iconStyle}/>
          </a>
        )}
        {social.github && (
          <a href={`https://www.github.com/${social.github}/`} style={linkStyle}>
            <i className="fab fa-github" style={iconStyle}/>
          </a>
        )}
        {social.medium && (
          <a href={`https://medium.com/@${social.medium}/`} style={linkStyle}>
            <i className="fab fa-medium" style={iconStyle}/>
          </a>
        )}
      </div>
    </div>
  )
}

export default Particle;

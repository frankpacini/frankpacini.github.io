import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useEffect, useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import './Particle.css'

const Particle = () => {
  useEffect(() => {
    const particleGroundScript = document.createElement("script");
    particleGroundScript.type = "text/javascript"
    particleGroundScript.src = "/static/libs/jquery.particleground.js";
    particleGroundScript.async = true;

    const demoScript = document.createElement("script");
    demoScript.type = "text/javascript"
    demoScript.src = "/static/libs/demo.js";
    demoScript.async = true;
    demoScript.onload = () => {
      console.log(demoScript)
      window.runParticle();
    }

    document.body.appendChild(particleGroundScript);
    document.body.appendChild(demoScript);
  })

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
        <h2 style={titleStyle}>
          Frank Pacini
        </h2>
        <hr style={{width: "50%", backgroundColor: "#E83951", borderColor: "#E83951"}}/>
        <a href="resume.pdf" style={{display: "inline-block", verticalAlign: "top"}}>
          {
            themeName === 'light' ? (
              <img src="/static/assets/resume-icon.png" alt="" height="35" width="35"/>
            )
            : (
              <img src="/static/assets/resume-icon-invert.png" alt="" height="35" width="35"/>
            )
          }
        </a>
        <a href="https://www.linkedin.com/in/#/" style={linkStyle}>
          <i className="fab fa-linkedin" style={iconStyle}/>
        </a>
        <a href="https://www.facebook.com/#/" style={linkStyle}>
          <i className="fab fa-facebook" style={iconStyle}/>
        </a>
        <a href="https://github.com/#/" style={linkStyle}>
          <i className="fab fa-github" style={iconStyle}/>
        </a>
        <a href="https://medium.com/@#/" style={linkStyle}>
          <i className="fab fa-medium" style={iconStyle}/>
        </a>
      </div>
    </div>
  )
}

export default Particle;

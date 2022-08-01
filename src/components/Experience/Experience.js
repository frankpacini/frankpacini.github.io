import './Experience.css'
import {useContext} from 'react';
import { ThemeContext } from '../../contexts/theme'
import { experience } from '../../portfolio'

const Experience = () => {
    const [{ themeName }] = useContext(ThemeContext)
    return (
        <section id='experience' className='section experience'>
            <h2 className='section__title'>Experience</h2>

            {experience.map((exp) => (
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                {exp.logo !== '' && (
                                    <figure className="image is-75x75">
                                        <img src={exp.logo} alt={exp.name}/>
                                    </figure>
                                )}
                            </div>
                            <div className="media-content">
                                <h3 className="title">{exp.name}</h3>
                                <p className="subtitle" style={{marginBottom: '0.2rem'}}><em>{exp.title}</em></p>
                                <p className="subtitle is-6">{exp.date_start} - {exp.date_end}</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>{exp.description}</p>
                            {exp.bullets.length !== 0 && (
                                <ul>
                                    {exp.bullets.map((bullet) => (
                                        <li>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                            {exp.skills.length !== 0 && (
                                <div className="tags">
                                    {exp.skills.map((skill) => (
                                        <span className={`tag-${themeName}`}>{skill}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Experience
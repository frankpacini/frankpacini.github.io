import './Education.css'
import {useContext} from 'react';
import { ThemeContext } from '../../contexts/theme'
import { education } from '../../portfolio'

const Education = () => {
    const [{ themeName }] = useContext(ThemeContext)
    return (
        <section id='education' className='section education'>
            <h2 className='section__title'>Education</h2>

            {education.map((edu) => (
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                {edu.logo !== '' && (
                                    <figure className="image is-75x75">
                                        <img src={edu.logo} alt={edu.name}/>
                                    </figure>
                                )}
                            </div>
                            <div className="media-content">
                                <h3 className="title">{edu.name}</h3>
                                <p className="subtitle" style={{marginBottom: '0.2rem'}}><em>{edu.degree}</em></p>
                                <p className="subtitle is-6">{edu.date_start} - {edu.date_end}  &nbsp; | &nbsp; {`GPA: ${edu.gpa}`}</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>{edu.description}</p>
                            {edu.bullets.length !== 0 && (
                                <ul>
                                    {edu.bullets.map((bullet) => (
                                        <li>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Education
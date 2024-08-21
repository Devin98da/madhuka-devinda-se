import React, { } from 'react'
import classes from './ProfesionalProject.module.css';
import { useParams } from 'react-router-dom';
import { ProjectsData } from '../../../ProjectsData';
import Footer from '../../../Footer/footer';
import { MdArrowCircleRight } from "react-icons/md";

const ProfesionalProject = () => {
    const params = useParams();

    const project = ProjectsData.find(p => p.title === params.projectId);

    if (!project) {
        return (
            <section className={'container noProjectSection'}>
                <div className={classes.noProjectMessage}>
                    <h2>Project Not Found</h2>
                    <p>The project you are looking for does not exist. Please check the project ID and try again.</p>
                </div>
            </section>
        )
    }

    const listMaker = (obj) => {
        return (
            <ul className={classes.detailBlockUl}>
                {Object.keys(obj).map((key) => {
                    return <li key={key} className={classes.entry}>{obj[key]}</li>
                })}
            </ul>
        )
    }

    const roles_responsibilities = listMaker(project.roles_responsibilities);

    return (
        <section>
            <div className={`container personal__container}`}>
                <h2 className={classes.title}>{project.title}</h2>
                <center>
                    <div className={classes.project__image}>
                        <div className={classes.image__container}>
                            <div>
                                <img src={project.image} />
                            </div>
                            <div>
                                {/* images slide */}
                            </div>
                        </div>
                    </div>
                </center>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>
                                    <strong className={classes.greenEntry}>Platform:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.platform}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Used Languages:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.language}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Technologies Used:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.tool_used}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Duratoin:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.duration}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Completion:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.completoin}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Team Size:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.team_size}</span>
                                    <br></br>
                                </p>
                                <p className={classes.open_project}>
                                    <strong className={classes.greenEntry}>Open Project</strong>
                                    <a className={classes.arrow} href={project.demo} target='_blank'> <MdArrowCircleRight size={30} /></a>

                                </p>
                            </td>
                            <td>
                                <p>
                                    {/* <h2 className={classes.greenEntry}>Overview</h2> */}
                                    <strong className={classes.greenEntry}>Overview</strong>

                                    <p>{
                                        Object.keys(project.overview).map((key) => {
                                            return <p key={key} className={classes.entry}>{project.overview[key]}</p>
                                        })
                                    }
                                    </p>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Roles and Responsibilities</strong>
                                    {roles_responsibilities}
                                </p>


                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr></hr>
                <br></br>
                <div>
                    <div className={classes.projectScreenshot}>
                        {Object.keys(project.project_screenshots).map((ss, index) => {
                            return <img key={index} className={classes.single_project_screenshot} src={project.project_screenshots[1]} />
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </section>

    )
}

export default ProfesionalProject
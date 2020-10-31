import React from "react";


function ProjectRight ({imageURL, projectDescription, projectName, githubURL, deployURL}) {
   return  <div className="columns">
                    <div className="column is-full">
                        <div className="columns custom-columns">
                            <div className="column is-two-thirds">
                                <img src={imageURL} alt="CalEngine" />
                            </div>
                            <div className="column">
                                <div className="has-text-weight-bold">{projectName}</div>
                                <div className="is-size-4">{projectDescription}</div>
                                <a href={githubURL} target="_blank"><i className="fab fa-github fa-lg"></i></a>
                                <a href={deployURL} target="_blank"><i className="fab fa-chrome fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
}

export default ProjectRight
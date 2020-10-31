import React,{useState} from "react";
import calEngine from "../../images/calsengine.png";
import impetus from "../../images/project-1.png";
import weather from "../../images/weather-dashboard.png";
import scheduler from "../../images/work-day-scheduler.png";
import foodQuiz from "../../images/coding-quiz.png";
import passGenerator from "../../images/password-generator.png";
import ProjectLeft from "../component/Project-left"
import ProjectRight from "../component/Project-right"


function Portfolio() {
    const [project1, setProject1] = useState({
        projectName: "CalEngine",
        projectDescription: "An application to track calories for a healthy lifestyle",
        imageURL: calEngine,
        githubURL: "https://github.com/ethanlam93/CaslEngine",
        deployURL: "https://nameless-forest-69111.herokuapp.com/",
    });
    const [project2, setProject2] = useState({
        projectName: "Impetus",
        projectDescription: "A dashboard for a better day",
        imageURL: impetus,
        githubURL: "https://github.com/ethanlam93/Project_One",
        deployURL: "https://ethanlam93.github.io/Project_One",
    });
    const [project3, setProject3] = useState({
        projectName: "weather dashboard",
        projectDescription: "A simple and interactive weather dashboard",
        imageURL: weather,
        githubURL: "https://github.com/ethanlam93/weather-dashboard",
        deployURL: "https://ethanlam93.github.io/weather-dashboard",
    });
    const [project4, setProject4] = useState({
        projectName: "Work Day Scheduler",
        projectDescription: "Simple scheduler for your daily tasks",
        imageURL: scheduler,
        githubURL: "https://github.com/ethanlam93/work-day-scheduler",
        deployURL: "https://ethanlam93.github.io/work-day-scheduler",
    });
    const [project5, setProject5] = useState({
        projectName: "Food Quiz",
        projectDescription: "A fun trivia quiz application about food.",
        imageURL: foodQuiz,
        githubURL: "https://github.com/ethanlam93/coding-quiz-project",
        deployURL: "https://ethanlam93.github.io/coding-quiz-project",
    });
    const [project6, setProject6] = useState({
        projectName: "Password Generator",
        projectDescription: "Simple interactive password generator for your next secured password",
        imageURL: passGenerator,
        githubURL: "https://github.com/ethanlam93/password-generator-project",
        deployURL: "https://ethanlam93.github.io/password-generator-project",
    });

    return (
        <>
            <div className="container is-fluid has-text-centered">
                <div className="has-text-weight-bold" style={{ fontSize: "80px", marginBottom: "30px" }}>Work</div>
                <ProjectLeft projectName={project1.projectName} projectDescription={project1.projectDescription} imageURL={project1.imageURL} githubURL={project1.githubURL} deployURL={project1.deployURL} />
                <ProjectRight projectName={project2.projectName} projectDescription={project2.projectDescription} imageURL={project2.imageURL} githubURL={project1.githubURL} deployURL={project2.deployURL} />
                <ProjectLeft projectName={project3.projectName} projectDescription={project3.projectDescription} imageURL={project3.imageURL} githubURL={project1.githubURL} deployURL={project3.deployURL} />
                <ProjectRight projectName={project4.projectName} projectDescription={project4.projectDescription} imageURL={project4.imageURL} githubURL={project4.githubURL} deployURL={project4.deployURL} />
                <ProjectLeft projectName={project5.projectName} projectDescription={project5.projectDescription} imageURL={project5.imageURL} githubURL={project5.githubURL} deployURL={project5.deployURL} />
                <ProjectRight projectName={project6.projectName} projectDescription={project6.projectDescription} imageURL={project6.imageURL} githubURL={project6.githubURL} deployURL={project6.deployURL} />
            </div>
        </>
    )
}
export default Portfolio
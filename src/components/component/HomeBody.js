import React from "react";
import code from "../../images/code.jpg"
import downArrow from "../../images/down-arrow.gif"
import Ethan from "../../images/ethan.JPG"
import Delta from "../../images/delta.jpg"
import Globe from "../../images/internet.jpg"
function HomeBody() {
    return (<>
        <div className="container" >
            <div className="container has-text-centered" style={{marginBottom:"100px"}}>
                <div className="title">
                    Transform the web one <span
                        className="animate__animated animate__bounce animate__delay-1s animate__infinite animate__slow"
                        style={{fontSize: "80px", display:"inline-block"}} >&lt;div&gt;</span> at a time!
                </div>
                <img src={downArrow} width="100px" id="animated-arrow" alt="scroll down" />
            </div>
            <div className="columns is-centered" data-aos="fade-in">
                    <div className="column is-full">
                        <div className="columns">
                            <div className="column is-10">
                                <img src={Ethan} atl="sample" height="600px" width="600px"
                                    id="main-image" alt="my-picture"></img>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10">
                                <div>
                                    Hi everyone. My name is Ethan. I was born and raised in Sai Gon, Vietnam, and
                                    currently
                                    living
                                    in Atlanta, Georgia.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered">
                    <div className="column is-full">
                        <div className="columns">
                            <div className="column is-10 is-offset-2 has-text-right">
                                <img src={Delta} atl="sample" height="800px" width="800px" id="delta" alt="airplane"></img>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-2">
                                <div>
                                    I graduated from Georgia State University with a Bachelor in Business
                                    Administration. I am also proud to be a flight attendant for Delta Air Lines.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered">
                    <div className="column is-full">
                        <div className="columns">
                            <div className="column is-10">
                                <img src={code} atl="sample" height="600px" width="600px" alt="coding"></img>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10">
                                <div>
                                    Beside flying, I
                                    love learning new skills to improve my value. Therefore, I am attending the Georgia
                                    Tech
                                    Full
                                    Stack Flex Coding Program to break into the Web Development industry and I love
                                    every moment
                                    of it.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered">
                    <div className="column is-full">
                        <div className="columns">
                            <div className="column is-10 is-offset-2 has-text-right">
                                <img src={Globe} atl="sample" height="600px" width="600px" alt="globe"></img>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-2">
                                <div>
                                    I love Front-End ( and efficient in Back-end as well ). I love combining simple
                                    and
                                    functional
                                    codes and my artistic touch to produce beautiful and useful websites. One code
                                    at a time, I
                                    hope
                                    to make the World Wide Web a better place.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="column has-text-centered ">
                        <a className="portfolio" href="./portfolio">See my work</a>
                    </div>
                </div>
        </div>
        <div className="social container has-text-centered">
                    <a href="https://www.linkedin.com/in/ethanlam93/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://github.com/ethanlam93/" target="_blank"><i className="fab fa-github-square fa-2x"></i></a>
                    <a href="https://dribbble.com/ethanlam93/" target="_blank"><i className="fab fa-dribbble-square fa-2x"></i></a>
        </div>
    </>
    )
}

export default HomeBody 
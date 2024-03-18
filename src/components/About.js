import Counter from "./Counter"

const About = ({ dark }) => {
    return (
        <div className="dizme_tm_section" id="about">
            <div className="dizme_tm_about">
                <div className="container">
                    <div className="wrapper">
                        <div className="left">
                            <div className="image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`img/about/${dark ? 2 : 'station'}.jpg`} alt="image" />
                                <div className="numbers year">
                                    <div className="wrapper">
                                        <h3>
                                            <Counter end={10} />
                                        </h3>
                                        <span className="name">
                                            Years of
                                            <br />
                                            Success
                                        </span>
                                    </div>
                                </div>
                                <div className="numbers project">
                                    <div className="wrapper">
                                        <h3>
                                            <Counter end={100} />s
                                        </h3>
                                        <span className="name">
                                            of
                                            <br />
                                            Projects
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title wow fadeInUp" data-wow-duration="1s">
                                <span>{`I'm a Problem Solver`}</span>
                                <h3>I Can Built Anything You Want</h3>
                            </div>
                            <div className="text wow fadeInUp" data-wow-duration="1s">
                                <p>
                                    {`Hello there! I'm a software engineer, With 10+ years of experience in software engineering, I have a proven track record of designing, coding, and testing complex applications. My expertise in supply chain management, logistics, and transportation has enabled me to develop innovative software solutions that streamline operations and improve efficiency. I am proficient in a wide range of technologies, including php with laravel, Node.js, ReactJS, and Agile project management. I am also an effective communicator and problem-solver, with a strong ability to collaborate in a team environment.`}
                                </p>
                            </div>
                            <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                                <a className="anchor" href="#contact">
                                    <span>Hire Me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
                    <img src="img/brushes/about/1.png" alt="image" />
                </div>
                <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                    <img src="img/brushes/about/2.png" alt="image" />
                </div>
            </div>
        </div>
    )
}
export default About

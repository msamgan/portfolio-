const Header = ({ logo }) => {
    return (
        <div className="dizme_tm_header">
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <a href="#">{logo && <img src={logo ? logo : "img/logo/cover.png"} alt="image" />}</a>
                    </div>
                    <div className="menu">
                        <ul className="anchor_nav">
                            <li className="current">
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            {/*<li>
                                <a href="#portfolio">Portfolio</a>
                            </li>*/}
                            <li>
                                <a href="#service">Service</a>
                            </li>
                            <li>
                                <a href="https://codebysamgan.com" target={"_blank"} rel="noreferrer">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li className="download_cv">
                                <a
                                    href="https://msamgan.s3.us-east-2.amazonaws.com/mohammed+samgan+khan.pdf"
                                    target={"_blank"}
                                    rel="noreferrer"
                                    download=""
                                >
                                    <span>Download CV</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header

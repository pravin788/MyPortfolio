import { HTML, CSS, JavaScript, MongoDBIcon, ExpressIcon, ReactIcon, NodeJSIcon, aosDataProject, Redux, Firebase, Git, Figma, Sass, Bootstrap, TS } from "../../../Imports";

import "./TechStack.css";
import "aos/dist/aos.css";


function TechStack() {
    return (
        <section id="TechStack">
            <div data-aos-offset="150">
                <h2>myTechStack</h2>
            </div>
            <article className="AllImgWrapper imgWrapper" >
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="150"
                >
                    <img src={HTML} alt="HTML Logo"></img>
                    <div className="ImgDescription">
                        <h2>HTML</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="151"
                >
                    <img src={CSS} alt="CSS Logo"></img>
                    <div className="ImgDescription">
                        <h2>CSS</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="152"
                >
                    <img src={JavaScript} alt="Javascript Logo"></img>
                    <div className="ImgDescription">
                        <h2>JavaScript</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="153"
                >
                    <img src={ReactIcon} alt="React Logo"></img>
                    <div className="ImgDescription">
                        <h2>React</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="154"
                >
                    <img src={NodeJSIcon} alt="NodeJS Logo"></img>
                    <div className="ImgDescription">
                        <h2>NodeJS</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="155"
                >
                    <img src={ExpressIcon} alt="ExpressJS Logo"></img>
                    <div className="ImgDescription">
                        <h2>ExpressJS</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="156"
                >
                    <img src={MongoDBIcon} alt="MongoDB Logo"></img>
                    <div className="ImgDescription">
                        <h2>MongoDB</h2>

                    </div>
                </div>
                {/* </article>
            <article className="imgWrapper" > */}
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="150"
                >
                    <img src={Redux} alt="Redux Logo"></img>
                    <div className="ImgDescription">
                        <h2>Redux</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="151"
                >
                    <img src={Firebase} alt="Firebase Logo"></img>
                    <div className="ImgDescription">
                        <h2>Firebase</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="156"
                >
                    <img src={TS} alt="TypeScript Logo"></img>
                    <div className="ImgDescription">
                        <h2>TypeScript</h2>
                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="152"
                >
                    <img src={Figma} alt="Figma Logo"></img>
                    <div className="ImgDescription">
                        <h2>Figma</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="153"
                >
                    <img src={Sass} alt="Sass Logo"></img>
                    <div className="ImgDescription">
                        <h2>Sass</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="155"
                >
                    <img src={Git} alt="Git Logo"></img>
                    <div className="ImgDescription">
                        <h2>Git</h2>

                    </div>
                </div>
                <div className="SingleImgWrapper"  {...aosDataProject} data-aos-offset="154"
                >
                    <img src={Bootstrap} alt="Bootstrap Logo"></img>
                    <div className="ImgDescription">
                        <h2>Bootstrap</h2>

                    </div>
                </div>


            </article>
        </section>
    );
}

export default TechStack;
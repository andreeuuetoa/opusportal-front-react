import {Link} from "react-router-dom";

export const About = () => {
    return (
        <div className="container about-page">
            <div id="about-header">
                <div id="about-header-element">
                    <i>OpusPortal</i>
                </div>
                <div id="about-header-element">
                    <Link to="/logi-sisse">
                        <button id="back-to-about-btn" className="btn btn-lg">Tagasi</button>
                    </Link>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum!
                <br/><br/>
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid.
                <br/><br/>
                Fons codicis sub MIT licentia dimittitur et publice in GitHub praesto est.
            </p>
            <a id="about-link" target="_blank" href="https://www.github.com/andreeuuetoa/opusportal-front-react">GitHub</a>
        </div>
    );
}

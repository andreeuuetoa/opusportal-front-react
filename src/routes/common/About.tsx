import {Link} from "react-router-dom";

export const About = () => {
    return (
        <div className="container">
            <div>
                OpusPortal
                <Link to="/logi-sisse">
                    <button className="btn btn-lg btn-secondary">Tagasi</button>
                </Link>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum!

                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid.

                Fons codicis sub MIT licentia dimittitur et publice in GitHub praesto est.
            </p>
            <a target="_blank" href="https://www.github.com/andreeuuetoa/opusportal-front-react">GitHub</a>
        </div>
    );
}

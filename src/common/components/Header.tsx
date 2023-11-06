import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav
                className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-black box-shadow">
                <div className="container">
                    <Link className="navbar-brand text-light" to="/">MUBA OpusPortal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav" />
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/logi-valja">Logi välja</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

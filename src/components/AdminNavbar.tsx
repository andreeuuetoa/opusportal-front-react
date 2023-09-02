import {Link} from "react-router-dom";

export const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-white box-shadow">
            <div className="container">
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/kontserdid">Kontserdid</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/konkursid">Konkursid</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/raamatud">Raamatukogu</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/kasutajad">Kasutajad</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

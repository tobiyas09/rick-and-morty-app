import React from 'react';


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href="/characters/">Characters</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="/locations/">Locations</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link" href="/episodes/">Episodes</a>
                </li>
                </ul>
            </div>
            </nav>
                 
        </div>
    );
}

export default Header;
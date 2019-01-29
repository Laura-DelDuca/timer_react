import React from 'react'

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img width="120" src="" alt=""/>
                    <p>I'm the fucking navbar</p>
                </a>
            </div>
        </nav>
    </header>
)

export default Header;
// Exporter tous les composants .js qui composent l'application; ils vont vers index.js
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar">
                <div class="navbar-brand">
                    <a href="/">World Stats</a>
                </div>
                <ul class="nav-list">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>


        </>
    )
}

export default Navbar
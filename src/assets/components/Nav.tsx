const Nav = () => {
    return (
        <section className="container-nav-projectSwitcher">
            <div className="container-projectSwitcher">
                <text>Check out some of the</text>
                <button className='project-switcher'>Design</button>
                <text>projects I've been a part of:</text>
            </div>
            <nav className="container-nav-links">
                <a href="">Resume</a>
                <a href="">About</a>
                <a href="">
                    <div className="icon" id="linked-in"></div>
                    LinkedIn
                </a>
                <a href="">
                    <div className="github" id="github"></div>
                    Github
                </a>
            </nav>
        </section>
    );
}

export default Nav;
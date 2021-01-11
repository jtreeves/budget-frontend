// Create function
function About() {
    return (
        <div className="div-public-page about-page">
            <div className="div-public-header">
                <h1>About</h1>
                <p>Kaleidoscope is the app that will revolultionize your financial life.</p>
                <div className="div-screenshots">
                    <div className="div-screenshot1">
                        <h2>
                            Get started by signing up for a free account.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233796/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.07.49_PM_iej7zr.png" 
                            alt="Sign-up form" 
                        />

                        <h2>
                            Look over your budget's breakdown on the Overview page.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233795/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.05.14_PM_pun2yb.png" 
                            alt="Overview page" 
                        />

                        <h2>
                            Create and edit up to six separate budgets.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233795/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.05.22_PM_eafofi.png" 
                            alt="Overview page of a different budget" 
                        />

                        <h2>
                            See how your budget changes based on where you live.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233795/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.06.39_PM_ejsm3z.png" 
                            alt="Compare Locations page" 
                        />
                    </div>

                    <div className="div-screenshot2">
                        <h2>
                            Fill out a brief form to create your first budget.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233796/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.08.29_PM_jlnjrj.png" 
                            alt="Form for creating your first budget" 
                        />

                        <h2>
                            Adjust your budget and add new expenses on the Category pages.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233795/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.05.35_PM_mujppo.png" 
                            alt="Food and Beverage Category page" 
                        />

                        <h2>
                            Compare all of your budgets at once.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610233795/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.05.54_PM_avw0tw.png" 
                            alt="Compare Budgets page" 
                        />

                        <h2>
                            Your budgets are automatically saved and ready for you the next time you log in.
                        </h2>
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610235701/kaleidoscope/about/Screen_Shot_2021-01-09_at_5.41.27_PM_gbawxf.png" 
                            alt="Welcome page and log-in form" 
                        />
                    </div>
                </div>
            </div>
            
            <div className="div-created-by">
                <h2>Created By</h2>
                
                <div>
                    <h3>Alan Avery</h3>
                    <a 
                        href="https://github.com/alanavery" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610239772/kaleidoscope/about/GitHub-Mark-120px-plus_aqsr4h.png" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <div>
                    <h3>Thomas Gilbert</h3>
                    <a 
                        href="https://github.com/tcgilbert" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610239772/kaleidoscope/about/GitHub-Mark-120px-plus_aqsr4h.png" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <div>
                    <h3>Jackson Reeves</h3>
                    <a 
                        href="https://github.com/jtreeves" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610239772/kaleidoscope/about/GitHub-Mark-120px-plus_aqsr4h.png" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <div>
                    <h3>Jeremy Uriz</h3>
                    <a 
                        href="https://github.com/JJURIZ" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://res.cloudinary.com/alanavery/image/upload/v1610239772/kaleidoscope/about/GitHub-Mark-120px-plus_aqsr4h.png" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <p>
                    Developed January 2021. See the code behind this site on the app's <a target="_blank" rel="noreferrer" href="https://github.com/jtreeves/budget-frontend">repository on GitHub</a>.
                </p>
            </div>
        </div>
    )
}

// Export function
export default About
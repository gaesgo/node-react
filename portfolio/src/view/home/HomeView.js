import React from 'react'
import './HomeView.css'
import linkedinLogotype from '../../utils/images/linkedin-logo.png'
import githubLogotype from '../../utils/images/github-logo.png'
import spotifyLogotype from '../../utils/images/spotify-logo.png'

export const HomeView = () => {
    return(
        <div className="homePresentation">
            <h1>Hello!<span role="img" aria-label="wave" className="helloWink">👋</span></h1>
            <h2>My name is <span className="name">Gabriel Espling Gonzalez</span>, a Junior Application Developer from Gothenburg, Sweden.</h2>

            <div className="social">
                <a href="https://www.linkedin.com/in/gabriel-espling-588a01a7" target="_blank" rel="noopener noreferrer">
                <img
                    className="linkedinLogo"
                    src={linkedinLogotype} 
                    alt="Error..."></img></a>
            
                <a href="https://www.github.com/gaesgo" target="_blank" rel="noopener noreferrer">
                <img
                    className="githubLogo"
                    src={githubLogotype}
                    alt="Error..."></img></a>

                <a href="https://open.spotify.com/embed/artist/5tVCoQWrpv5LONxN6mMMt4" target="_blank" rel="noopener noreferrer">
                <img
                    className="spotifyLogo"
                    src={spotifyLogotype}
                    alt="Error..."></img></a> 
            </div>
        </div>
    )
}
import React from 'react'
import '../about/AboutView.css'

export const AboutView = () => {
    return(
        <div className="aboutMe">
            <h1>About</h1>
            <h2 className="textAbout">{`
            I started a education with focus whitin e-commerce in 2018.
            But after a while, I really appreciated the art of coding and
            found it to be really fun. So I began a new course in the late 2020.

            And so here we are.
            Long story short, Im a music-nerd, love cooking food and
            try different type of beverages. Travel to exciting places
            is high up on my list of things i like to do.`}</h2>
    </div>
    )
}
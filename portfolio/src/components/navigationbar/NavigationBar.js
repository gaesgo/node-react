import React, { useContext } from 'react'
import './NavigationBar.css'
import cvPicture from '../../utils/images/cv-picture.png'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/global/provider/UserProvider'
import { Profile } from '../profile/Profile'
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser) ? 
        <div className="profile"> <Profile /> </div>
        : false
    }

    return(
        <div className="navigationBar">
            <img onClick={() => history.push(RoutingPath.homeView)} 
                className="logotype" 
                src={cvPicture} 
                alt="error..."/>
            <span onClick={() => history.push(RoutingPath.aboutView)}
            className="about">About</span>
            <span onClick={() => history.push(RoutingPath.contactView)}
            className="contact">Contact</span>
            {displayUserIfAuthenticated()}
        </div>
    )
}
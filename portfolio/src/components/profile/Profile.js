import React, { useContext } from 'react'
import {UserContext} from '../../utils/global/provider/UserProvider'
import {useHistory} from "react-router-dom"
import './Profile.css'
import RoutingPath from '../../routes/RoutingPath'

export const Profile = () => {
const history = useHistory()
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const logout = () => {
    localStorage.removeItem('username')
    setAuthenticatedUser(false)
    history.push(RoutingPath.homeView)
}

    return (
        <div className="profileWrapper">
            <span className="displayedUsername">{authenticatedUser}</span>
            <div className="dropdownMenu">
            <button onClick={() => history.push(RoutingPath.settingView)}>Settings</button>
            <button onClick={() => history.push(RoutingPath.profileView)}>Profile</button>
            <hr />
            <button onClick={() => logout()}>Logout</button>
        </div>
        </div>
    )

}
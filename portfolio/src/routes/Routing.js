import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import { AboutView } from '../view/about/AboutView'
import { ContactView } from '../view/contact/ContactView'
import { HomeView } from '../view/home/HomeView'
import { SignInView } from '../view/admin/SignInView'
import { ProfileView } from '../view/admin/ProfileView'
import { SettingView } from '../view/admin/SettingView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../utils/global/provider/UserProvider'


export const Routing = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfNotAuthenticated = (navigateToView) => {
        return !authenticatedUser ? SignInView : navigateToView
    }
    
    const blockRouteIfAuthenticated = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    })

    

    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.aboutView} component={AboutView} />
                <Route exact path={RoutingPath.contactView} component={ContactView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.profileView} component={blockRouteIfNotAuthenticated(ProfileView)} />
                <Route exact path={RoutingPath.settingView} component={blockRouteIfNotAuthenticated(SettingView)} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
} 
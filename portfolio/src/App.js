import React from 'react';
import {NavigationBar} from './components/navigationbar/NavigationBar'
import {Routing} from './routes/Routing'
import {UserProvider} from './utils/global/provider/UserProvider'
import'./utils/global/css/Global.css'
import {getAllUsers, createUser} from './utils/api/service/UserService'

function App(state) {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  return (
    <UserProvider>
    <Routing>
      < NavigationBar />
    </Routing>
    </UserProvider>
  );
}

export default App;

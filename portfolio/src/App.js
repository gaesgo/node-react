import React from 'react';
import {NavigationBar} from './components/navigationbar/NavigationBar'
import {Routing} from './routes/Routing'
import {UserProvider} from './utils/global/provider/UserProvider'
import'./utils/global/css/Global.css'

function App() {

  return (
    <UserProvider>
    <Routing>
      < NavigationBar />
    </Routing>
    </UserProvider>
  );
}

export default App;

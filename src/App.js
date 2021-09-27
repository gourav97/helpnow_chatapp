import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Chat from './components/chat/Chat';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiStethoscope, mdiChatOutline, mdiAccountCircle, mdiClockOutline } from '@mdi/js';




function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="app_header">
            <div className="app_left">
              <div className="img1">
                <Icon path={mdiAccountCircle}
                  size={2} color="white" />
              </div>
              <div className="app_headerInfo">
                <h3>Doctor e-Clinic</h3>

              </div>
            </div>
            <div className="app_right">
              <div className="e1">
                <Icon path={mdiStethoscope}
                  size={1} color="white" />
                <p>Find a doctor</p>
              </div>

              <div className="e2">
                <Icon path={mdiClockOutline}
                  size={1} color="white" />
                <p>Appointment</p>
              </div>

              <div className="e3">
                <Icon path={mdiChatOutline}
                  size={1} color="white" />
                <p>Chat with Doctor</p>
              </div>


            </div>
          </div>


          <div className="app__body">


            <Sidebar />
            <Route exact path="/"><Chat /></Route>
            <Route path="/room/:roomId"><Chat /></Route>

          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

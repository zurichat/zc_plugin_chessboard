import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import "./App.css";
import AdvancedSetting from './Pages/Advanced_Setting/AdvancedSetting'
import MainGame from './Pages/GameScreen/MainGame'
import Homepage from './Pages/Homepage.js/Homepage'
import InviteNotification from './Pages/InviteNotification/InviteNotification'
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard'
import MainMenu from './Pages/MainMenu/MainMenu'
import PlayFriend from './Pages/Play_With_A_Friend/PlayFriend'
import QuickSetting from './Pages/Quick_Setting/QuickSetting'
import Playsettings from './Pages/Settings_Before_Play/Playsettings'
import Notification from './Pages/TagAndMention/Notification'
import Tournament from './Pages/Tournament/Tournament'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/advanced-setting' component={AdvancedSetting}/>
          <Route exact path='/main-game' component={MainGame}/>
          <Route exact path='/home' component={Homepage}/>
          <Route exact path='/invite-notification' component={InviteNotification}/>
          <Route exact path='/leader-board' component={LeaderBoard}/>
          <Route exact path='/main-menu' component={MainMenu}/>
          <Route exact path='/play-with-a-friend' component={PlayFriend}/>
          <Route exact path='/quick-setting' component={QuickSetting}/>
          <Route exact path='/play-settings' component={Playsettings}/>
          <Route exact path='/tag-and-mention' component={Notification}/>
          <Route exact path='/tournament' component={Tournament}/>
        </Switch>
      </Router>

      <header class="main-header">
        <nav>
          <h1 id="logo">Chess Board Room Plugin</h1>
        </nav>
      </header>
      <section class="hero">
        <h2>Welcome to the Chess Board Room</h2>

        <button>Start Game</button>
      </section>
    </div>
  );
}

export default App;

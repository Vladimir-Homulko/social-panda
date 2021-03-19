import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./componets/Dialogs/Dialogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";
import Profile from "./componets/Profile/Profile";
import Settings from "./componets/Settings/Settings";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <Route path='/profile' component={ Profile } />
            <Route path='/dialogs' component={ Dialogs } />
            <Route path='/news' component={ News } />
            <Route path='/music' component={ Music } />
            <Route path='/settings' component={ Settings } />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

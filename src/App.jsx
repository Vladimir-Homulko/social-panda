import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./componets/Dialogs/Dialogs";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";
import Profile from "./componets/Profile/Profile";
import Settings from "./componets/Settings/Settings";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <Route path='/profile' 
                   render={ () => <Profile posts={ props.state.profile.posts }
                                           dispatch={ props.dispatch }
                                           newPostText={ props.state.profile.newPostText }
                                  /> 
                          }
            />
            <Route path='/dialogs' 
                   render={ () => <Dialogs persons={ props.state.dialogs.persons } 
                                           messages={ props.state.dialogs.messages } 
                                  />
                          } 
            />
            <Route path='/news' 
                   render={ () => <News /> } 
            />
            <Route path='/music' 
                   render={ () => <Music /> } 
            />
            <Route path='/settings' 
                   render={ () => <Settings /> } 
            />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

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
                   render={ () => <Profile posts={ props.state.profileReduser.posts }
                                           dispatch={ props.dispatch }
                                           newPostText={ props.state.profileReduser.newPostText }
                                  /> 
                          }
            />
            <Route path='/dialogs' 
                   render={ () => <Dialogs persons={ props.state.dialogsReduser.persons } 
                                           messages={ props.state.dialogsReduser.messages } 
                                           dispatch={ props.dispatch }
                                           newMessageText={ props.state.dialogsReduser.newMessageText }
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

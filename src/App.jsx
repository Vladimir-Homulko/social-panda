import "./App.css";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Profile from "./componets/Profile/Profile";

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='wrapper'>
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

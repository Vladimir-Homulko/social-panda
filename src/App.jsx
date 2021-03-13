import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Profile from "./componets/Profile";

const App = () => {
  return (
    <div >
      <Header />
      <div className='wrapper'>
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default App;

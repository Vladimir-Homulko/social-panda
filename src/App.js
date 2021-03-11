import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Profile from "./componets/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;

import "./App.css";

import Footer from "./components/Footer";
import i18n from "./components/I18n";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <div style={{ marginTop: "-50%" }}>
          <Body />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import AppRoutes from "./Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";



function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;

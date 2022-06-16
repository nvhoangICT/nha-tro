
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import "./public/css/open-iconic-bootstrap.min.css";
// import "./public/css/animate.css";
// import "./public/css/owl.carousel.min.css";
// import "./public/css/owl.theme.default.min.css";
// import "./public/css/magnific-popup.css";
// import "./public/css/aos.css";
// import "./public/css/ionicons.min.css";
// import "./public/css/bootstrap-datepicker.css";
// import "./public/css/jquery.timepicker.css";
// import "./public/css/flaticon.css";
// import "./public/css/icomoon.css";
// import './public/css/style.css';

import Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

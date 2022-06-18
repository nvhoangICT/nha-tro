
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import "./assets/css/open-iconic-bootstrap.min.css";
// import "./assets/css/animate.css";
// // import "./assets/css/owl.carousel.min.css";
// import "./assets/css/owl.theme.default.min.css";
// import "./assets/css/magnific-popup.css";
// // import "./assets/css/aos.css";
// import "./assets/css/ionicons.min.css";
// import "./assets/css/bootstrap-datepicker.css";
// import "./assets/css/jquery.timepicker.css";
// import "./assets/css/flaticon.css";
// import "./assets/css/icomoon.css";
// import './assets/css/style.css';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

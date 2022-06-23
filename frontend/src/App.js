
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
import React, { useState } from 'react';
import Auth from './modules/Auth/Auth';
import './assets/scss/style.scss'
import AddProperty from './modules/AddProperty/AddProperty';
import ListProperty from './modules/Property/ListProperty';
import AdvancedSearch from './components/SearchComponent/AdvancedSearch';
import PropertyDetails from './modules/Property/PropertyDetails';
// import AuthorizedApp from './modules/AuthorizedApp';
import Cookies from 'js-cookie'
import GoogleMap from './modules/GoogleMap/GoogleMap';

function App() {
  // const [token, setToken] = useState(Cookies.get())

  // function onLogin(req, res) {
  //   res.redirect('/')
  // }

  // function handleLogout() {
  //   fetch('/logout', {
  //     method: "DELETE"
  //   }).then(setUser(null))
  // }

  // useEffect(() => {
  //   fetch('/me').then((r) => {
  //     if (r.ok) {
  //       r.json().then((data) => {
  //         setUser(data)
  //       })
  //     }
  //   })
  // }, [])

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/explore" element={<ListProperty />} />
        <Route path="/advanced-search" element={<AdvancedSearch />} />
        <Route path="/item"
          element={
            <PropertyDetails
              title="Phòng Trọ 2 Người"
              address="796 Trương Định, Giáp Nhị, Thịnh Liệt, Hoàng Mai"
              bg="url(images/nha-tro-1.png)"
            />
          }
        />
        {/* <Route path="/map" element={<GoogleMap />} /> */}
      </Routes>
      {/* user ?
          <AuthorizedApp user={user} handleLogout={handleLogout} />
          :
          <Auth onLogin={onLogin} /> */}
    </React.Fragment>
  );
}

export default App;

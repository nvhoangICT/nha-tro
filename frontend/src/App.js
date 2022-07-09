
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import React from 'react';
import Auth from './modules/Auth/Auth';
import './assets/scss/style.scss'
import AddProperty from './modules/AddProperty/AddProperty';
import ListProperty from './modules/Property/ListProperty';
import AdvancedSearch from './components/SearchComponent/AdvancedSearch';
import PropertyDetails from './modules/Property/PropertyDetails';
import ChangeInformation from './modules/ChangeInformation/changeInformation';
import RequestTour from './modules/RequestTour/RequestTour'
import TestProperties from './components/testProperties';
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
              bg="https://images1.apartments.com/i2/J8Gdf_yX9fqD9XJTjj-TPBf1yoAzlijuAMqeaBWa2EQ/116/regents-park-chicago-il-1-br-1-ba---715-sf.jpg?p=1"
            />
          }
        />
        <Route path="/change-info" element={<ChangeInformation />} />
        <Route path="/request-tour" element={<RequestTour />} />
        <Route path="/test-properties" element={<TestProperties />} />
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
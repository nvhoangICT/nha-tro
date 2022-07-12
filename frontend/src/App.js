
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
import RequestTour from './modules/RequestTour/RequestTour';
import TestProperties from './components/testProperties';
import ManageProperty from './components/ManageComponent/ManageProperty';
import ManagePropertyDetails from './components/ManageComponent/ManagePropertyDetail';
import EditProperty from './modules/AddProperty/EditProperty';
function App() {
  
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/edit-property/:propertyId" element={<EditProperty />} />
        <Route path="/explore" element={<ListProperty />} />
        <Route path="/advanced-search" element={<AdvancedSearch />} />
        <Route path="/item/:propertyId"
          element={
            <PropertyDetails />
          }
        />
        <Route path="/change-info" element={<ChangeInformation />} />
        <Route path="/request-tour" element={<RequestTour />} />
        <Route path="/test-properties" element={<TestProperties />} />
        <Route path="/manage-property/1"
          element={
            <ManagePropertyDetails
              title="Phòng Trọ 2 Người"
              address="796 Trương Định, Giáp Nhị, Thịnh Liệt, Hoàng Mai"
            />}
        />
        <Route path="/manage-property" element={<ManageProperty />} />
        <Route path="/manage-property/:id" component={<ManagePropertyDetails />} />
      </Routes>
      {/* user ?
          <AuthorizedApp user={user} handleLogout={handleLogout} />
          :
          <Auth onLogin={onLogin} /> */}
    </React.Fragment>
  );
}

export default App;
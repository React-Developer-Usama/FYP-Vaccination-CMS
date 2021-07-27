import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import InventroyAdmin from "./pages/InventroyAdmin/InventroyAdmin";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Login from "./pages/Login/Login";
import Vaccination from "./pages/Vaccination/Vaccination";
import DataEntery from "./pages/DataEntery/DataEntery";
import UserProfile from "./pages/UserProfile/UserProfile";
import ChildProfile from "./pages/ChildProfile/ChildProfile";
import DefualterList from "./pages/DefualterList/DefualterList";
import DailyReport from "./pages/DailyReport/DailyReport";
import MonthlyReport from "./pages/MonthlyReport/MonthlyReport";
import RecordDetails from "./pages/RecordDetails/RecordDetails";
import ExpiryReprort from "./pages/ExpiryReprort/ExpiryReprort";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword";
import NewchildProfile from "./pages/NewchildProfile/NewchildProfile";
import InventoryMonthlyReport from "./pages/InventoryMonthlyReport/InventoryMonthlyReport";
import InventoryDailyReport from "./pages/InventoryDailyReport/InventoryDailyReport";
import UpdateDose from "./pages/UpdateDose/UpdateDose";
import ListChild from "./pages/ListChild/ListChild";
import OfficerProfile from "./pages/OfficerProfile/OfficerProfile";
import ListOfficer from "./pages/ListOfficer/ListOfficer";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/InventroyAdmin">
            <InventroyAdmin />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/ChangePassword">
            <ChangePassword />
          </Route>
          <Route path="/DataEntery">
            <DataEntery />
          </Route>
          <Route path="/Vaccination">
            <Vaccination />
          </Route>
          <Route path="/UserProfile">
            <UserProfile />
          </Route>
          <Route path="/ChildProfile">
            <ChildProfile />
          </Route>
          <Route path="/DefualterList">
            <DefualterList />
          </Route>
          <Route path="/DailyReport">
            <DailyReport />
          </Route>
          <Route path="/MonthlyReport">
            <MonthlyReport />
          </Route>
          <Route path="/RecordDetails">
            <RecordDetails />
          </Route>
          <Route path="/ExpiryReprort">
            <ExpiryReprort />
          </Route>
          <Route path="/UpdateProfile">
            <UpdateProfile />
          </Route>
          <Route path="/RecoverPassword">
            <RecoverPassword />
          </Route>
          <Route path="/NewchildProfile">
            <NewchildProfile />
          </Route>
          <Route path="/InventoryMonthlyReport">
            <InventoryMonthlyReport />
          </Route>
          <Route path="/InventoryDailyReport">
            <InventoryDailyReport />
          </Route>
          <Route path="/UpdateDose">
            <UpdateDose />
          </Route>
          <Route path="/ListChild">
            <ListChild />
          </Route>
          <Route path="/OfficerProfile">
            <OfficerProfile />
          </Route>
          <Route path="/ListOfficer">
            <ListOfficer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;

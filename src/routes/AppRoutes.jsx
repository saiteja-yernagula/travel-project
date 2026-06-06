import { Routes, Route } from "react-router-dom";
import AddDestination from "../pages/AddDestination";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import EditDestination from "../pages/EditDestination";
import Register from "../pages/Register";
import Login from "../pages/Login";
function AppRoutes() {
 return (
   <Routes>
     <Route
       path="/"
       element={<Home />}
     />

     <Route
       path="/destinations"
       element={<Destinations />}
     />

     <Route
       path="/destinations/:id"
       element={<DestinationDetails />}
     />
     <Route
 path="/add-destination"
 element={<AddDestination />}
/>
<Route
 path="/edit-destination/:id"
 element={<EditDestination />}
/>
<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/login"
  element={<Login />}
/>




   </Routes>
 );
}

export default AppRoutes;

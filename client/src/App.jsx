import Header from "./pages/shared/header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./pages/shared/footer/Footer";
import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Login from "./pages/login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./route/PrivateRoute";
import NotFound from './pages/notFound/NotFound.jsx'
import MyBooking from "./pages/mybooking/MyBooking";
import ManageBooking from "./pages/manageBooking/ManageBooking";
import AddTrip from "./pages/addTrip/AddTrip";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute path="/booking/:id" component={Booking} />
          <PrivateRoute path="/mybooking" component={MyBooking} />
          <PrivateRoute path="/manage" component={ManageBooking} />
          <PrivateRoute path="/addnew" component={AddTrip} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

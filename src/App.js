import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseContextProvider from "./contexts/CourseContext";
import tw from "tailwind-styled-components";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import Cart from "./pages/Cart";
import MyCourse from "./pages/MyCourse";

export const AppWrapper = tw.div`grid xl:w-5/6 mx-auto`;

const App = () => {
  return (
    <AuthContextProvider>
      <CourseContextProvider>
        <CartContextProvider>
          <Router basename="/">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/mycourses" exact>
                <MyCourse />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <Register />
              </Route>
            </Switch>
          </Router>
        </CartContextProvider>
      </CourseContextProvider>
    </AuthContextProvider>
  );
};

export default App;

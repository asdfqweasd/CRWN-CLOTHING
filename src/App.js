import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from "./store/user/user.action";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  // user is a very top level thing that matters
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

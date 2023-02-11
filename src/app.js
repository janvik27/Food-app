import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantDetails from "./components/Restaurant_details";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import myStore from "./utils/Store";

const Instamart = lazy(() => import("./components/Instamart"));

/* APP LAYOUT 

- HEADER
  - logo
  - navitems ( home, about us, contact, cart, etc)

- BODY 
  - search bar
  - restaurant cards
    - image
    - name
    - cuisines
    - time - SLA string
    - cost for two

  - FOOTER

*/

const AppLayout = () => {
  const [userInfo, setuserInfo] = useState({
    name: "Janvi",
    email: "janvi@gmail.com",
  });

  return (
    /*
    <UserContext.Provider
      value={{
        user: userInfo,
        setuser: setuserInfo,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    */
    <Provider store={myStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

// creating our router using createBrowserRouter and setting the config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

// providing our router to the app, using router provider

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

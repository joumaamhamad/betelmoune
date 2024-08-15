import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import NavBarPlus from './components/NavBarPlus';
import Profile from './screens/Profile';

// import Footer from './components/Footer'; // Uncomment if you want to use the Footer
import { ToastContainer } from 'react-toastify';
import ProductsDetails from './screens/ProductDetails';
import WorkshopDetails from './screens/WorkshopDetails';
import AddProduct from './screens/AddProduct';
import EditProduct from './screens/EditProduct';
import Footer from './components/Footer';
import Cart from './screens/Cart';

import ShippingAddressScreen from './screens/ShippingAddressScreen';
import WorkshopContent from './screens/WorkshopContent';

import UserList from './screens/UserList';
import ProductList from './screens/ProductList';
import WorkshopList from './screens/WorkshopList';
import AdminDashboard from './screens/AdminDashboard';
// import Sidebar from './components/Sidebar';


// Lazy load components
const HomePage = lazy(() => import('./screens/HomePage'));
const SignIn = lazy(() => import('./screens/Signin'));
const SignUp = lazy(() => import('./screens/Signup'));
const Products = lazy(() => import('./screens/Products'));
const Workshops = lazy(() => import('./screens/Workshops'));

function App() {
  return (
    <BrowserRouter>
      {/* remove the comment to show the sidebar */}
      {/* <div className="flex"> */}
      {/* <Sidebar /> */}

      <div className="App flex flex-col min-h-screen">
        <NavBarPlus />

        <main className="flex-grow">
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductsDetails />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/workshop/:slug" element={<WorkshopDetails />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/editProduct" element={<EditProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path='/shippingAddress' element={<ShippingAddressScreen />} />
              <Route path='/workshopContent/:slug' element={<WorkshopContent />} />
              <Route path="/userList" element={<UserList />} />
              <Route path="/productList" element={<ProductList />} />
              <Route path="/workshopList" element={<WorkshopList />} />
              <Route path="/adminDashboard" element={<AdminDashboard />} />

            </Routes>
          </Suspense>
        </main>

        <Footer />
        {/* <ToastContainer /> */}
      </div>

      {/* this div return the sidebar */}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;

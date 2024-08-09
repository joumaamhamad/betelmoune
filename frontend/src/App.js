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

// Lazy load components
const HomePage = lazy(() => import('./screens/HomePage'));
const SignIn = lazy(() => import('./screens/Signin'));
const SignUp = lazy(() => import('./screens/Signup'));
const Products = lazy(() => import('./screens/Products'));
const Workshops = lazy(() => import('./screens/Workshops'));

function App() {
  return (
    <BrowserRouter>
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
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;

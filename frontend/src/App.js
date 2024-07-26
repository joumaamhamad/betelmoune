import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import SignIn from './screens/Signin';
import NavBarPlus from './components/NavBarPlus';
import Footer from './components/Footer';
import SignUp from './screens/Signup';
import Products from './screens/Products';
import AddProduct from './screens/AddProduct';
import EditProduct from './screens/EditProduct';
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <NavBarPlus />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/editProduct" element={<EditProduct />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

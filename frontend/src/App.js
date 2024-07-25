import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import SignIn from './screens/Signin';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

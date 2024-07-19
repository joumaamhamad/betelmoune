import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import SignIn from './screens/Signin';


function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          headerr
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4">
          footer
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;


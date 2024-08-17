import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { logOut } from '../store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CiShoppingCart } from 'react-icons/ci';
import { FcAddDatabase } from 'react-icons/fc';
import { Transition } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { scroller } from 'react-scroll';

const NavBarPlus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.authSlice.user);

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('userInfo');
    dispatch(logOut());
    navigate('/');
    setOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (scrollToAbout && location.pathname === '/') {
      scroller.scrollTo('about', {
        smooth: true,
        offset: 50,
        duration: 700,
      });
      setScrollToAbout(false);
    }
  }, [scrollToAbout, location.pathname]);

  const handleAboutClick = () => {
    if (location.pathname !== '/') {
      setScrollToAbout(true);
      navigate('/');
    } else {
      scroller.scrollTo('about', {
        smooth: true,
        offset: 50,
        duration: 700,
      });
    }
  };

  useEffect(() => {
    if (scrollToContact && location.pathname === '/') {
      scroller.scrollTo('contact', {
        smooth: true,
        offset: 70,
        duration: 1200,
      });
      setScrollToContact(false);
    }
  }, [scrollToContact, location.pathname]);

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      setScrollToContact(true);
      navigate('/');
    } else {
      scroller.scrollTo('contact', {
        smooth: true,
        offset: 70,
        duration: 1200,
      });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-900 animated-gradient-text"
            >
              BeT ElMouneh
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-900 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose className="text-3xl" />
              ) : (
                <AiOutlineMenu className="text-3xl" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link to="/" className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link to="/products" className="text-gray-900 hover:text-gray-600">
              Products
            </Link>
            <Link to="/workshops" className="text-gray-900 hover:text-gray-600">
              Workshop
            </Link>
            <span
              onClick={handleAboutClick}
              className="text-gray-900 hover:text-gray-600 cursor-pointer"
            >
              About us
            </span>
            <span
              onClick={handleContactClick}
              className="text-gray-900 hover:text-gray-600 cursor-pointer"
            >
              Contact
            </span>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/cart">
                  <Button size="medium" title="cart">
                    <CiShoppingCart className="text-3xl" />
                  </Button>
                </Link>
                <Link to="/addProduct">
                  <Button size="medium" title="add product">
                    <FcAddDatabase className="text-3xl" />
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outlined" style={{ margin: '3px 7px' }}>
                    Profile
                  </Button>
                </Link>
                <Button
                  onClick={handleClickOpen}
                  variant="outlined"
                  color="error"
                  style={{ margin: '3px 7px' }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: '3px 7px' }}
                  >
                    Sign in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="outlined"
                    color="inherit"
                    style={{ margin: '3px 7px' }}
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end">
          <div className="w-64 bg-white p-6">
            <div className="flex justify-end mb-4">
              <button onClick={toggleMenu}>
                <AiOutlineClose className="text-2xl text-gray-600" />
              </button>
            </div>
            <div className="space-y-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                Products
              </Link>
              <Link
                to="/workshops"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                Workshop
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                About us
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Transition>

      {/* Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Logout'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="error" autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default NavBarPlus;

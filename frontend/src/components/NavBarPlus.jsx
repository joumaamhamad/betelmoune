import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOut } from '../store/authSlice.js';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link as ScrollLink } from 'react-scroll';

const NavBarPlus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authSlice.user);
  console.log('User:', user);

  const [open, setOpen] = useState(false);

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

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={''} className="text-xl font-bold text-gray-900">
              Bel Elmouneh
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link to={'/'} className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link
              to={'/products'}
              className="text-gray-900 hover:text-gray-600"
            >
              Products
            </Link>
            <Link
              to={'/workshops'}
              className="text-gray-900 hover:text-gray-600"
            >
              Workshop
            </Link>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              className="text-gray-900 hover:text-gray-600 cursor-pointer"
            >
              About us
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1200}
              className="text-gray-900 hover:text-gray-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {user ? (
                <div className="flex space-x-4">
                  <Link to={'/cart'}>
                    <Button size="medium">Cart</Button>
                  </Link>
                  <Link to={'/addProduct'}>
                    <Button size="medium">Add product</Button>
                  </Link>
                  <Link to={'/profile'}>
                    <Button variant="outlined">Profile</Button>
                  </Link>
                  <Button
                    onClick={handleClickOpen}
                    variant="outlined"
                    color="error"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div>
                  <Link to="/signin">
                    <button className="bg-blue-500 text-white py-1 px-3 hover:bg-blue-700 rounded mr-2">
                      Sign in
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="bg-green-500 text-white py-1 px-3 hover:bg-green-700 rounded">
                      Sign up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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

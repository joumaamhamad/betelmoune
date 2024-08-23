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
import { CiShoppingCart } from 'react-icons/ci';
import { FcAddDatabase } from 'react-icons/fc';
import { Transition } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBarPlus = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authSlice.user);
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const isMenuOpen = Boolean(anchorEl);

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

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              {t('Bet Elmouneh')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-900 hover:text-gray-600 focus:outline-none"
              aria-label={t('Toggle menu')}
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
          <div className="hidden md:flex md:space-x-8 md:items-center rtl:space-x-reverse">
            <Link to="/" className="text-gray-900 hover:text-gray-600">
              {t('Home')}
            </Link>
            <Link to="/products" className="text-gray-900 hover:text-gray-600">
              {t('Products')}
            </Link>
            <Link to="/workshops" className="text-gray-900 hover:text-gray-600">
              {t('Workshops')}
            </Link>
            {user ? (
              <Link to="/myWorkshops" className="text-gray-900 hover:text-gray-600">
                {t('My Workshops')}
              </Link>
            ) : null}
            <Link to="/about" className="text-gray-900 hover:text-gray-600">
              {t('About us')}
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-600">
              {t('Contact')}
            </Link>
            {user && user.isAdmin ? (
              <div className="relative">
<Button
  onClick={handleMenuClick}
  variant="outlined"
  color="primary"
  style={{ fontSize: '0.75rem', padding: '3px 6px' }} // Custom size
>
  {t('Admin')}
</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem component={Link} to="/userList" onClick={handleMenuClose}>
                    {t('User List')}
                  </MenuItem>
                  <MenuItem component={Link} to="/productList" onClick={handleMenuClose}>
                    {t('Product List')}
                  </MenuItem>
                  <MenuItem component={Link} to="/workshopList" onClick={handleMenuClose}>
                    {t('Workshop List')}
                  </MenuItem>
                  <MenuItem component={Link} to="/adminDashboard" onClick={handleMenuClose}>
                    {t('Admin Dashboard')}
                  </MenuItem>
                </Menu>
              </div>
            ) : null}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/cart">
                  <Button size="medium" title={t('cart')}>
                    <CiShoppingCart className="text-3xl" />
                  </Button>
                </Link>
                <Link to="/addProduct">
                  <Button size="medium" title={t('add product')}>
                    <FcAddDatabase className="text-3xl" />
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outlined" style={{ margin: '3px 7px' }}>
                    {t('Profile')}
                  </Button>
                </Link>
                <Button
                  onClick={handleClickOpen}
                  variant="outlined"
                  color="error"
                  style={{ margin: '3px 7px' }}
                >
                  {t('Logout')}
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
                    {t('Sign in')}
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="outlined"
                    color="inherit"
                    style={{ margin: '3px 7px' }}
                  >
                    {t('Sign up')}
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
                {t('Home')}
              </Link>
              <Link
                to="/products"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                {t('Products')}
              </Link>
              <Link
                to="/workshops"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                {t('Workshops')}
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                {t('About us')}
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block text-gray-900 hover:text-gray-600"
              >
                {t('Contact')}
              </Link>
              {user && user.isAdmin ? (
                <>
                  <Link
                    to="/userList"
                    onClick={toggleMenu}
                    className="block text-gray-900 hover:text-gray-600"
                  >
                    {t('User List')}
                  </Link>
                  <Link
                    to="/productList"
                    onClick={toggleMenu}
                    className="block text-gray-900 hover:text-gray-600"
                  >
                    {t('Product List')}
                  </Link>
                  <Link
                    to="/workshopList"
                    onClick={toggleMenu}
                    className="block text-gray-900 hover:text-gray-600"
                  >
                    {t('Workshop List')}
                  </Link>
                  <Link
                    to="/adminDashboard"
                    onClick={toggleMenu}
                    className="block text-gray-900 hover:text-gray-600"
                  >
                    {t('Admin Dashboard')}
                  </Link>
                </>
              ) : null}
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
        <DialogTitle id="alert-dialog-title">{t('Confirm Logout')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('Are you sure you want to log out?')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('Cancel')}
          </Button>
          <Button onClick={handleConfirmLogout} color="error" autoFocus>
            {t('Logout')}
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default NavBarPlus;

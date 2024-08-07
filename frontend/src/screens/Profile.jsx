import React from 'react';
import './Profile.css';
const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="userInfo">
          <img src="cat.jpg" alt="" />
          <h2 className="topName">My name</h2>
          <p className="topEMail">myEmail@g.ail.com</p>
          <button className="editProfile">edit Profile</button>
        </div>
        <div className="inputsForm">
          <p className="sText">
            You're creator of this <br></br>
            This is the public name that will be displayed on your profile and
            next to your work. You can change it in your settings.
          </p>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="userName">User Name</label>
              <input type="text" id="userName" />
              <p className="sText">
                Your username appears at the end of your profile URL. You can
                only use letters, numbers, and periods.{' '}
              </p>
            </div>
            <div>
              <label htmlFor="bio">Bio</label>
              <input type="text" id="bio" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
              <p className="sText">
                Changing your email will update your login email. We will send a
                confirmation email to your new address. Your previous email will
                no longer be used for login. Please make sure to add this email
                to your safe-senders list.
              </p>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div>
              <label htmlFor="newPassword">New Password</label>
              <input type="password" id="newPassword" />
            </div>
            <div className="subButton">
              <button>Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/authSlice';

const Profile = () => {
  const user = useSelector((state) => state.authSlice.user);
  console.log('user::::', user);

  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    id: user?._id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    bio: user?.bio,
    email: user?.email,
    password: user?.password,
    profileImage: user?.profileImage,
  });

  const [file, setFile] = useState(null);

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const res = await axios.get(`/api/users/${profile.id}`);
  //       setProfile(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchProfile();
  // }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('profileImage', file);
      formData.append('id', profile.id);

      try {
        const res = await axios.post('/api/users/uploadProfileImage', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setProfile({ ...profile, profileImage: res.data.path });
        console.log('Uploaded Image Path:', res.data.path);
      } catch (error) {
        console.error(error);
      }
    }
    //-----------------------------------------------------------------------------------------
    try {
      await dispatch(updateProfile(profile)).unwrap();
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const formatImagePath = (path) => {
    // Replace backslashes with forward slashes and prepend backend URL
    return path ? `/backend${path.replace(/\\/g, '/')}` : 'https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg';
  };

  console.log(formatImagePath(profile.profileImage))

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 mb-12">
      <div className="flex flex-col items-center">
        <img
          src={formatImagePath(profile.profileImage)}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="mt-4 text-xl font-semibold">{profile.firstName} {profile.lastName}</h2>
        <label className="mt-2 text-blue-500 cursor-pointer hover:underline">
          <input type="file" className="hidden" onChange={handleFileChange} />
          Edit Profile
        </label>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>

  );
};

export default Profile;

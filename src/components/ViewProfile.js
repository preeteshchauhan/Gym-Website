// ViewProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProfile = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/user/profile/${userId}`);
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      {/* Display other user profile data */}
    </div>
  );
};

export default ViewProfile;

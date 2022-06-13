import React, { useState, useEffect } from "react";

import { UserBanner } from "./UserBanner";

import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { StyledPanel } from "../../styles/StyledPanel";

export const UsersPanel = () => {
  const [usersData, setUsersData] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  const fetchData = async () => {
    const payload = {};
    const postUrl = `users`;

    try {
      const { data } = await axiosPrivate.get(postUrl, payload);
      setUsersData(data);
    } catch (error) {}
  };
  useEffect(() => {
    if (usersData[0]?._id) {
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const users = usersData.map((user, index) => {
    if (index < 6) return <UserBanner key={user._id} userData={user} />;
    else return null;
  });

  return (
    <StyledPanel className="UserPanel">
      <aside className="user-panel">
        <h1> Recent Users </h1>
        <div className="user-panel_users">{users}</div>
      </aside>
    </StyledPanel>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [adminEmail, setadminEmail] = useState(null);
  const [adminPassword, setadminPassword] = useState(null);

  const { loading, error, admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(adminLogin({ adminEmail, adminPassword }));
    if (adminLogin.fulfilled.match(result)) {
      console.log("Admin Login Successfull");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border-2 p-20 flex flex-col gap-8">
        <h1 className="text-center">Admin Login</h1>
        
          <div className="flex flex-col justify-center gap-6 items-center">
            <label>Admin Email</label>
            <input
              type="text"
              className="border-2 px-2 py-1"
              value={adminEmail || ""}
              onChange={(e) => setadminEmail(e.target.value)}
            />
            <label>Admin Password</label>
            <input
              type="password"
              className="border-2 px-2 py-1"
              value={adminPassword || ""}
              onChange={(e) => setadminPassword(e.target.value)}
            />
            <button className="bg-amber-200 px-8 py-3 cursor-pointer rounded-md" onClick={handleLogin}>Login</button>
          </div>
        
      </div>
    </div>
  );
};

export default AdminLogin;

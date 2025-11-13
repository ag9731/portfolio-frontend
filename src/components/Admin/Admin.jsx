import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from "../../features/auth/authSlice";

const Admin = () => {

    // const [adminName, setadminName] = useState(null);
    const [adminEmail, setadminEmail] = useState(null);
    const [adminPassword, setadminPassword] = useState(null);
    const dispatch = useDispatch();

    const { loading,error,admin,isAuthenticated,status } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await dispatch(adminLogin({ adminEmail, adminPassword }));
        if (adminLogin.fulfilled.match(result)) {
      console.log("Admin Login Successfull");
    }
    }

  return (
    <div>
        <h1>Admin</h1>

        <form >
        {/* <div>
           <label htmlFor="name" value={adminName} onChange={(e)=> e.target.value}>Name</label>
           <input type="text" />
        </div> */}

        <div>
           <label htmlFor="email">Email</label>
           <input
               type="text"
               value={adminEmail || ""}
               onChange={(e) => setadminEmail(e.target.value)}
            />
        </div>

        <div>
           <label htmlFor="password">Password</label>
           <input
               type="password"
               value={adminPassword || ""}
               onChange={(e) => setadminPassword(e.target.value)}
           />
        </div>

        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
        </form>

    </div>
  )
}

export default Admin
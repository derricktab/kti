import React from "react";
import { toast } from "react-toastify";

export default function LoginScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggingIn, setLoggingIn] = React.useState(false);

  // METHOD HANDLE LOGIN
  const handleSubmit = (event) => {
    event.preventDefault();

    setLoggingIn(true);

    if (username !== "admin") {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setLoggingIn(false);
      return;
    }

    if (password === "admin") {
      localStorage.setItem("loggedIn", true);
      window.location.href = "/admin";
    } else {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setLoggingIn(false);
  };

  return (
    <div className="order-2 order-md-1">
      <div className="row justify-content-center main-cont">
        <div className="container login-wrapper p-5">
          <div className="text-center">
            <img
              src="https://kti.ac.ug/wp-content/uploads/2023/02/KTI-Logo-7.png"
              alt="logo"
              className="img-fluid mb-5 mx-auto"
            />
          </div>
          <h3 className="mb-4 center mt-2 mt-sm-0">
            <strong style={{ color: "maroon" }}>ADMIN</strong> &nbsp; LOGIN
          </h3>

          <form action="#" method="post" onSubmit={handleSubmit}>
            {/* USERNAME */}
            <div className="form-group first">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control rounded"
                placeholder="Enter Username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group last mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control rounded"
                placeholder="Enter Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* SUBMIT */}
            <input
              type="submit"
              className="btn btn-block btn-success custom-button mt-4"
              value={loggingIn ? "Logging in..." : "Login"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

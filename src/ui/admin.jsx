import React, { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AdminDashboard() {
  const [admissions, setAdmissions] = React.useState([]);

  function logout() {
    localStorage.setItem("loggedIn", false);
    window.location.href = "/login";
  }

  // Create a method to read all items in the "admissions" collection
  const getAdmissions = async () => {
    try {
      const admissionsCollection = await getDocs(collection(db, "admissions"));
      const admissionsData = [];
      admissionsCollection.forEach((doc) => {
        admissionsData.push({ id: doc.id, ...doc.data() });
      });
      console.log("LENGTH OF ADMISSIONS: ", admissionsData.length);
      setAdmissions(admissionsData);
    } catch (error) {
      console.error("Error reading admissions collection:", error);
      return [];
    }
  };
  // GETTING THE ADMISSIONS
  useEffect(() => {
    getAdmissions();
  }, []);

  return (
    <div className="dashboard dashboard_1">
      <div className="full_container">
        <div className="inner_container">
          {/* Sidebar  */}
          <nav id="sidebar">
            <div className="sidebar_blog_1">
              <div className="sidebar-header">
                <div className="logo_section">
                  <a href="index.html">
                    <img
                      className="logo_icon img-responsive"
                      src="https://kti.ac.ug/wp-content/uploads/2023/02/KTI-Logo-7.png"
                      alt="#"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="sidebar_blog_2">
              <h4>ADMIN DASHBOARD</h4>
              <ul className="list-unstyled components">
                {/* DASHBOARD */}
                <li className="active">
                  <a
                    href="#dashboard"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                  >
                    <i className="fa fa-dashboard yellow_color" />{" "}
                    <span>Dashboard</span>
                  </a>
                  <ul className="collapse list-unstyled" id="dashboard">
                    <li>
                      <a href="o">
                        &gt; <span>Main Dashboard</span>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* LOGOUT */}
                <li className="active" onClick={() => logout()}>
                  <a href="tr">
                    <i className="fa fa-sign-out red_color" />{" "}
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* end sidebar */}
          {/* right content */}
          <div id="content">
            {/* topbar */}
            <div className="topbar">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="full">
                  <button
                    type="button"
                    id="sidebarCollapse"
                    className="sidebar_toggle"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <div className="right_topbar">
                    <div className="icon_info">
                      <ul className="user_profile_dd">
                        <li>
                          <a
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            href="d"
                          >
                            <img
                              className="img-responsive rounded-circle"
                              src="https://kti.ac.ug/wp-content/uploads/2023/02/KTI-Logo-7.png"
                              alt="#"
                            />
                            <span className="name_user">ADMIN</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* end topbar */}
            {/* dashboard inner */}
            <div className="midde_cont">
              <div className="container-fluid">
                <div className="row column_title">
                  <div className="col-md-12">
                    <div className="page_title">
                      <h2>Dashboard</h2>
                    </div>
                  </div>
                </div>
                <div className="row column1">
                  <div className="col-md-12">
                    <div className="full counter_section margin_bottom_30 bg-success">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-user yellow_color" />
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no text-white">
                            {admissions.length}
                          </p>
                          <p className="head_couter text-white">
                            Total Applicants
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* APPLICANTS GRAPH */}
                <div className="row column2 graph margin_bottom_30">
                  <div className="col-md-l2 col-lg-12">
                    <div className="white_shd full">
                      <div className="full graph_head">
                        <div className="heading1 margin_0">
                          <h2>APPLICANTS </h2>
                        </div>
                      </div>

                      {/* TABLE OF APPLICANTS */}
                      <div className="table_section padding_infor_info">
                        <div className="table-responsive">
                          <table className="table table-hover">
                            {/* Table Header */}
                            <thead>
                              <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Phone</th>
                                <th className="text-center">Sex</th>
                                <th className="text-center">DOB</th>
                                <th className="text-center">1st Choice</th>
                                <th className="text-center">2nd Choice</th>
                                <th className="text-center">3rd Choice</th>
                                <th className="text-center">
                                  Application Date
                                </th>
                                <th className="text-center">Address</th>
                                <th className="text-center">Home Parish</th>
                                <th className="text-center">Sub Country</th>
                                <th className="text-center">Country</th>
                                <th className="text-center">PLE</th>
                                <th className="text-center">UCE</th>
                                <th className="text-center">UACE</th>
                                <th className="text-center">UBTEB</th>
                                <th className="text-center">Parent Name</th>
                                <th className="text-center">Parent DOB</th>
                                <th className="text-center">Parent Village</th>
                                <th className="text-center">
                                  Parent Phone Number
                                </th>
                              </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                              {admissions.map((admission, index) => (
                                <tr key={index}>
                                  <td className="text-center">
                                    {admission.name}
                                  </td>
                                  <td className="text-center">
                                    {admission.email}
                                  </td>
                                  <td className="text-center">
                                    {admission.phoneNumber}
                                  </td>
                                  <td className="text-center">
                                    {admission.sex}
                                  </td>

                                  <td className="text-center">
                                    {admission.dob}
                                  </td>

                                  <td className="text-center">
                                    {admission.firstChoice}
                                  </td>
                                  <td className="text-center">
                                    {admission.secondChoice}
                                  </td>
                                  <td className="text-center">
                                    {admission.thirdChoice}
                                  </td>
                                  <td className="text-center">
                                    {admission.createdAt}
                                  </td>
                                  <td className="text-center">
                                    {admission.address}
                                  </td>
                                  <td className="text-center">
                                    {admission.homeParish}
                                  </td>
                                  <td className="text-center">
                                    {admission.subcounty}
                                  </td>
                                  <td className="text-center">
                                    {admission.country}
                                  </td>

                                  {/* PLE */}
                                  <td className="text-center">
                                    {admission.PLEPasslip && (
                                      <a
                                        href={admission.PLEPasslip}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <img
                                          src="https://cdn-icons-png.flaticon.com/512/888/888108.png"
                                          alt="PLE"
                                          height={30}
                                        />
                                      </a>
                                    )}

                                    {!admission.PLEPasslip && (
                                      <p className="text-center">N/A</p>
                                    )}
                                  </td>

                                  {/* UCE */}
                                  <td className="text-center">
                                    {admission.UCEPasslip && (
                                      <a
                                        href={admission.UCEPasslip}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <img
                                          src="https://cdn-icons-png.flaticon.com/512/888/888108.png"
                                          alt="UCE"
                                          height={30}
                                        />
                                      </a>
                                    )}

                                    {!admission.UCEPasslip && (
                                      <p className="text-center">N/A</p>
                                    )}
                                  </td>

                                  {/* UACE */}
                                  <td className="text-center">
                                    {admission.UACEPasslip && (
                                      <a
                                        href={admission.UACEPasslip}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <img
                                          src="https://cdn-icons-png.flaticon.com/512/888/888108.png"
                                          alt="UACE"
                                          height={30}
                                        />
                                      </a>
                                    )}

                                    {!admission.UACEPasslip && (
                                      <p className="text-center">N/A</p>
                                    )}
                                  </td>

                                  {/* UBTEB */}
                                  <td className="text-center">
                                    {admission.UBTEBPasslip && (
                                      <a
                                        href={admission.UBTEBPasslip}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <img
                                          src="https://cdn-icons-png.flaticon.com/512/888/888108.png"
                                          alt="UBTEB"
                                          height={30}
                                        />
                                      </a>
                                    )}

                                    {!admission.UBTEBPasslip && (
                                      <p className="text-center">N/A</p>
                                    )}
                                    
                                  </td>

                                  {/* Parent */}
                                  <td className="text-center">
                                    {admission.parentName}
                                  </td>
                                  <td className="text-center">
                                    {admission.parent_dob}
                                  </td>
                                  <td className="text-center">
                                    {admission.parent_village}
                                  </td>
                                  <td className="text-center">
                                    {admission.parent_phoneNumber}
                                  </td>

                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <div className="container-fluid">
                <div className="footer">
                  <p>
                    Copyright © 2024 Kyadondo Technical Institute. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
            {/* end dashboard inner */}
          </div>
        </div>
      </div>
    </div>
  );
}

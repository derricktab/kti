import React, { useState } from "react";
import { storage, db } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

export default function Main() {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [dob, setDob] = useState("");
  const [homeParish, setHomeParish] = useState("");
  const [subcounty, setSubcounty] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [parent_country, setParent_country] = useState("");
  const [parent_nationality, setParent_nationality] = useState("");
  const [parent_phoneNumber, setParent_phoneNumber] = useState("");
  const [parent_district, setParent_district] = useState("");
  const [parent_subcounty, setParent_subcounty] = useState("");
  const [parent_dob, setParent_dob] = useState("");
  const [parent_village, setParent_village] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [biology, setBiology] = useState("");
  const [math, setMath] = useState("");
  const [physics, setPhysics] = useState("");
  const [geography, setGeography] = useState("");
  const [history, setHistory] = useState("");
  const [english, setEnglish] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [principal1, setPrincipal1] = useState("");
  const [principal2, setPrincipal2] = useState("");
  const [principal3, setPrincipal3] = useState("");
  const [principal1Grade, setPrincipal1Grade] = useState("");
  const [principal2Grade, setPrincipal2Grade] = useState("");
  const [principal3Grade, setPrincipal3Grade] = useState("");
  const [subsidiary, setSubsidiary] = useState("");
  const [subsidiaryGrade, setSubsidiaryGrade] = useState("");
  const [selectedSubjectGrade, setSelectedSubjectGrade] = useState("");
  const [gp, setGp] = useState("");
  const [UCEPasslip, setUCEPasslip] = useState();
  const [UACEPasslip, setUACEPasslip] = useState();
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();
  const [thirdChoice, setThirdChoice] = useState();
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file) => {
    try {
      // Create a storage reference
      const storageRef = ref(storage, `files/${file.name}`);

      // Upload file
      const uploadTaskSnapshot = await uploadBytes(storageRef, file);

      // Get download URL
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
      console.log("File available at", downloadURL);

      return downloadURL;
    } catch (error) {
      // Handle errors
      console.error("Error uploading file:", error);
      return null;
    }
  };

  // RECEIVE UPLOADED UCE PASSLIP AND UPLOAD TO FIREBASE STORAGE
  async function handleUploadUCEPasslip(event) {
    // receive the selected file
    const file = event.target.files[0];
    if (file) {
      setUCEPasslip(file);
    }
  }
  // RECEIVE UPLOADED UACE PASSLIP AND UPLOAD TO FIREBASE STORAGE
  async function handleUploadUACEPasslip(event) {
    // receive the selected file
    const file = event.target.files[0];
    if (file) {
      setUACEPasslip(file);
    }
  }

  const Loader = () => {
    return <div className="loader"></div>;
  };
  const courseOptions = [
    "National Diploma in Accountancy",
    "National Diploma in Business Administration",
    "National Diploma in Marketing",
    "National Diploma in Tourism Management",
    "National Diploma in Journalism",
    "National Diploma in Hotels & Institutional Catering",
    "National Diploma in Secretarial Studies",
    "Diploma in ECD Teacher Education",
    "National Certificate in Accountancy",
    "National Certificate in Business Administration",
    "National Certificate in Marketing",
    "National Certificate in Journalism",
    "National Certificate in Tourism Management",
    "National Certificate in Hotels & Institutional Catering",
    "National Certificate in Secretarial Studies",
    "Certificate in ECD Teacher Education",
    "National Diploma in Computer Science",
    "National Diploma in Information Technology",
    "Diploma in Art & Design",
    "National Diploma in Fashion Design",
    "National Diploma in Cosmetology & Hair Dressing",
    "National Diploma in Interior Design",
    "National Certificate in Computer Science",
    "National Certificate in Information & Communications Technology",
    "Certificate in Art & Design",
    "National Certificate in Fashion & Design",
    "National Certificate in Cosmetology & Beauty Therapy",
    "National Diploma in Civil Engineering",
    "National Diploma in Electrical Engineering",
    "National Diploma in Auto-Mobile Engineering",
    "National Diploma in Water Engineering",
    "National Certificate in Building & Construction",
    "National Certificate in Electrical Systems & Installation",
    "National Certificate in Automotive Vehicle Mechanics",
    "National Certificate in Plumbing",
    "National Certificate in Welding",
  ];

  const grades = ["D1", "D2", "C3", "C4", "C5", "C6", "P7", "P8", "F9"];

  //   METHOD TO HANDLE SUBMIT
  async function handleSubmit(event) {
    event.preventDefault();
    setUploading(true);
    let UCEPasslipURL = null;
    let UACEPasslipURL = null;

    if (UCEPasslip) {
      UCEPasslipURL = await uploadFile(UCEPasslip);
    }

    if (UACEPasslip) {
      UACEPasslipURL = await uploadFile(UACEPasslip);
    }

    const data = {
      name: name,
      sex: sex,
      dob: dob,
      homeParish: homeParish,
      subcounty: subcounty,
      country: country,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      parentName: parentName,
      parent_country: parent_country,
      parent_nationality: parent_nationality,
      parent_phoneNumber: parent_phoneNumber,
      parent_district: parent_district,
      parent_subcounty: parent_subcounty,
      parent_dob: parent_dob,
      parent_village: parent_village,
      chemistry: chemistry,
      biology: biology,
      math: math,
      physics: physics,
      geography: geography,
      history: history,
      english: english,
      selectedSubject: selectedSubject,
      selectedSubjectGrade: selectedSubjectGrade,
      principal1: principal1,
      principal2: principal2,
      principal3: principal3,
      subsidiary: subsidiary,
      principal1Grade: principal1Grade,
      principal2Grade: principal2Grade,
      principal3Grade: principal3Grade,
      subsidiaryGrade: subsidiaryGrade,
      gp: gp,
      UCEPasslip: UCEPasslipURL,
      UACEPasslip: UACEPasslipURL,
      firstChoice: firstChoice,
      secondChoice: secondChoice,
      thirdChoice: thirdChoice,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    console.log(JSON.stringify(data));

    try {
      await addDoc(collection(db, "admissions"), data);

      toast.success("Admission Request Received, Thank you for Applying");
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    }

    setUploading(false);
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* LEFT COLUMN FOR THE IMAGE */}
          <div className="col-md-5 img-col p-0">
            <div className="img-wrapper">
              <img
                src="https://images.theconversation.com/files/120040/original/image-20160425-22383-jttauj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                className="img-fluid"
                alt="Main"
              />

              {/* OVERLAY */}
              <div className="img-overlay" />
            </div>
          </div>
          {/* RIGHT COLUMN FOR THE ADMISSION FORM */}
          <div className="col-md-7 right-col px-4 py-5">
            <div className="d-flex justify-content-center">
              <img
                src="https://kti.ac.ug/wp-content/uploads/2023/02/KTI-Logo-7.png"
                className="img-fluid"
                alt="Logo"
              />
            </div>
            <h2 className="text-center mb-4 mt-5 custom-font">
              ONLINE ADMISSION PORTAL
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name" className="required form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* SEX */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="required form-label" htmlFor="sex">
                    Sex
                  </label>
                  <select
                    id="sex"
                    className="form-control"
                    onChange={(e) => setSex(e.target.value)}
                    required
                  >
                    <option value={""}>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                {/* DATE OF BIRTH */}
                <div className="form-group col-md-6">
                  <label className="required form-label" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Home Parish, Subcounty, and Country */}
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label className="required form-label" htmlFor="parish">
                    Home Parish
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="parish"
                    placeholder="Enter parish"
                    onChange={(e) => setHomeParish(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label className="required form-label" htmlFor="subcounty">
                    Subcounty
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subcounty"
                    placeholder="Enter subcounty"
                    onChange={(e) => setSubcounty(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label className="required form-label" htmlFor="country">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Enter country"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Permanent Address */}
              <div className="form-group">
                <label className="required form-label" htmlFor="address">
                  Permanent Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Kiwatule, Kampala"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                {/* Current Telephone Number */}
                <div className="form-group col-md-6">
                  <label className="required form-label" htmlFor="telephone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telephone"
                    placeholder="Enter phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                {/* EMAIL ADDRESS */}
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="username@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* SECTION FOR UCE RESULTS */}
              <div className="section-wrapper p-3 mb-2">
                <h3>UCE Results</h3>
                {/* ENGLISH */}
                <div className="form-group row">
                  <label
                    htmlFor="english"
                    className="required col-sm-4 col-form-label subject"
                  >
                    English
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="english"
                      onChange={(e) => setEnglish(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>
                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* MATHEMATICS */}
                <div className="form-group row">
                  <label
                    htmlFor="mathematics"
                    className="required col-sm-4 col-form-label subject"
                  >
                    Mathematics
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="mathematics"
                      onChange={(e) => setMath(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>
                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* GEOGRAPHY */}
                <div className="form-group row">
                  <label
                    htmlFor="geography"
                    className="required col-sm-4 col-form-label subject"
                  >
                    Geography
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="geography"
                      onChange={(e) => setGeography(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* PHYSICS */}
                <div className="form-group row">
                  <label
                    htmlFor="physics"
                    className="required col-sm-4 col-form-label subject"
                  >
                    Physics
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="physics"
                      onChange={(e) => setPhysics(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* BIOLOGY */}
                <div className="form-group row">
                  <label
                    htmlFor="biology"
                    className="required col-sm-4 col-form-label subject"
                  >
                    Biology
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="biology"
                      onChange={(e) => setBiology(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* CHEMISTRY */}
                <div className="form-group row">
                  <label
                    htmlFor="chemistry"
                    className="required col-sm-4 col-form-label subject"
                  >
                    Chemistry
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="chemistry"
                      onChange={(e) => setChemistry(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* HISTORY */}
                <div className="form-group row">
                  <label
                    htmlFor="history"
                    className="required col-sm-4 col-form-label subject"
                  >
                    History
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="history"
                      onChange={(e) => setHistory(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>
                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* ADDITIONAL SUBJECT */}
                <label htmlFor="additionalSubject" className="required">
                  Additional Subject
                </label>
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col-sm-4 mx-3"
                    id="additionalSubject"
                    placeholder="e.g Luganda"
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    required
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="english"
                      onChange={(e) => setSelectedSubjectGrade(e.target.value)}
                      required
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* UPLOAD UCE PASSLIP */}
                <div className="form-group pt-3">
                  <label htmlFor="uploadFile">
                    Upload Scanned UCE Passlip (Optional)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="uploadFile"
                    onChange={handleUploadUCEPasslip}
                  />
                </div>
              </div>

              {/* SECTION FOR UACE RESULTS */}
              <div className="section-wrapper p-3 mt-3 mb-4">
                <h3>UACE Results</h3>
                {/* PRINCIPAL SUBJECT 1*/}
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col-sm-4 mx-3"
                    id="principal1"
                    placeholder="Principal Subject 1"
                    onChange={(e) => setPrincipal1(e.target.value)}
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="uace1"
                      onChange={(e) => setPrincipal1Grade(e.target.value)}
                    >
                      <option value={""}>Select Grade</option>

                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                      <option>O</option>
                      <option>F</option>
                    </select>
                  </div>
                </div>
                {/* PRINCIPAL SUBJECT 2 */}
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col-sm-4 mx-3"
                    id="principal2"
                    placeholder="Principal Subject 2"
                    onChange={(e) => setPrincipal2(e.target.value)}
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="uace2"
                      onChange={(e) => setPrincipal2Grade(e.target.value)}
                    >
                      <option value={""}>Select Grade</option>

                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                      <option>O</option>
                      <option>F</option>
                    </select>
                  </div>
                </div>
                {/* PRINCIPAL SUBJECT 3 */}
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col-sm-4 mx-3"
                    id="principal3"
                    placeholder="Principal Subject 3"
                    onChange={(e) => setPrincipal3(e.target.value)}
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="uace3"
                      onChange={(e) => setPrincipal3Grade(e.target.value)}
                    >
                      <option value={""}>Select Grade</option>

                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                      <option>O</option>
                      <option>F</option>
                    </select>
                  </div>
                </div>

                {/* GENERAL PAPER */}
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col-sm-4 mx-3"
                    id="gp"
                    placeholder="General Paper"
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="uace3"
                      onChange={(event) => setGp(event.target.value)}
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* SUBSIDIARY */}
                <div className="form-group row">
                  <input
                    type="text"
                    className="form-control col-sm-4 mx-3"
                    id="subsidiary"
                    placeholder="Subsidiary. e.g Sub Math"
                    onChange={(event) => setSubsidiary(event.target.value)}
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="subsidiary"
                      onChange={(event) =>
                        setSubsidiaryGrade(event.target.value)
                      }
                    >
                      <option value={""}>Select Grade</option>

                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* UPLOAD UACE PASSLIP */}
                <div className="form-group pt-3">
                  <label htmlFor="uploadFile">
                    Upload Scanned UACE Passlip (Optional)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="uploadFile"
                    onChange={handleUploadUACEPasslip}
                  />
                </div>
              </div>
              {/* CHOICE OF COURSE / PROFESSION */}
              <label htmlFor="name" className="font-weight-bold">
                Choice of Course / Profession
              </label>
              {/* 1ST CHOICE */}
              <div className="form-group row">
                <label
                  htmlFor="course"
                  className="col-sm-4 col-form-label required"
                >
                  1st Choice
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    id="course"
                    onChange={(event) => setFirstChoice(event.target.value)}
                    required
                  >
                    <option>Select</option>
                    {courseOptions.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* 2ND CHOICE */}
              <div className="form-group row">
                <label
                  htmlFor="course"
                  className="col-sm-4 col-form-label required"
                >
                  2nd Choice
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    id="course"
                    onChange={(e) => setSecondChoice(e.target.value)}
                    required
                  >
                    <option>Select</option>
                    {courseOptions.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* THIRD CHOICE */}
              <div className="form-group row">
                <label
                  htmlFor="course"
                  className=" required col-sm-4 col-form-label"
                >
                  3rd Choice
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    id="course"
                    onChange={(e) => setThirdChoice(e.target.value)}
                    required
                  >
                    <option>Select</option>
                    {courseOptions.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* PARENTS / GUARDIANS INFORMATION */}
              <label htmlFor="parents" className="font-weight-bold mt-4">
                PARENT / GUARDIAN'S INFORMATION (All Students are required to
                give facts on the following)
              </label>
              {/* NAME OF PARENT / GUARDIAN */}
              <div className="form-group row">
                <label
                  htmlFor="fullname"
                  className=" required col-sm-2 col-form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control col-sm-10"
                  id="parent_fullname"
                  name="parent_fullname"
                  placeholder="Parent/Guardian's Name"
                  onChange={(e) => {
                    setParentName(e.target.value);
                  }}
                  required
                />
              </div>
              {/* PARENT / GUARDIAN DATE OF BIRTH */}
              <div className="form-group row">
                <label
                  htmlFor="dob"
                  className=" required col-sm-2 col-form-label"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control col-sm-10"
                  id="parent_dob"
                  name="parent_dob"
                  onChange={(event) => setParent_dob(event.target.value)}
                  required
                />
              </div>
              {/* PARENT / GUARDIAN VILLAGE OF BIRTH */}
              <div className="form-group row">
                <label htmlFor="village" className="col-sm-2 col-form-label">
                  Village of Birth
                </label>
                <input
                  type="text"
                  className="form-control col-sm-10"
                  id="parent_village"
                  name="parent_village"
                  placeholder="Parent/Guardian's Village of Birth"
                  onChange={(e) => setParent_village(e.target.value)}
                  required
                />
              </div>
              {/* PARENT / GUARDIAN SUBSCOUNTY */}
              <div className="form-group row">
                <label htmlFor="subcounty" className="col-sm-2 col-form-label">
                  Subcounty
                </label>
                <input
                  type="text"
                  className="form-control col-sm-10"
                  id="parent_subcounty"
                  name="parent_subcounty"
                  placeholder="Parent/Guardian's Subcounty"
                  onChange={(e) => setParent_subcounty(e.target.value)}
                  required
                />
              </div>
              {/* PARENT / GUARDIAN DISTRICT */}
              <div className="form-group row">
                <label
                  htmlFor="district"
                  className=" required col-sm-2 col-form-label"
                >
                  District
                </label>
                <input
                  type="text"
                  className="form-control col-sm-10"
                  id="parent_district"
                  name="parent_district"
                  placeholder="Parent/Guardian's District"
                  onChange={(e) => setParent_district(e.target.value)}
                  required
                />
              </div>
              {/* PARENT / GUARDIAN NATIONALITY */}
              <div className="form-group row">
                <label
                  htmlFor="nationality"
                  className=" required col-sm-2 col-form-label"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  className="form-control col-sm-10"
                  id="parent_nationality"
                  name="parent_nationality"
                  placeholder="Parent/Guardian's Nationality"
                  onChange={(e) => setParent_nationality(e.target.value)}
                  required
                />
              </div>
              {/* PARENT / GUARDIAN COUNTRY OF RESIDENCE */}
              <div className="form-group row">
                <label
                  htmlFor="country"
                  className=" required col-sm-2 col-form-label"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="form-control col-sm-10"
                  id="parent_country"
                  name="parent_country"
                  placeholder="Parent/Guardian's Country of Residence"
                  onChange={(e) => setParent_country(e.target.value)}
                  required
                />
              </div>

              {/* PARENT / GUARDIAN PHONENUMBER */}
              <div className="form-group row">
                <label
                  htmlFor="phonenumber"
                  className=" required col-sm-2 col-form-label"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control col-sm-10"
                  id="parent_phonenumber"
                  name="parent_phonenumber"
                  placeholder="Parent/Guardian's Phone Number"
                  onChange={(e) => setParent_phoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* APPLY NOW */}
              <button
                type="submit"
                className="btn btn-success rounded-pill w-100 mt-4 center"
              >
                {uploading ? <Loader /> : "APPLY NOW"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

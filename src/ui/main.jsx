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
  const [UBTEBTranscript, setUBTEBTranscript] = useState();
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();
  const [thirdChoice, setThirdChoice] = useState();
  const [uploading, setUploading] = useState(false);
  const [satUACE, setSatUACE] = useState(false);
  const [satUCE, setSatUCE] = useState(false);
  const [satUBTEB, setSatUBTEB] = useState(false);
  const [pleGrade, setPleGrade] = useState("");
  const [PLEPasslip, setPLEPasslip] = useState();
  const [lastSchool, setLastSchool] = useState("");
  const [year, setYear] = useState("");
  const [fourthChoice, setFourthChoice] = useState("");
  const [NOKAddress, setNOKAddress] = useState("");
  const [NOKName, setNOKName] = useState("");
  const [NOKPhone, setNOKPhone] = useState("");
  const [hasRelativeNearby, setHasRelativeNearby] = useState(false);
  const [relativeName, setRelativeName] = useState("");
  const [relativePhone, setRelativePhone] = useState("");
  const [relativeAddress, setRelativeAddress] = useState("");
  const [declaration, setDeclaration] = useState(false);
  const [reason, setReason] = useState("");

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
  async function handleUploadPLEPasslip(event) {
    // receive the selected file
    const file = event.target.files[0];
    if (file) {
      setPLEPasslip(file);
    }
  }

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
  // RECEIVE UPLOADED UBTEB TRANSCRIPT AND UPLOAD TO FIREBASE STORAGE
  async function handleUploadUBTEBTranscript(event) {
    // receive the selected file
    const file = event.target.files[0];
    if (file) {
      setUBTEBTranscript(file);
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
    let PLEPasslipURL = null;
    let UBTEBTranscriptURL = null;

    if (UCEPasslip) {
      UCEPasslipURL = await uploadFile(UCEPasslip);
    }

    if (UACEPasslip) {
      UACEPasslipURL = await uploadFile(UACEPasslip);
    }

    if (UBTEBTranscript) {
      UBTEBTranscriptURL = await uploadFile(UBTEBTranscript);
    }

    if (PLEPasslip) {
      PLEPasslipURL = await uploadFile(PLEPasslip);
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
      UBTEBTranscript: UBTEBTranscriptURL,
      ple_aggresgates: pleGrade,
      PLEPasslip: PLEPasslipURL,
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

      // WAIT 5 SECONDS
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // VISIT GIVEN SITE
      window.location.href = "https://www.kti.ac.ug/";
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
                src="https://studenthub.africa/app/uploads/careers/vWOc4M_Lr6_ZaSmoVmbsTRz5evM4j0bL.jpg"
                className="img-fluid"
                alt="Main"
              />

              {/* OVERLAY */}
              <div className="img-overlay" />
            </div>
          </div>
          {/* RIGHT COLUMN FOR THE ADMISSION FORM */}
          <div className="col-md-7 right-col px-5 py-5">
            <div className="d-flex justify-content-center">
              <img
                src="https://kti.ac.ug/wp-content/uploads/2023/02/KTI-Logo-7.png"
                className="img-fluid"
                alt="Logo"
              />
            </div>
            <h1 className="text-center mb-4 mt-5 custom-font bold">
              SKILLS DEVELOPMENT FACILITATION GRANT (SDFG)
            </h1>

            <div>
              The Skills Development Facilitation Grant (SDFG) Is a Fund that is
              Instituted & managed by Tertiary Institutions to partially sponsor
              students who have completed either P.7, JC, NC, S.4, or S.6,
              Interested to join careers in Technical, Vocational Education &
              Training (TVET) Courses on Diploma & Certificates. The offer
              covers between 40-50% of the student's total tuition & functional
              fees for two years of either the Junior Certificate, National
              Certificate or National Diploma in Business, Technical &
              vocational Courses.
            </div>
            <div>
              All courses in this arrangement are examined by Uganda Business &
              Technical Examinations Board (UBTEB) except ECD. Beneficiaries
              under this category are selected by the Institution based on both
              performance, talent or individual interest!.
            </div>
            <h2 className="mt-3 mb-2">Eligibility</h2>
            <div>
              Eligible students to apply in this program <b>MUST:</b>
            </div>
            <ol className="pl-3 mt-2">
              <li>Be Ugandan Nationals,</li>
              <li>
                Have:
                <ol type="i" className="pl-3">
                  <li>
                    3 passes obtained at PLE for those joining Junior
                    Certificates,
                  </li>
                  <li>
                    3 passes & above obtained at UCE for those joining National
                    Certificates,
                  </li>
                  <li>
                    At least 2nd Class Upper & above from National Certificate
                    (ubteb) for those joining National Diplomas.
                  </li>
                  <li>
                    At least 1 principal pass & 2 subsidiary passes & 3-5 passes
                    at 'O' Level for those joining National Diplomas as well.
                  </li>
                  <li>
                    Discipline & Academic competitiveness is key for every
                    applicant in this program.
                  </li>
                </ol>
              </li>
            </ol>
            <h2 className="my-2">Application</h2>
            <div>
              Interested APPLICANTS SHOULD APPLY ON either CERTIFICATE or
              DIPLOMA in the FOLLOWING COURSES:
            </div>
            <ol className="mb-5 pl-3 mt-3" type="1">
              <li>Electrical Engineering.</li>
              <li>Civil Engineering.</li>
              <li>Water Engineering.</li>
              <li>Automobile Engineering.</li>
              <li>Information Technology.</li>
              <li>Fashion & Design.</li>
              <li>Hotel Management.</li>
              <li>Tourism Management.</li>
              <li>Cosmetology/Hairdressing.</li>
              <li>Art & Industrial Design.</li>
              <li>Accounting.</li>
              <li>Business Administration</li>
              <li>Journalism.</li>
              <li>Nursery Teacher Education.</li>
            </ol>

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

              <div className="form-row">
                {/* Address */}

                <div className="form-group col-md-6">
                  <label className="required form-label" htmlFor="address">
                    Address
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

                {/* NATIONALITY */}
                <div className="form-group col-md-6">
                  <label className="required form-label" htmlFor="nationality">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nationality"
                    placeholder="Enter nationality"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
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

              {/* LAST SCHOOL ATTENDED */}
              <div className="form-row">
                <div className="form-group col-8">
                  <label htmlFor="lastSchool" className="required form-label">
                    Last School Attended
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastSchool"
                    placeholder="Enter the last school you attended"
                    onChange={(e) => setLastSchool(e.target.value)}
                    required
                  />
                </div>

                {/* YEAR */}
                <div className="form-group col-4">
                  <label htmlFor="year" className="required form-label">
                    Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="year"
                    placeholder="Enter year"
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>
              </div>

              <br />

              {/* SECTION FOR UCE RESULTS */}

              <div className="section-wrapper p-3 mb-2">
                <h3>UCE Results</h3>
                {/* ENGLISH */}
                <div className="form-group row">
                  <label
                    htmlFor="english"
                    className=" col-sm-4 col-form-label subject required"
                  >
                    English
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      required
                      id="english"
                      onChange={(e) => setEnglish(e.target.value)}
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
                    className=" col-sm-4 col-form-label subject required"
                  >
                    Mathematics
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      required
                      id="mathematics"
                      onChange={(e) => setMath(e.target.value)}
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
                    className=" col-sm-4 col-form-label subject required"
                  >
                    Geography
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      required
                      id="geography"
                      onChange={(e) => setGeography(e.target.value)}
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
                    className=" col-sm-4 col-form-label subject required"
                  >
                    Physics
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      required
                      id="physics"
                      onChange={(e) => setPhysics(e.target.value)}
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
                    className=" col-sm-4 col-form-label subject required"
                  >
                    Biology
                  </label>
                  <div className="col-sm-8">
                    <select
                      required
                      className="form-control"
                      id="biology"
                      onChange={(e) => setBiology(e.target.value)}
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
                    className=" col-sm-4 col-form-label subject required"
                  >
                    Chemistry
                  </label>
                  <div className="col-sm-8">
                    <select
                      required
                      className="form-control"
                      id="chemistry"
                      onChange={(e) => setChemistry(e.target.value)}
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
                    className=" col-sm-4 col-form-label subject required"
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
                  />
                  <div className="col-sm-7">
                    <select
                      className="form-control"
                      id="english"
                      onChange={(e) => setSelectedSubjectGrade(e.target.value)}
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

              {/* SWITCH TO CONFIRM STUDENT SAT UACE */}
              <div className="form-group  section-wrapper p-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="uace"
                    name="uace"
                    value="uace"
                    onChange={(e) => setSatUACE(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="uace">
                    I have UACE Results
                  </label>
                </div>
              </div>

              {/* UACE SECTION */}
              {satUACE && (
                <div className="section-wrapper p-3 mt-3 mb-4">
                  <h3 className="pb-2">UACE Results</h3>
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
              )}

              {/* SWITCH TO CONFIRM STUDENT SAT UACE */}
              <div className="form-group  section-wrapper p-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ubteb"
                    name="ubteb"
                    value="ubteb"
                    onChange={(e) => setSatUBTEB(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="ubteb">
                    I have UBTEB Results
                  </label>
                </div>
              </div>

              {satUBTEB && (
                <div className="section-wrapper p-3 mt-3 mb-4">
                  <h3>UBTEB Results</h3>
                  {/* UPLOAD UACE PASSLIP */}
                  <div className="form-group pt-3">
                    <label htmlFor="uploadFile">
                      Upload Scanned UBTEB Transcript
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="uploadFile"
                      onChange={handleUploadUBTEBTranscript}
                    />
                  </div>
                </div>
              )}

              <br />

              {/* CHOICE OF COURSE / PROFESSION */}
              <label htmlFor="name" className="font-weight-bold">
                Which Courses Are You Applying For?
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

              {/* FOURTH CHOICE */}
              <div className="form-group row">
                <label
                  htmlFor="course"
                  className=" required col-sm-4 col-form-label"
                >
                  4th Choice
                </label>
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    id="course"
                    onChange={(e) => setFourthChoice(e.target.value)}
                    required
                  >
                    <option>Select</option>
                    {courseOptions.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* NEXT OF KIN */}
              <div className="section-wrapper p-3 mb-2 mt-3">
                <h4 className="mb-3">NEXT OF KIN</h4>
                {/* NAME */}
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
                    onChange={(e) => {
                      setNOKName(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="form-row">
                  {/* ADDRESS */}
                  <div className="form-group col-md-5">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={(e) => setNOKAddress(e.target.value)}
                    />
                  </div>

                  {/* PHONE NUMBER */}
                  <div className="form-group col-md-7">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      onChange={(e) => setNOKPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* SWITCH TO CONFIRM STUDENT HAS A RELATIVE AROUND KAMPALA */}
              <div className="form-group  section-wrapper1 p-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="hasRelative"
                    type="checkbox"
                    onChange={(e) => setHasRelativeNearby(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="hasRelative">
                    I have a relative or friend near and around Kampala
                  </label>
                </div>
              </div>

              {/* RELATIVE DETAILS*/}
              {hasRelativeNearby && (
                <div className="section-wrapper p-3 mb-2 mt-3">
                  <h4 className="mb-3">RELATIVE / FRIEND DETAILS</h4>
                  {/* NAME */}
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
                      onChange={(e) => {
                        setRelativeName(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="form-row">
                    {/* ADDRESS */}
                    <div className="form-group col-md-5">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        onChange={(e) => setRelativeAddress(e.target.value)}
                      />
                    </div>

                    {/* PHONE NUMBER */}
                    <div className="form-group col-md-7">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        onChange={(e) => setRelativePhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}


             
              {/* REASON FOR APPLYING */}
              <div className="form-group">
                <label
                  htmlFor="fullname"
                  className=" required col-form-label"
                >
                  State Reason for Applying For The Bursary
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                  required
                />
              </div>

              {/* FINANCING THE BALANCE */}
              <div className="form-group">
                <label
                  htmlFor="dob"
                  className=" required col-form-label"
                >
                  How do you intend to finance the remaining balance if the bursary is granted to you?
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setParent_dob(event.target.value)}
                  required
                />
              </div>

              <div className="form-check">
                  <input
                    className="form-check-input"
                    id="declaration"
                    type="checkbox"
                    onChange={(e) => setDeclaration(e.target.checked)}
                    required
                  />
                  <label className="form-check-label" htmlFor="declaration">
                    I declare that the above information is true and correct to the best of my knowledge and beleif, and i shall obey the rules and regulations made from time to time.
                  </label>
                </div>


              {/* APPLY NOW */}
              <button
                type="submit"
                className="btn btn-success rounded-pill w-100 mt-4 center apply"
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

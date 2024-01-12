import './App.css';

function App() {
  return (
    <div>
    
    <div className="container-fluid">
      <div className="row">
        {/* LEFT COLUMN FOR THE IMAGE */}
        <div className="col-md-5 img-col p-0">
          <div className="img-wrapper">
            <img src="https://images.theconversation.com/files/120040/original/image-20160425-22383-jttauj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" className="img-fluid" />
            {/* OVERLAY */}
            <div className="img-overlay" />
          </div>
        </div>
        {/* RIGHT COLUMN FOR THE ADMISSION FORM */}
        <div className="col-md-7 right-col px-4 py-5">
          <div className="d-flex justify-content-center">
            <img src="https://kti.ac.ug/wp-content/uploads/2023/02/KTI-Logo-7.png" className="img-fluid" alt="Logo" />
          </div>
          <h2 className="text-center mb-4 mt-4">ONLINE ADMISSION PORTAL</h2>
          <form>
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
            </div>
            {/* Sex and Date of Birth */}
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="sex">Sex</label>
                <select id="sex" className="form-control">
                  <option selected>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" className="form-control" id="dob" />
              </div>
            </div>
            {/* Home Parish, Subcounty, and Country */}
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="parish">Home Parish</label>
                <input type="text" className="form-control" id="parish" placeholder="Enter parish" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="subcounty">Subcounty</label>
                <input type="text" className="form-control" id="subcounty" placeholder="Enter subcounty" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" id="country" placeholder="Enter country" />
              </div>
            </div>
            {/* Permanent Address */}
            <div className="form-group">
              <label htmlFor="address">Permanent Address</label>
              <input type="text" className="form-control" id="address" placeholder="Kiwatule, Kampala" />
            </div>
            {/* Current Telephone Number */}
            <div className="form-group">
              <label htmlFor="telephone">Current Telephone Number</label>
              <input type="tel" className="form-control" id="telephone" placeholder="Enter telephone number" />
            </div>
            {/* SECTION FOR UCE RESULTS */}
            <div className="section-wrapper p-3 mb-2">
              <h3>UCE Results</h3>
              {/* ENGLISH */}
              <div className="form-group row">
                <label htmlFor="english" className="col-sm-4 col-form-label subject">English</label>
                <div className="col-sm-8">
                  <select className="form-control" id="english">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* MATHEMATICS */}
              <div className="form-group row">
                <label htmlFor="mathematics" className="col-sm-4 col-form-label subject">Mathematics</label>
                <div className="col-sm-8">
                  <select className="form-control" id="mathematics">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* GEOGRAPHY */}
              <div className="form-group row">
                <label htmlFor="geography" className="col-sm-4 col-form-label subject">Geography</label>
                <div className="col-sm-8">
                  <select className="form-control" id="geography">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* PHYSICS */}
              <div className="form-group row">
                <label htmlFor="physics" className="col-sm-4 col-form-label subject">Physics</label>
                <div className="col-sm-8">
                  <select className="form-control" id="physics">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* BIOLOGY */}
              <div className="form-group row">
                <label htmlFor="biology" className="col-sm-4 col-form-label subject">Biology</label>
                <div className="col-sm-8">
                  <select className="form-control" id="biology">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* CHEMISTRY */}
              <div className="form-group row">
                <label htmlFor="chemistry" className="col-sm-4 col-form-label subject">Chemistry</label>
                <div className="col-sm-8">
                  <select className="form-control" id="chemistry">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* HISTORY */}
              <div className="form-group row">
                <label htmlFor="history" className="col-sm-4 col-form-label subject">History</label>
                <div className="col-sm-8">
                  <select className="form-control" id="history">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* ADDITIONAL SUBJECT */}
              <div className="form-group row">
                <input type="text" className="form-control col-sm-4" id="additionalSubject" placeholder="Enter Additional Subject" />
                <div className="col-sm-8">
                  <select className="form-control" id="english">
                    <option>Select Grade</option>
                    <option>D1</option>
                    <option>D2</option>
                    <option>C3</option>
                    <option>C4</option>
                    <option>C5</option>
                    <option>C6</option>
                    <option>P7</option>
                    <option>P8</option>
                    <option>F9</option>
                  </select>
                </div>
              </div>
              {/* UPLOAD UCE PASSLIP */}
              <div className="form-group pt-3">
                <label htmlFor="uploadFile">Upload Scanned UCE Passlip (Optional)</label>
                <input type="file" className="form-control-file" id="uploadFile" />
              </div>
            </div>
            {/* SECTION FOR UACE RESULTS */}
            <div className="section-wrapper p-3 mt-3 mb-4">
              <h3>UACE Results</h3>
              {/* PRINCIPAL SUBJECT 1*/}
              <div className="form-group row">
                <input type="text" className="form-control col-sm-4" id="principal1" placeholder="Principal Subject 1" />
                <div className="col-sm-8">
                  <select className="form-control" id="uace1">
                    <option>Select Grade</option>
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
                <input type="text" className="form-control col-sm-4" id="principal2" placeholder="Principal Subject 2" />
                <div className="col-sm-8">
                  <select className="form-control" id="uace2">
                    <option>Select Grade</option>
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
                <input type="text" className="form-control col-sm-4" id="principal3" placeholder="Principal Subject 3" />
                <div className="col-sm-8">
                  <select className="form-control" id="uace3">
                    <option>Select Grade</option>
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
              {/* SUBSIDIARY */}
              <div className="form-group row">
                <input type="text" className="form-control col-sm-4" id="subsidiary" placeholder="Subsidiary. e.g Sub Math" />
                <div className="col-sm-8">
                  <select className="form-control" id="subsidiary">
                    <option>Select Grade</option>
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
              {/* UPLOAD UACE PASSLIP */}
              <div className="form-group pt-3">
                <label htmlFor="uploadFile">Upload Scanned UACE Passlip (Optional)</label>
                <input type="file" className="form-control-file" id="uploadFile" />
              </div>
            </div>
            {/* CHOICE OF COURSE / PROFESSION */}
            <label htmlFor="name" className="font-weight-bold">Choice of Course / Profession</label>
            {/* 1ST CHOICE */}
            <div className="form-group row">
              <label htmlFor="course" className="col-sm-4 col-form-label">1st Choice</label>
              <div className="col-sm-8">
                <select className="form-control" id="course">
                  <option>Select</option>
                  <option value="National_Diploma_in_Accountancy">
                    National Diploma in Accountancy
                  </option>
                  <option value="National_Diploma_in_Business_Administration">
                    National Diploma in Business Administration
                  </option>
                  <option value="National_Diploma_in_Marketing">
                    National Diploma in Marketing
                  </option>
                  <option value="National_Diploma_in_Tourism_Management">
                    National Diploma in Tourism Management
                  </option>
                  <option value="National_Diploma_in_Journalism">
                    National Diploma in Journalism
                  </option>
                  <option value="National_Diploma_in_Hotels_&_Institutional_Catering">
                    National Diploma in Hotels &amp; Institutional Catering
                  </option>
                  <option value="National_Diploma_in_Secretarial_Studies">
                    National Diploma in Secretarial Studies
                  </option>
                  <option value="Diploma_in_ECD_Teacher_Education">
                    Diploma in ECD Teacher Education
                  </option>
                  <option value="National_Certificate_in_Accountancy">
                    National Certificate in Accountancy
                  </option>
                  <option value="National_Certificate_in_Business_Administration">
                    National Certificate in Business Administration
                  </option>
                  <option value="National_Certificate_in_Marketing">
                    National Certificate in Marketing
                  </option>
                  <option value="National_Certificate_in_Journalism">
                    National Certificate in Journalism
                  </option>
                  <option value="National_Certificate_in_Tourism_Management">
                    National Certificate in Tourism Management
                  </option>
                  <option value="National_Certificate_in_Hotels_&_Institutional_Catering">
                    National Certificate in Hotels &amp; Institutional Catering
                  </option>
                  <option value="National_Certificate_in_Secretarial_Studies">
                    National Certificate in Secretarial Studies
                  </option>
                  <option value="Certificate_in_ECD_Teacher_Education">
                    Certificate in ECD Teacher Education
                  </option>
                  <option value="National_Diploma_in_Computer_Science">
                    National Diploma in Computer Science
                  </option>
                  <option value="National_Diploma_in_Information_Technology">
                    National Diploma in Information Technology
                  </option>
                  <option value="Diploma_in_Art_&_Design">
                    Diploma in Art &amp; Design
                  </option>
                  <option value="National_Diploma_in_Fashion_Design">
                    National Diploma in Fashion Design
                  </option>
                  <option value="National_Diploma_in_Cosmetology_&_Hair_Dressing">
                    National Diploma in Cosmetology &amp; Hair Dressing
                  </option>
                  <option value="National_Diploma_in_Interior_Design">
                    National Diploma in Interior Design
                  </option>
                  <option value="National_Certificate_in_Computer_Science">
                    National Certificate in Computer Science
                  </option>
                  <option value="National_Certificate_in_Information_&_Communications_Technology">
                    National Certificate in Information &amp; Communications
                    Technology
                  </option>
                  <option value="Certificate_in_Art_&_Design">
                    Certificate in Art &amp; Design
                  </option>
                  <option value="National_Certificate_in_Fashion_&_Design">
                    National Certificate in Fashion &amp; Design
                  </option>
                  <option value="National_Certificate_in_Cosmetology_&_Beauty_Therapy">
                    National Certificate in Cosmetology &amp; Beauty Therapy
                  </option>
                  <option value="National_Diploma_in_Civil_Engineering">
                    National Diploma in Civil Engineering
                  </option>
                  <option value="National_Diploma_in_Electrical_Engineering">
                    National Diploma in Electrical Engineering
                  </option>
                  <option value="National_Diploma_in_Auto-Mobile_Engineering">
                    National Diploma in Auto-Mobile Engineering
                  </option>
                  <option value="National_Diploma_in_Water_Engineering">
                    National Diploma in Water Engineering
                  </option>
                  <option value="National_Certificate_in_Building_&_Construction">
                    National Certificate in Building &amp; Construction
                  </option>
                  <option value="National_Certificate_in_Electrical_Systems_&_Installation">
                    National Certificate in Electrical Systems &amp; Installation
                  </option>
                  <option value="National_Certificate_in_Automotive_Vehicle_Mechanics">
                    National Certificate in Automotive Vehicle Mechanics
                  </option>
                  <option value="National_Certificate_in_Plumbing">
                    National Certificate in Plumbing
                  </option>
                  <option value="National_Certificate_in_Welding">
                    National Certificate in Welding
                  </option>
                </select>
              </div>
            </div>
            {/* 2ND CHOICE */}
            <div className="form-group row">
              <label htmlFor="course" className="col-sm-4 col-form-label">2nd Choice</label>
              <div className="col-sm-8">
                <select className="form-control" id="course">
                  <option>Select</option>
                  <option value="National_Diploma_in_Accountancy">
                    National Diploma in Accountancy
                  </option>
                  <option value="National_Diploma_in_Business_Administration">
                    National Diploma in Business Administration
                  </option>
                  <option value="National_Diploma_in_Marketing">
                    National Diploma in Marketing
                  </option>
                  <option value="National_Diploma_in_Tourism_Management">
                    National Diploma in Tourism Management
                  </option>
                  <option value="National_Diploma_in_Journalism">
                    National Diploma in Journalism
                  </option>
                  <option value="National_Diploma_in_Hotels_&_Institutional_Catering">
                    National Diploma in Hotels &amp; Institutional Catering
                  </option>
                  <option value="National_Diploma_in_Secretarial_Studies">
                    National Diploma in Secretarial Studies
                  </option>
                  <option value="Diploma_in_ECD_Teacher_Education">
                    Diploma in ECD Teacher Education
                  </option>
                  <option value="National_Certificate_in_Accountancy">
                    National Certificate in Accountancy
                  </option>
                  <option value="National_Certificate_in_Business_Administration">
                    National Certificate in Business Administration
                  </option>
                  <option value="National_Certificate_in_Marketing">
                    National Certificate in Marketing
                  </option>
                  <option value="National_Certificate_in_Journalism">
                    National Certificate in Journalism
                  </option>
                  <option value="National_Certificate_in_Tourism_Management">
                    National Certificate in Tourism Management
                  </option>
                  <option value="National_Certificate_in_Hotels_&_Institutional_Catering">
                    National Certificate in Hotels &amp; Institutional Catering
                  </option>
                  <option value="National_Certificate_in_Secretarial_Studies">
                    National Certificate in Secretarial Studies
                  </option>
                  <option value="Certificate_in_ECD_Teacher_Education">
                    Certificate in ECD Teacher Education
                  </option>
                  <option value="National_Diploma_in_Computer_Science">
                    National Diploma in Computer Science
                  </option>
                  <option value="National_Diploma_in_Information_Technology">
                    National Diploma in Information Technology
                  </option>
                  <option value="Diploma_in_Art_&_Design">
                    Diploma in Art &amp; Design
                  </option>
                  <option value="National_Diploma_in_Fashion_Design">
                    National Diploma in Fashion Design
                  </option>
                  <option value="National_Diploma_in_Cosmetology_&_Hair_Dressing">
                    National Diploma in Cosmetology &amp; Hair Dressing
                  </option>
                  <option value="National_Diploma_in_Interior_Design">
                    National Diploma in Interior Design
                  </option>
                  <option value="National_Certificate_in_Computer_Science">
                    National Certificate in Computer Science
                  </option>
                  <option value="National_Certificate_in_Information_&_Communications_Technology">
                    National Certificate in Information &amp; Communications
                    Technology
                  </option>
                  <option value="Certificate_in_Art_&_Design">
                    Certificate in Art &amp; Design
                  </option>
                  <option value="National_Certificate_in_Fashion_&_Design">
                    National Certificate in Fashion &amp; Design
                  </option>
                  <option value="National_Certificate_in_Cosmetology_&_Beauty_Therapy">
                    National Certificate in Cosmetology &amp; Beauty Therapy
                  </option>
                  <option value="National_Diploma_in_Civil_Engineering">
                    National Diploma in Civil Engineering
                  </option>
                  <option value="National_Diploma_in_Electrical_Engineering">
                    National Diploma in Electrical Engineering
                  </option>
                  <option value="National_Diploma_in_Auto-Mobile_Engineering">
                    National Diploma in Auto-Mobile Engineering
                  </option>
                  <option value="National_Diploma_in_Water_Engineering">
                    National Diploma in Water Engineering
                  </option>
                  <option value="National_Certificate_in_Building_&_Construction">
                    National Certificate in Building &amp; Construction
                  </option>
                  <option value="National_Certificate_in_Electrical_Systems_&_Installation">
                    National Certificate in Electrical Systems &amp; Installation
                  </option>
                  <option value="National_Certificate_in_Automotive_Vehicle_Mechanics">
                    National Certificate in Automotive Vehicle Mechanics
                  </option>
                  <option value="National_Certificate_in_Plumbing">
                    National Certificate in Plumbing
                  </option>
                  <option value="National_Certificate_in_Welding">
                    National Certificate in Welding
                  </option>
                </select>
              </div>
            </div>
            {/* THIRD CHOICE */}
            <div className="form-group row">
              <label htmlFor="course" className="col-sm-4 col-form-label">3rd Choice</label>
              <div className="col-sm-8">
                <select className="form-control" id="course">
                  <option>Select</option>
                  <option value="National_Diploma_in_Accountancy">
                    National Diploma in Accountancy
                  </option>
                  <option value="National_Diploma_in_Business_Administration">
                    National Diploma in Business Administration
                  </option>
                  <option value="National_Diploma_in_Marketing">
                    National Diploma in Marketing
                  </option>
                  <option value="National_Diploma_in_Tourism_Management">
                    National Diploma in Tourism Management
                  </option>
                  <option value="National_Diploma_in_Journalism">
                    National Diploma in Journalism
                  </option>
                  <option value="National_Diploma_in_Hotels_&_Institutional_Catering">
                    National Diploma in Hotels &amp; Institutional Catering
                  </option>
                  <option value="National_Diploma_in_Secretarial_Studies">
                    National Diploma in Secretarial Studies
                  </option>
                  <option value="Diploma_in_ECD_Teacher_Education">
                    Diploma in ECD Teacher Education
                  </option>
                  <option value="National_Certificate_in_Accountancy">
                    National Certificate in Accountancy
                  </option>
                  <option value="National_Certificate_in_Business_Administration">
                    National Certificate in Business Administration
                  </option>
                  <option value="National_Certificate_in_Marketing">
                    National Certificate in Marketing
                  </option>
                  <option value="National_Certificate_in_Journalism">
                    National Certificate in Journalism
                  </option>
                  <option value="National_Certificate_in_Tourism_Management">
                    National Certificate in Tourism Management
                  </option>
                  <option value="National_Certificate_in_Hotels_&_Institutional_Catering">
                    National Certificate in Hotels &amp; Institutional Catering
                  </option>
                  <option value="National_Certificate_in_Secretarial_Studies">
                    National Certificate in Secretarial Studies
                  </option>
                  <option value="Certificate_in_ECD_Teacher_Education">
                    Certificate in ECD Teacher Education
                  </option>
                  <option value="National_Diploma_in_Computer_Science">
                    National Diploma in Computer Science
                  </option>
                  <option value="National_Diploma_in_Information_Technology">
                    National Diploma in Information Technology
                  </option>
                  <option value="Diploma_in_Art_&_Design">
                    Diploma in Art &amp; Design
                  </option>
                  <option value="National_Diploma_in_Fashion_Design">
                    National Diploma in Fashion Design
                  </option>
                  <option value="National_Diploma_in_Cosmetology_&_Hair_Dressing">
                    National Diploma in Cosmetology &amp; Hair Dressing
                  </option>
                  <option value="National_Diploma_in_Interior_Design">
                    National Diploma in Interior Design
                  </option>
                  <option value="National_Certificate_in_Computer_Science">
                    National Certificate in Computer Science
                  </option>
                  <option value="National_Certificate_in_Information_&_Communications_Technology">
                    National Certificate in Information &amp; Communications
                    Technology
                  </option>
                  <option value="Certificate_in_Art_&_Design">
                    Certificate in Art &amp; Design
                  </option>
                  <option value="National_Certificate_in_Fashion_&_Design">
                    National Certificate in Fashion &amp; Design
                  </option>
                  <option value="National_Certificate_in_Cosmetology_&_Beauty_Therapy">
                    National Certificate in Cosmetology &amp; Beauty Therapy
                  </option>
                  <option value="National_Diploma_in_Civil_Engineering">
                    National Diploma in Civil Engineering
                  </option>
                  <option value="National_Diploma_in_Electrical_Engineering">
                    National Diploma in Electrical Engineering
                  </option>
                  <option value="National_Diploma_in_Auto-Mobile_Engineering">
                    National Diploma in Auto-Mobile Engineering
                  </option>
                  <option value="National_Diploma_in_Water_Engineering">
                    National Diploma in Water Engineering
                  </option>
                  <option value="National_Certificate_in_Building_&_Construction">
                    National Certificate in Building &amp; Construction
                  </option>
                  <option value="National_Certificate_in_Electrical_Systems_&_Installation">
                    National Certificate in Electrical Systems &amp; Installation
                  </option>
                  <option value="National_Certificate_in_Automotive_Vehicle_Mechanics">
                    National Certificate in Automotive Vehicle Mechanics
                  </option>
                  <option value="National_Certificate_in_Plumbing">
                    National Certificate in Plumbing
                  </option>
                  <option value="National_Certificate_in_Welding">
                    National Certificate in Welding
                  </option>
                </select>
              </div>
            </div>
            {/* PARENTS / GUARDIANS INFORMATION */}
            <label htmlFor="parents" className="font-weight-bold">Parents/Guardians Information (All Students are required to give
              facts on the following)</label>
            {/* NAME OF PARENT / GUARDIAN */}
            <div className="form-group row">
              <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name</label>
              <input type="text" className="form-control col-sm-10" id="parent_fullname" name="parent_fullname" placeholder="Parent/Guardian's Name" />
            </div>
            {/* PARENT / GUARDIAN DATE OF BIRTH */}
            <div className="form-group row">
              <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
              <input type="date" className="form-control col-sm-10" id="parent_dob" name="parent_dob" />
            </div>
            {/* PARENT / GUARDIAN VILLAGE OF BIRTH */}
            <div className="form-group row">
              <label htmlFor="village" className="col-sm-2 col-form-label">Village of Birth</label>
              <input type="text" className="form-control col-sm-10" id="parent_village" name="parent_village" placeholder="Parent/Guardian's Village of Birth" />
            </div>
            {/* PARENT / GUARDIAN SUBSCOUNTY */}
            <div className="form-group row">
              <label htmlFor="subcounty" className="col-sm-2 col-form-label">Subcounty</label>
              <input type="text" className="form-control col-sm-10" id="parent_subcounty" name="parent_subcounty" placeholder="Parent/Guardian's Subcounty" />
            </div>
            {/* PARENT / GUARDIAN DISTRICT */}
            <div className="form-group row">
              <label htmlFor="district" className="col-sm-2 col-form-label">District</label>
              <input type="text" className="form-control col-sm-10" id="parent_district" name="parent_district" placeholder="Parent/Guardian's District" />
            </div>
            {/* PARENT / GUARDIAN NATIONALITY */}
            <div className="form-group row">
              <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
              <input type="text" className="form-control col-sm-10" id="parent_nationality" name="parent_nationality" placeholder="Parent/Guardian's Nationality" />
            </div>
            {/* PARENT / GUARDIAN COUNTRY OF RESIDENCE */}
            <div className="form-group row">
              <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
              <input type="text" className="form-control col-sm-10" id="parent_country" name="parent_country" placeholder="Parent/Guardian's Country of Residence" />
            </div>
            {/* PARENT / GUARDIAN PHONENUMBER */}
            <div className="form-group row">
              <label htmlFor="phonenumber" className="col-sm-2 col-form-label">Phone Number</label>
              <input type="tel" className="form-control col-sm-10" id="parent_phonenumber" name="parent_phonenumber" placeholder="Parent/Guardian's Phone Number" />
            </div>
            {/* <button type="submit" class="btn btn-primary">APPLY NOW</button> */}
            <button type="submit" className="btn btn-success rounded-pill w-100 mt-3">
              APPLY NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

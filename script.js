const app = document.getElementById('app');

let currentUser = null;
let selectedJob = null;
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    shortDesc: "Build UI for modern web apps",
    fullDesc: {
      role: "React Developer",
      package: "10 LPA",
      company: "Tech Innovations",
      skills: "React, JS, CSS, HTML",
    },
  },
  {
    id: 2,
    title: "Backend Engineer",
    shortDesc: "Design scalable APIs",
    fullDesc: {
      role: "Node.js Developer",
      package: "12 LPA",
      company: "Code Masters",
      skills: "Node.js, MongoDB, Express",
    },
  },
  {
    id: 3,
    title: "Full Stack Developer",
    shortDesc: "Design Interactive APIs",
    fullDesc: {
      role: "Junior Web developer",
      package: "6 LPA",
      company: "Innovators",
      skills: "HTML, CSS, JavaScript, SQL",
  }
}
];

function showLoginPage() {
  app.innerHTML = `
    <h2 class="heading">Login</h2>
    <input class="input-field" placeholder="Email or Username" id="loginEmail"/>
    <input class="input-field" placeholder="Password" type="password" id="loginPassword"/>
    <button class="button-primary" onclick="handleLogin()">Login</button>
    <p><a href="#" onclick="showSignupPage()">Create Account</a></p>
  `;
}

function showSignupPage() {
  app.innerHTML = `
    <h2 class="heading">Signup</h2>
    <input class="input-field" placeholder="Email" id="signupEmail"/>
    <input class="input-field" placeholder="Password" type="password" id="signupPassword"/>
    <input class="input-field" placeholder="Confirm Password" type="password" id="signupConfirm"/>
    <button class="button-primary" onclick="handleSignup()">Sign Up</button>
  `;
}

function showJobsList() {
  let html = `<h2 class="heading">Available Jobs</h2>`;
  jobs.forEach(job => {
    html += `
      <div class="job-card">
        <h3 class="job-title">${job.title}</h3>
        <p class="job-desc">${job.shortDesc}</p>
        <button class="button-primary" onclick="showJobDetails(${job.id})">View Details</button>
      </div>
    `;
  });
  app.innerHTML = html;
}

function showJobDetails(jobId) {
  const job = jobs.find(j => j.id === jobId);
  selectedJob = job;
  app.innerHTML = `
    <h2 class="heading">${job.title}</h2>
    <p>Role: ${job.fullDesc.role}</p>
    <p>Package: ${job.fullDesc.package}</p>
    <p>Company: ${job.fullDesc.company}</p>
    <p>Skills Required: ${job.fullDesc.skills}</p>
    <button class="button-primary" onclick="showApplyForm()">Apply Here</button>
  `;
}

function showApplyForm() {
  app.innerHTML = `
    <h2 class="heading">Apply for ${selectedJob.title}</h2>
    <input class="input-field" type="file" />
    <label><input type="checkbox" id="confirm"/> Confirm Application</label>
    <button class="button-primary" onclick="submitApplication()">Apply</button>
  `;
}

function submitApplication() {
  const confirm = document.getElementById("confirm").checked;
  if (!confirm) {
    alert("Please confirm your application.");
    return;
  }

  app.innerHTML = `
    <h2 class="heading">Congratulations!</h2>
    <p>You have successfully applied for the job <strong>${selectedJob.title}</strong>.</p>
    <p>Our team will contact you soon.</p>
  `;
}

function handleLogin() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;
  if (email && pass) {
    currentUser = email;
    showJobsList();
  } else {
    alert("Please enter email and password.");
  }
}

function handleSignup() {
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  if (!email || !pass || !confirm) {
    alert("All fields are required.");
    return;
  }
  if (pass !== confirm) {
    alert("Passwords do not match.");
    return;
  }
  currentUser = email;
  showJobsList();
}

showLoginPage();

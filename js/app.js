/* Personal Information */
const fullName = document.getElementById('fullName');
const cvName = document.getElementById('cvName');
fullName.addEventListener('input', () => {
  cvName.textContent = fullName.value;
  if (fullName.value === '') {
    cvName.textContent = 'Your Name';
  };
  saveToLocalStorage();
});

const jobTitle = document.getElementById('jobTitle');
const cvJob = document.getElementById('cvJobTitle');
jobTitle.addEventListener('input', () => {
  cvJob.textContent = jobTitle.value;
  if (jobTitle.value === '') {
    cvJob.textContent = 'Job Title';
  };
  saveToLocalStorage();
});

const email = document.getElementById('email');
const cvEmail = document.getElementById('cvEmail');
email.addEventListener('input', () => {
  cvEmail.href = 'mailto:' + email.value;
  cvEmail.textContent = email.value;
  if (email.value === '') {
    cvEmail.textContent = 'email@example.com';
    cvEmail.href = '#';
  };
  saveToLocalStorage();
});

const phone = document.getElementById('phone');
const cvPhone = document.getElementById('cvPhone');
phone.addEventListener('input', () => {
  cvPhone.textContent = '+' + phone.value;
  if (phone.value === '') {
    cvPhone.textContent = '+000 00 000 0000';
  };
  saveToLocalStorage();
});

const place = document.getElementById('place');
const cvLocation = document.getElementById('cvLocation');
place.addEventListener('input', () => {
  cvLocation.textContent = place.value;
  if (place.value === '') {
    cvLocation.textContent = 'City, Country';
  };
  saveToLocalStorage();
});

const summary = document.getElementById('summary');
const cvSummary = document.getElementById('cvSummary');
summary.addEventListener('input', () => {
  if (summary.value.length > 100) {
    showToast('Summary must be less than 100 characters');
    summary.value = summary.value.slice(0, 100);
  }
  cvSummary.textContent = summary.value;
  if (summary.value === '') {
    cvSummary.textContent = 'Your professional summary will appear here as you type...';
  }
  saveToLocalStorage();
});

const website = document.getElementById('website');
const cvWebsite = document.getElementById('cvWebsite');
website.addEventListener('input', () => {
  cvWebsite.textContent = website.value;
  cvWebsite.href = website.value.startsWith('http') ? website.value : 'https://' + website.value;
  if (website.value === '') {
    cvWebsite.textContent = 'Website';
    cvWebsite.href = '#';
  }
  saveToLocalStorage();
});

/* Tab Sections */
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const tabSections = document.querySelectorAll('.tab-content');
    tabSections.forEach((section) => {
      section.classList.remove('active');
    });

    document.getElementById('tab-' + button.dataset.tab).classList.add('active');
  });
});

/* Experience Section */
const company = document.querySelector('.company');
company.addEventListener('input', () => {
  const cvCompany = document.querySelector('.cvCompany');
  cvCompany.textContent = company.value;
  if (company.value === '') {
    cvCompany.textContent = 'Company Name';
  };
  saveToLocalStorage();
});

const role = document.querySelector('.role');
role.addEventListener('input', () => {
  const cvRole = document.querySelector('.cvRole');
  cvRole.textContent = role.value;
  if (role.value === '') {
    cvRole.textContent = 'Role / Title';
  }
  saveToLocalStorage();
});

const startDate = document.querySelector('.startDate');
startDate.addEventListener('input', () => {
  const dateValue = startDate.value;
  if (dateValue.length > 7) {
    showToast('Start date cannot be more than 7 characters');
    startDate.value = startDate.value.slice(0, 7);
  }
  const cvStartDate = document.querySelector('.cvStartDate');
  cvStartDate.textContent = startDate.value;
  if (startDate.value === '') {
    cvStartDate.textContent = 'Jan 2022';
  };
  saveToLocalStorage();
});

const endDate = document.querySelector('.endDate');
endDate.addEventListener('input', () => {
  const endDateValue = endDate.value;
  if (endDateValue.length > 7) {
    showToast('End date cannot be more than 7 characters');
    endDate.value = endDate.value.slice(0, 7);
  }
  const cvEndDate = document.querySelector('.cvEndDate');
  cvEndDate.textContent = endDate.value;
  if (endDate.value === '') {
    cvEndDate.textContent = 'Present';
  };
  saveToLocalStorage();
});

const description = document.querySelector('.description');
description.addEventListener('input', () => {
  const descCheck = description.value;
  if (descCheck.length > 300) {
    showToast('Description should not be more than 300 characters');
    description.value = description.value.slice(0, 300);
  };
  const cvDescription = document.querySelector('.cvDescription');
  cvDescription.textContent = description.value;
  if (description.value === '') {
    cvDescription.textContent = 'Your job description will appear here...';
  };
  saveToLocalStorage();
});

/* Mobile Toggle */
const showFormBtn = document.getElementById('showFormBtn');
const showPreviewBtn = document.getElementById('showPreviewBtn');
const formPanel = document.getElementById('formPanel');
const previewPanel = document.getElementById('previewPanel');

showFormBtn.addEventListener('click', function () {
  showFormBtn.classList.add('active');
  showPreviewBtn.classList.remove('active');
  formPanel.classList.remove('hidden');
  previewPanel.classList.remove('visible');
});

showPreviewBtn.addEventListener('click', function () {
  showPreviewBtn.classList.add('active');
  showFormBtn.classList.remove('active');
  previewPanel.classList.add('visible');
  formPanel.classList.add('hidden');
});

/* Education Section */
const university = document.querySelector('.university');
university.addEventListener('input', () => {
  const cvUniversity = document.querySelector('.cvUniversity');
  cvUniversity.textContent = university.value;
  if (university.value === '') {
    cvUniversity.textContent = 'University Name';
  };
  saveToLocalStorage();
});

const degree = document.querySelector('.degree');
degree.addEventListener('input', () => {
  const cvDegree = document.querySelector('.cvDegree');
  cvDegree.textContent = degree.value;
  if (degree.value === '') {
    cvDegree.textContent = 'Degree Name';
  };
  saveToLocalStorage();
});

const startYear = document.querySelector('.startYear');
startYear.addEventListener('input', () => {
  const cvStartYear = document.querySelector('.cvStartYear');
  cvStartYear.textContent = startYear.value;
  if (startYear.value === '') {
    cvStartYear.textContent = '2020';
  }
  saveToLocalStorage();
});

const endYear = document.querySelector('.endYear');
endYear.addEventListener('input', () => {
  const cvEndYear = document.querySelector('.cvEndYear');
  cvEndYear.textContent = endYear.value;
  if (endYear.value === '') {
    cvEndYear.textContent = '2024';
  }
  saveToLocalStorage();
});

/* Skills Section */
const skillInput = document.getElementById('skillInput');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillsTags = document.getElementById('skillsTags');

skillsTags.addEventListener('click', function (event) {
  if (event.target.classList.contains('tag-remove')) {
    const skillName = event.target.closest('.skill-tag').dataset.skill;
    event.target.closest('.skill-tag').remove();

    const cvTags = document.querySelectorAll('.cv-skill-tag');
    cvTags.forEach(function (cvTag) {
      if (cvTag.dataset.skill === skillName) {
        cvTag.remove();
      }
    });
    saveToLocalStorage();
  }
});

addSkillBtn.addEventListener('click', function () {
  const skillValue = skillInput.value;

  if (skillValue === '') {
    showToast('Please enter a skill');
    return;
  }

  const tag = document.createElement('span');
  tag.classList.add('skill-tag');
  tag.dataset.skill = skillValue;
  tag.innerHTML = skillValue + ' <button class="tag-remove">✕</button>';
  skillsTags.appendChild(tag);

  const cvSkillsList = document.getElementById('cvSkillsList');
  const cvTag = document.createElement('span');
  cvTag.classList.add('cv-skill-tag');
  cvTag.dataset.skill = skillValue;
  cvTag.textContent = skillValue;
  cvSkillsList.appendChild(cvTag);

  skillInput.value = '';
  saveToLocalStorage();
});

skillInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addSkillBtn.click();
  }
});

/* Toast Notification */
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

/* Template Switcher */
const templateBtns = document.querySelectorAll('.template-btn');
const cvPreview = document.getElementById('cvPreview');

templateBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    templateBtns.forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    cvPreview.classList.remove('template-classic', 'template-modern', 'template-minimal');
    cvPreview.classList.add('template-' + btn.dataset.template);

    localStorage.setItem('selectedTemplate', btn.dataset.template);
  });
});

/* Load saved template on page load */
const savedTemplate = localStorage.getItem('selectedTemplate');
if (savedTemplate) {
  cvPreview.classList.remove('template-classic', 'template-modern', 'template-minimal');
  cvPreview.classList.add('template-' + savedTemplate);

  templateBtns.forEach(function (btn) {
    btn.classList.remove('active');
    if (btn.dataset.template === savedTemplate) {
      btn.classList.add('active');
    }
  });
}

/* Font Picker */
const headingFont = document.getElementById('headingFont');
const bodyFont = document.getElementById('bodyFont');

headingFont.addEventListener('change', function () {
  cvPreview.style.setProperty('--font-display', headingFont.value);
  saveToLocalStorage();
});

bodyFont.addEventListener('change', function () {
  document.getElementById('cvPreview').style.fontFamily = bodyFont.value;
  saveToLocalStorage();
});

/* Accent Color Picker */
const accentColor = document.getElementById('accentColor');

accentColor.addEventListener('input', function() {
  document.documentElement.style.setProperty('--accent', accentColor.value);
  saveToLocalStorage();
});

document.getElementById('resetColor').addEventListener('click', function() {
  accentColor.value = '#c0392b';
  document.documentElement.style.setProperty('--accent', '#c0392b');
  localStorage.setItem('accentColor', '#c0392b');
});

/* Completeness Score */
function updateCompleteness() {
  const fields = [
    fullName.value,
    jobTitle.value,
    email.value,
    phone.value,
    place.value,
    summary.value,
    website.value,
    company.value,
    role.value,
    startDate.value,
    endDate.value,
    description.value,
    university.value,
    degree.value,
    startYear.value,
    endYear.value,
  ];

  const skills = skillsTags.querySelectorAll('.skill-tag').length > 0 ? 1 : 0;
  const photo = document.getElementById('cvPhoto').querySelector('img') ? 1 : 0;

  const filled = fields.filter(value => value !== '').length + skills + photo;
  const total = fields.length + 2;
  const percentage = Math.round((filled / total) * 100);

  document.getElementById('completenessScore').textContent = percentage + '%';
  document.getElementById('completenessFill').style.width = percentage + '%';
}

/* Download Button */
document.getElementById('downloadBtn').addEventListener('click', function () {
  const element = document.getElementById('cvPreview');
  
  // Temporarily remove box shadow and border radius for clean PDF
  element.style.boxShadow = 'none';
  element.style.borderRadius = '0';

  const options = {
    margin: [10, 10, 10, 10],
    filename: 'clarix-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      logging: false
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  html2pdf().set(options).from(element).save().then(function() {
    // Restore styles after PDF is generated
    element.style.boxShadow = '';
    element.style.borderRadius = '';
  });
});

document.getElementById('newCvBtn').addEventListener('click', function () {
  const toast = document.getElementById('toast');
  toast.innerHTML = `
    <span>Are you sure you want to start a new CV?</span>
    <div style="display:flex; gap:8px; margin-top:10px; justify-content:center;">
      <button id="cancelClear" style="padding:6px 16px; border-radius:4px; border:1px solid #e2e1de; background:white; color:#4a4a6a; cursor:pointer; font-weight:600;">Cancel</button>
      <button id="confirmClear" style="padding:6px 16px; border-radius:4px; border:none; background:#c0392b; color:white; cursor:pointer; font-weight:600;">Yes, clear</button>
    </div>
  `;
  toast.classList.add('show');

  document.getElementById('confirmClear').addEventListener('click', function () {
    localStorage.clear();
    location.reload();
  });

  document.getElementById('cancelClear').addEventListener('click', function () {
    toast.classList.remove('show');
    toast.innerHTML = '';
  });
});

/* Save to localStorage */
function saveToLocalStorage() {
  localStorage.setItem('fullName', fullName.value);
  localStorage.setItem('jobTitle', jobTitle.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('phone', phone.value);
  localStorage.setItem('place', place.value);
  localStorage.setItem('summary', summary.value);
  localStorage.setItem('company', company.value);
  localStorage.setItem('role', role.value);
  localStorage.setItem('startDate', startDate.value);
  localStorage.setItem('endDate', endDate.value);
  localStorage.setItem('description', description.value);
  localStorage.setItem('university', university.value);
  localStorage.setItem('degree', degree.value);
  localStorage.setItem('startYear', startYear.value);
  localStorage.setItem('endYear', endYear.value);
  localStorage.setItem('website', website.value);
  localStorage.setItem('headingFont', headingFont.value);
  localStorage.setItem('bodyFont', bodyFont.value);
  localStorage.setItem('skills', JSON.stringify(Array.from(skillsTags.querySelectorAll('.skill-tag')).map(tag => tag.dataset.skill)));
  localStorage.setItem('accentColor', accentColor.value);
  updateCompleteness();
}

/* Load from localStorage */
function loadFromLocalStorage() {
  if (localStorage.getItem('fullName')) {
    fullName.value = localStorage.getItem('fullName');
    cvName.textContent = fullName.value;
  }
  if (localStorage.getItem('jobTitle')) {
    jobTitle.value = localStorage.getItem('jobTitle');
    cvJob.textContent = jobTitle.value;
  }
  if (localStorage.getItem('email')) {
    email.value = localStorage.getItem('email');
    cvEmail.textContent = email.value;
    cvEmail.href = 'mailto:' + email.value;
  }
  if (localStorage.getItem('phone')) {
    phone.value = localStorage.getItem('phone');
    cvPhone.textContent = '+' + phone.value;
  }
  if (localStorage.getItem('place')) {
    place.value = localStorage.getItem('place');
    cvLocation.textContent = place.value;
  }
  if (localStorage.getItem('summary')) {
    summary.value = localStorage.getItem('summary');
    cvSummary.textContent = summary.value;
  }
  if (localStorage.getItem('website')) {
    website.value = localStorage.getItem('website');
    cvWebsite.textContent = website.value;
    cvWebsite.href = website.value.startsWith('http') ? website.value : 'https://' + website.value;
  }
  if (localStorage.getItem('company')) {
    company.value = localStorage.getItem('company');
    document.querySelector('.cvCompany').textContent = company.value;
  }
  if (localStorage.getItem('role')) {
    role.value = localStorage.getItem('role');
    document.querySelector('.cvRole').textContent = role.value;
  }
  if (localStorage.getItem('startDate')) {
    startDate.value = localStorage.getItem('startDate');
    document.querySelector('.cvStartDate').textContent = startDate.value;
  }
  if (localStorage.getItem('endDate')) {
    endDate.value = localStorage.getItem('endDate');
    document.querySelector('.cvEndDate').textContent = endDate.value;
  }
  if (localStorage.getItem('description')) {
    description.value = localStorage.getItem('description');
    document.querySelector('.cvDescription').textContent = description.value;
  }
  if (localStorage.getItem('university')) {
    university.value = localStorage.getItem('university');
    document.querySelector('.cvUniversity').textContent = university.value;
  }
  if (localStorage.getItem('degree')) {
    degree.value = localStorage.getItem('degree');
    document.querySelector('.cvDegree').textContent = degree.value;
  }
  if (localStorage.getItem('startYear')) {
    startYear.value = localStorage.getItem('startYear');
    document.querySelector('.cvStartYear').textContent = startYear.value;
  }
  if (localStorage.getItem('endYear')) {
    endYear.value = localStorage.getItem('endYear');
    document.querySelector('.cvEndYear').textContent = endYear.value;
  }
  if (localStorage.getItem('headingFont')) {
    headingFont.value = localStorage.getItem('headingFont');
    cvPreview.style.setProperty('--font-display', headingFont.value);
  }
  if (localStorage.getItem('bodyFont')) {
    bodyFont.value = localStorage.getItem('bodyFont');
    document.getElementById('cvPreview').style.fontFamily = bodyFont.value;
  }
  if (localStorage.getItem('email')) {
  email.value = localStorage.getItem('email');
  cvEmail.textContent = email.value;
  cvEmail.href = 'mailto:' + email.value;
  }
  if (localStorage.getItem('accentColor')) {
  accentColor.value = localStorage.getItem('accentColor');
  document.documentElement.style.setProperty('--accent', accentColor.value);
}

  const savedSkills = JSON.parse(localStorage.getItem('skills') || '[]');
  savedSkills.forEach(function (skillName) {
    const tag = document.createElement('span');
    tag.classList.add('skill-tag');
    tag.dataset.skill = skillName;
    tag.innerHTML = skillName + ' <button class="tag-remove">✕</button>';
    skillsTags.appendChild(tag);

    const cvSkillsList = document.getElementById('cvSkillsList');
    const cvTag = document.createElement('span');
    cvTag.classList.add('cv-skill-tag');
    cvTag.dataset.skill = skillName;
    cvTag.textContent = skillName;
    cvSkillsList.appendChild(cvTag);
  });
}

loadFromLocalStorage();
updateCompleteness();
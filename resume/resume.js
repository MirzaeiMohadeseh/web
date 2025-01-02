// Function for creating resume and redirecting to resume display page
function generateResume() {
    // Get form data
    var photo = document.getElementById('photo').value;
    var name = document.getElementById('name').value;
    var profession = document.getElementById('profession').value;
    var location = document.getElementById('location').value;
    var aboutme = document.getElementById('aboutme').value;
    var email = document.getElementById('email').value;
    var github = document.getElementById('github').value;
    var linkedin = document.getElementById('linkedin').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;

    // Store data in localStorage
    localStorage.setItem('resumePhoto', photo);
    localStorage.setItem('resumeName', name);
    localStorage.setItem('resumeProfession', profession);
    localStorage.setItem('resumeLocation', location);
    localStorage.setItem('resumeAboutme', aboutme);
    localStorage.setItem('resumeEmail', email);
    localStorage.setItem('resumeGithub', github);
    localStorage.setItem('resumeLinkedin', linkedin);
    localStorage.setItem('resumePhone', phone);
    localStorage.setItem('resumeEducation', education);
    

    // Redirect to resume display page
    window.location.href = 'show.html';
}

// Function for displaying resume on resume display page
function displayResume() {
    document.getElementById('displayPhoto').textContent = localStorage.getItem('resumePhoto');
    document.getElementById('displayName').textContent = localStorage.getItem('resumeName');
    document.getElementById('displayAboutme').textContent = localStorage.getItem('resumeAboutme');
    document.getElementById('displayProfession').textContent = localStorage.getItem('resumeProfession');
    document.getElementById('displayLocation').textContent = localStorage.getItem('resumeLocation');
    document.getElementById('displayGithub').textContent = localStorage.getItem('resumeGithub');
    document.getElementById('displayLinkedin').textContent = localStorage.getItem('resumeLinkedin');
    document.getElementById('displayEmail').textContent = localStorage.getItem('resumeEmail');
    document.getElementById('displayPhone').textContent = localStorage.getItem('resumePhone');
    document.getElementById('displayEducation').textContent = localStorage.getItem('resumeEducation');

}

// Call displayResume function on resume display page
if (window.location.href.includes('show.html')) {
    displayResume();
}

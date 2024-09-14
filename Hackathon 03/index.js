var _a;
// listing 
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e === null || event === void 0 ? void 0 : event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var cnicElement = document.getElementById('cnic');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var emailElement = document.getElementById('email');
    var giturlElement = document.getElementById('giturl');
    var nationalityElement = document.getElementById('nationality');
    if (nameElement && cnicElement && educationElement && skillsElement && contactElement && addressElement && emailElement && giturlElement && nationalityElement) {
        var name_1 = nameElement.value;
        var cnic = cnicElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var email = emailElement.value;
        var giturl = giturlElement.value;
        var nationality = nationalityElement.value;
        //resume-output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> ".concat(name_1, " </p>\n<p><strong>CNIC:</strong> ").concat(cnic, " </p>\n<p><strong>Education:</strong> ").concat(education, " </p>\n<p><strong>Skills:</strong> ").concat(skills, " </p>\n<p><strong>Contact:</strong> ").concat(contact, " </p>\n<p><strong>Address:</strong> ").concat(address, " </p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n<p><strong>Git URL:</strong> ").concat(giturl, " </p>\n<p><strong>Nationality:</strong> ").concat(nationality, " </p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing.');
        }
    }
    else {
        console.error('one or more output element are missing.');
    }
});

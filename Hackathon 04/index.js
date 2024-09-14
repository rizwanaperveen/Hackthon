var _a;
// listing 
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
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
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> <span id=\"name-edit\" class=\"editable\">".concat(name_1, "</span></p>\n<p><strong>CNIC:</strong> <span id=\"cnic-edit\" class=\"editable\">").concat(cnic, "</span></p>\n<p><strong>Education:</strong> <span id=\"education-edit\" class=\"editable\">").concat(education, "</span></p>\n<p><strong>Skills:</strong> <span id=\"skillls-edit\" class=\"editable\">").concat(skills, "</span></p>\n<p><strong>Contact:</strong> <span id=\"contact-edit\" class=\"editable\">").concat(contact, "</span></p>\n<p><strong>Address:</strong> <span id=\"address-edit\" class=\"editable\">").concat(address, "</span></p>\n<p><strong>Email:</strong> <span id=\"email-edit\" class=\"editable\">").concat(email, "</span></p>\n<p><strong>Git URL:</strong> <span id=\"giturl-edit\" class=\"editable\">").concat(giturl, "</span></p>\n<p><strong>Nationality:</strong> <span id=\"nationality-edit\" class=\"editable\">").concat(nationality, "</span></p>\n");
        //Display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output element are missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

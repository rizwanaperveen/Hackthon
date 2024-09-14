// listing 
document.getElementById("resume")?.addEventListener('submit', function(e) {
    e?.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const cnicElement = document.getElementById('cnic') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const giturlElement = document.getElementById('giturl') as HTMLInputElement;
    const nationalityElement = document.getElementById('nationality') as HTMLInputElement;

if(nameElement && cnicElement && educationElement && skillsElement && contactElement && addressElement &&  emailElement && giturlElement && nationalityElement){
    const name = nameElement.value;
    const cnic = cnicElement.value;
    const education = educationElement.value;
    const skills = skillsElement.value;
    const contact = contactElement.value;
    const address = addressElement.value;
    const email = emailElement.value;
    const giturl = giturlElement.value;
    const nationality = nationalityElement.value;


//resume-output
const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> <span id="name-edit" class="editable">${name}</span></p>
<p><strong>CNIC:</strong> <span id="cnic-edit" class="editable">${cnic}</span></p>
<p><strong>Education:</strong> <span id="education-edit" class="editable">${education}</span></p>
<p><strong>Skills:</strong> <span id="skillls-edit" class="editable">${skills}</span></p>
<p><strong>Contact:</strong> <span id="contact-edit" class="editable">${contact}</span></p>
<p><strong>Address:</strong> <span id="address-edit" class="editable">${address}</span></p>
<p><strong>Email:</strong> <span id="email-edit" class="editable">${email}</span></p>
<p><strong>Git URL:</strong> <span id="giturl-edit" class="editable">${giturl}</span></p>
<p><strong>Nationality:</strong> <span id="nationality-edit" class="editable">${nationality}</span></p>
`;

//Display the resume output
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
      }    
}
else {
     console.error('one or more output element are missing.')
}
}) ;
function makeEditable(){
   const editableElements = document.querySelectorAll('.editable');
editableElements.forEach(element => {
    element.addEventListener('click',function(){
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "" ;

      if(currentElement.tagName === "p" || currentElement.tagName === "span"){
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.classList.add('editing-input')
        
        input.addEventListener('blur',function(){
            currentElement.textContent = input.value;
            currentElement.style.display = 'inline'
            input.remove()
        })
        currentElement.style.display = 'none';
        currentElement.parentNode?.insertBefore(input,currentElement); 
        input.focus()
      }
    })
})
}
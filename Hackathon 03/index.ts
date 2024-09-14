// listing 
 document.getElementById("#resume")?.addEventListener('submit', function(event) {
    event?.preventDefault();

    //type assertion
    const nameElement = document.getElementById('#name') as HTMLInputElement;
    const cnicElement = document.getElementById('#cnic') as HTMLInputElement;
    const educationElement = document.getElementById('#education') as HTMLInputElement;
    const skillsElement = document.getElementById('#skills') as HTMLInputElement;
    const contactElement = document.getElementById('#contact') as HTMLInputElement;
    const addressElement = document.getElementById('#address') as HTMLInputElement;
    const emailElement = document.getElementById('#email') as HTMLInputElement;
    const giturlElement = document.getElementById('#giturl') as HTMLInputElement;
    const nationalityElement = document.getElementById('#nationality') as HTMLInputElement;

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
<p><strong>Name:</strong> ${name} </p>
<p><strong>CNIC:</strong> ${cnic} </p>
<p><strong>Education:</strong> ${education} </p>
<p><strong>Skills:</strong> ${skills} </p>
<p><strong>Contact:</strong> ${contact} </p>
<p><strong>Address:</strong> ${address} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Git URL:</strong> ${giturl} </p>
<p><strong>Nationality:</strong> ${nationality} </p>
`;
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
      }else{
    console.error('the resume output elements are missing.')
} 
}else {
    console.error('one or more output element are missing.')
}
}) ;
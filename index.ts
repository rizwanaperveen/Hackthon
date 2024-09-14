document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //Get form element

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    //Check if all elements are present
    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement){
        //Get values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;

        //Handle profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile): "" ;

        //Generate resume
        const resumeHTML = `
        <h2>Resume</h2>
        ${
            profilePictureURL? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : "" 
        }
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>email:</strong> ${email} </p>
        <p><strong>phone:</strong> ${phone} </p>
        <h3><strong>Education:</strong>
        <p> ${education} </p>
        <h3>Skills</h3>
        <p> ${skills} </p>
        `;
        //display resume in output container
        const resumeOutputElement = document.getElementById('resume-Output');
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");

            //create container for buttons
            const buttonsContainer = document.createElement("div");

            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            //add Download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click",() => {
                window.print(); //open print dialog
            });

            buttonsContainer.appendChild(downloadButton);
            //Add shareable link

            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click",async() => {
                try{
                    //create a unique link
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g,"_")}_cv.html`;

                //use clipboard PDF
                await navigator.clipboard.writeText(shareableLink);
                alert("shareableLink copied");
                }catch(err){
                    console.error("Failed to copy link",err);
                    alert("Failed to copy link");
                }
            });
            buttonsContainer.appendChild(shareLinkButton);
        }else{
            console.error("resume output container not found.");
        }
    }else{
        console.error("Form elements are missing");
    }
});
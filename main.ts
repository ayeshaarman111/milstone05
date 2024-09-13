document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
    const linkBtn = document.getElementById('link-btn') as HTMLButtonElement;
    const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    // Generate Resume
    generateBtn.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Display the resume in the output section
        resumeOutput.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    });

    // Generate Shareable Link
    linkBtn.addEventListener('click', async () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;

        // Create a shareable link (in this case, mock a link)
        const shareableLink = `https://yourdomin.com/resume/${name.replace(/\s+/g, '_')}_cv.html`;

        // Copy the shareable link to the clipboard
        try {
            await navigator.clipboard.writeText(shareableLink);
            alert('Shareable link copied to clipboard: ' + shareableLink);
        } catch (err) {
            console.error('Failed to copy link:', err);
            alert('Failed to copy link. Please try again.');
        }
    });

    // Download Resume
    downloadBtn.addEventListener('click', () => {
        // Use window.print to allow the user to print or save as PDF
        window.print();
    });
});
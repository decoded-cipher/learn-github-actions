const fs = require('fs');

function updateReadme() {
    const readmePath = './README.md';
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');

    console.log(readmeContent);

    // Modify the README content as needed
    const updatedContent = readmeContent + "\n\nThis line was added by the GitHub Action.";

    fs.writeFileSync(readmePath, updatedContent);
}

updateReadme();

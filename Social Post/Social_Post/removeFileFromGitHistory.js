const { exec } = require('child_process');

// Define the path to the sensitive file and the Git commands
const filePath = 'Social Post/Social_Post/node_modules/public-encrypt/test/test_rsa_privkey.pem';

// Git commands to remove the file from history
const gitCommands = `
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch ${filePath}" --prune-empty --tag-name-filter cat -- --all
rm -rf .git/refs/original/
git reflog expire --expire=now --all-ref
git gc --prune=now --aggressive
`;

// Run the Git commands
exec(gitCommands, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
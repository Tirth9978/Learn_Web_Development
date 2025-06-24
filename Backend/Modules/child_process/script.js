const { exec } = require('child_process');

exec('main.exe', (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️ Stderr: ${stderr}`);
        return;
    }
    console.log(`✅ Output:\n${stdout}`);
});

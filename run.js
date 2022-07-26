const { exec } = require('node:child_process');

// run the `ls` command using exec
exec('npm install && npm run run-all -l', (err, output) => {
  // once the command has completed, the callback function is called
  if (err) {
    // log and return if we encounter an error
    console.error('could not execute command: ', err);
    return;
  }
  // log the output received from the command
  console.log('Output: \n', output);
});

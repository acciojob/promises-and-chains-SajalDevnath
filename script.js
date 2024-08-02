document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const age = parseInt(document.getElementById('age').value, 10);
  const name = document.getElementById('name').value;

  // Validation
  if (!age || !name) {
    alert('Both fields are required.');
    return;
  }

  // Promise to handle age validation
  function validateAge(age) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000); // 4 seconds delay
    });
  }

  // Process the form
  validateAge(age)
    .then(message => alert(message))
    .catch(message => alert(message));
});

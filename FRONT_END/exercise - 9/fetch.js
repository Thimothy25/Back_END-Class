//2. Fetch

export const ambilDataUser = () => {
  fetch("https://reqres.in/api/users” ")
    .then((response) => response.json())
    .then((users) => {
      users.data.forEach((user) => {
        console.log(
          `First Name: ${user.first_name}, Last Name: ${user.last_name}`
        );
      });
    })
    .catch((error) => console.error("Error:", error));
};

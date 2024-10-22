//3. Async Await

export const ambilDataUserAsync = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    users.data.forEach((user) => {
      console.log(
        `First Name: ${user.first_name}, Last Name: ${user.last_name}`
      );
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

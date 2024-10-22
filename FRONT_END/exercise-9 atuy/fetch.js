const ambilData = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then(({ data }) => {
      data.forEach(({ first_name, last_name }) => {
        console.log(`${first_name},${last_name}`);
      });
    });
};
ambilData;
export { ambilData };

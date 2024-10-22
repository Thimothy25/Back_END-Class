const ambilData2 = () => {
  axios.get("https://reqres.in/api/users").then((result) => {
    result.data.data.forEach(({ first_name, last_name }) => {
      console.log(`${first_name},${last_name}`);
    });
  });
};
ambilData2();
export { ambilData2 };

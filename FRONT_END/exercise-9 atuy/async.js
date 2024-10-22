const ambilData1 = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();
    data.forEach(({ first_name, last_name }) => {
      console.log(`${first_name}, ${last_name}`);
    });
  } catch (error) {
    console.log("Error fecthing data:", error);
  }
};
ambilData1();
export { ambilData1 };

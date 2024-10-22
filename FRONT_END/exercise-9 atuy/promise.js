const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world");
    }, 2000);
  });
};
const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};
messages();
export { messages };

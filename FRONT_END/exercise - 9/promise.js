//1.Promise

export const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  });
};

export const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

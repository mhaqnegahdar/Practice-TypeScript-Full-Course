const delay = (time: number) => new Promise((res) => setTimeout(res, time));

const mainAsync = async () => {
  await delay(1000);
  console.log("1s");
  await delay(1000);
  console.log("2s");
  await delay(1000);
  console.log("3s");
};

mainAsync();

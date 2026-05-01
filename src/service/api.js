export const getAnimals = async () => {
  const res = await fetch("https://qurbani-hat-server.onrender.com/animals");
  const data = await res.json();
  return data;
};

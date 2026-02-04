const person = {
  name: "강민호",
  age: 22,
};

const personKeys = Object.keys(person);

for (let i = 0; i < personKeys.length; i++) {
  const value = person[personKeys[i]];
  console.log(`밸류=${value}`);
}

const values = Object.values(person);
console.log(values);

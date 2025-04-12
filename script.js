const animals = [
  { name: "Elephant", image: "https://i.imgur.com/LU8zFgz.png" },
  { name: "Lion", image: "https://i.imgur.com/Mv0PcFq.png" },
  { name: "Monkey", image: "https://i.imgur.com/dWfZGyF.png" },
  { name: "Giraffe", image: "https://i.imgur.com/7nm9e1E.png" },
  { name: "Panda", image: "https://i.imgur.com/3mS5WbE.png" },
];

function showAnimal() {
  const randomIndex = Math.floor(Math.random() * animals.length);
  const animal = animals[randomIndex];

  document.getElementById("animal-img").src = animal.image;
  document.getElementById("animal-name").textContent = animal.name;
}

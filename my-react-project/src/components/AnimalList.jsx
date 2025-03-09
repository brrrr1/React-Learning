function AnimalList() {
  const animals = ["Dog", "Cat", "Elephant", "Lion"];

  const HTMLAnimals = animals.map((animal, index) => {
    return <p key={animal}>{index + 1} - {animal}</p>
  });

  return (
    <section>
      <h2>Animals</h2>
      {HTMLAnimals}
    </section>
  );
}

export default AnimalList;
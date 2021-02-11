const { data } = require("./data");

const argsFromCli = process.argv.slice(2);

function formatPeopleOrAnimal(isConcat, acc, formatObj) {
  return isConcat ? acc.concat(formatObj) : acc;
}

function filterByAnimalName(countries, animalName) {
  return countries.reduce((countryAcc, country) => {
    const filteredPeoples = country.people.reduce((peopleAcc, people) => {
      const filteredAnimals = people.animals.filter((animal) =>
        animal.name.includes(animalName) ? animal : false
      );

      return formatPeopleOrAnimal(!!filteredAnimals.length, peopleAcc, {
        ...people,
        animals: filteredAnimals,
      });
    }, []);

    return formatPeopleOrAnimal(!!filteredPeoples.length, countryAcc, {
      ...country,
      people: filteredPeoples,
    });
  }, []);
}

function formatObjWithCountName(parentObj, childField) {
  const totalField = parentObj[childField].length;
  const nameWithChildFieldCount = `${parentObj.name} [${totalField}]`;

  return {
    ...parentObj,
    name: nameWithChildFieldCount,
  };
}

function countPeopleAndAnimals(countries) {
  return countries.map((country) => {
    const peopleWithCount = country.people.map((people) =>
      formatObjWithCountName(people, "animals")
    );
    const countryWithPeopleCounted = { ...country, people: peopleWithCount };
    return formatObjWithCountName(countryWithPeopleCounted, "people");
  });
}

if (!argsFromCli.length && process.env.NODE_ENV != "test") {
  console.log("You have to pass a --count or --filter=[AnimalName] option !");
}

argsFromCli.forEach((arg) => {
  if (arg === "--count") {
    console.log(JSON.stringify(countPeopleAndAnimals(data), null, 2));
  }
  if (arg.includes("--filter")) {
    const filter = arg.split("=")[1];
    console.log(JSON.stringify(filterByAnimalName(data, filter), null, 2));
  }
});

module.exports = {
  formatPeopleOrAnimal,
  filterByAnimalName,
  formatObjWithCountName,
  countPeopleAndAnimals,
};

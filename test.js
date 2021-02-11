const {
  formatPeopleOrAnimal,
  filterByAnimalName,
  formatObjWithCountName,
  countPeopleAndAnimals,
} = require("./app");

describe("App", () => {
  describe("countPeopleAndAnimals(countries)", () => {
    it("Should add count on country and people name", () => {
      const countries = [
        {
          name: "Dillauti",
          people: [
            {
              name: "Winifred Graham",
              animals: [
                { name: "Anoa" },
                { name: "Duck" },
                { name: "Narwhal" },
                { name: "Badger" },
                { name: "Cobra" },
                { name: "Crow" },
              ],
            },
            {
              name: "Blanche Viciani",
              animals: [
                { name: "Barbet" },
                { name: "Rhea" },
                { name: "Snakes" },
                { name: "Antelope" },
                { name: "Echidna" },
                { name: "Crow" },
                { name: "Guinea Fowl" },
                { name: "Deer Mouse" },
              ],
            },
            {
              name: "Philip Murray",
              animals: [
                { name: "Sand Dollar" },
                { name: "Buzzard" },
                { name: "Elephant" },
              ],
            },
          ],
        },
        {
          name: "Satanwi",
          people: [
            {
              name: "Cora Howell",
              animals: [
                { name: "Rhea" },
                { name: "Sponge" },
                { name: "Cat" },
                { name: "African Wild Dog" },
                { name: "Snakes" },
                { name: "Starling" },
                { name: "Pronghorn" },
              ],
            },
            {
              name: "Ernest Conte",
              animals: [
                { name: "Bird" },
                { name: "Colugo" },
                { name: "Grison" },
                { name: "Pot Bellied Pig" },
                { name: "Asian Elephant" },
              ],
            },
          ],
        },
      ];

      const expectedCountries = [
        {
          name: "Dillauti [3]",
          people: [
            {
              name: "Winifred Graham [6]",
              animals: [
                { name: "Anoa" },
                { name: "Duck" },
                { name: "Narwhal" },
                { name: "Badger" },
                { name: "Cobra" },
                { name: "Crow" },
              ],
            },
            {
              name: "Blanche Viciani [8]",
              animals: [
                { name: "Barbet" },
                { name: "Rhea" },
                { name: "Snakes" },
                { name: "Antelope" },
                { name: "Echidna" },
                { name: "Crow" },
                { name: "Guinea Fowl" },
                { name: "Deer Mouse" },
              ],
            },
            {
              name: "Philip Murray [3]",
              animals: [
                { name: "Sand Dollar" },
                { name: "Buzzard" },
                { name: "Elephant" },
              ],
            },
          ],
        },
        {
          name: "Satanwi [2]",
          people: [
            {
              name: "Cora Howell [7]",
              animals: [
                { name: "Rhea" },
                { name: "Sponge" },
                { name: "Cat" },
                { name: "African Wild Dog" },
                { name: "Snakes" },
                { name: "Starling" },
                { name: "Pronghorn" },
              ],
            },
            {
              name: "Ernest Conte [5]",
              animals: [
                { name: "Bird" },
                { name: "Colugo" },
                { name: "Grison" },
                { name: "Pot Bellied Pig" },
                { name: "Asian Elephant" },
              ],
            },
          ],
        },
      ];

      expect(countPeopleAndAnimals(countries)).toEqual(expectedCountries);
    });

    it("Should display country name with [0] when no people inside", () => {
      const countries = [
        {
          name: "Dillauti",
          people: [],
        },
        {
          name: "Satanwi",
          people: [
            {
              name: "Cora Howell",
              animals: [
                { name: "Rhea" },
                { name: "Sponge" },
                { name: "Cat" },
                { name: "African Wild Dog" },
                { name: "Snakes" },
                { name: "Starling" },
                { name: "Pronghorn" },
              ],
            },
            {
              name: "Ernest Conte",
              animals: [
                { name: "Bird" },
                { name: "Colugo" },
                { name: "Grison" },
                { name: "Pot Bellied Pig" },
                { name: "Asian Elephant" },
              ],
            },
          ],
        },
      ];

      const expectedCountries = [
        {
          name: "Dillauti [0]",
          people: [],
        },
        {
          name: "Satanwi [2]",
          people: [
            {
              name: "Cora Howell [7]",
              animals: [
                { name: "Rhea" },
                { name: "Sponge" },
                { name: "Cat" },
                { name: "African Wild Dog" },
                { name: "Snakes" },
                { name: "Starling" },
                { name: "Pronghorn" },
              ],
            },
            {
              name: "Ernest Conte [5]",
              animals: [
                { name: "Bird" },
                { name: "Colugo" },
                { name: "Grison" },
                { name: "Pot Bellied Pig" },
                { name: "Asian Elephant" },
              ],
            },
          ],
        },
      ];

      expect(countPeopleAndAnimals(countries)).toEqual(expectedCountries);
    });

    it("Should display people name with [0] when no animals inside", () => {
      const countries = [
        {
          name: "Dillauti",
          people: [
            {
              name: "Winifred Graham",
              animals: [],
            },
            {
              name: "Blanche Viciani",
              animals: [],
            },
            {
              name: "Philip Murray",
              animals: [
                { name: "Sand Dollar" },
                { name: "Buzzard" },
                { name: "Elephant" },
              ],
            },
          ],
        },
      ];

      const expectedCountries = [
        {
          name: "Dillauti [3]",
          people: [
            {
              name: "Winifred Graham [0]",
              animals: [],
            },
            {
              name: "Blanche Viciani [0]",
              animals: [],
            },
            {
              name: "Philip Murray [3]",
              animals: [
                { name: "Sand Dollar" },
                { name: "Buzzard" },
                { name: "Elephant" },
              ],
            },
          ],
        },
      ];

      expect(countPeopleAndAnimals(countries)).toEqual(expectedCountries);
    });
  });

  describe("formatObjWithCountName(parentObj, childField)", () => {
    it("Should add count to name property, with count representing [childField].length", () => {
      const parentObj = {
        foo: "bar",
        name: "foo",
        animals: ["1", "2"],
      };

      expect(formatObjWithCountName(parentObj, "animals")).toEqual({
        foo: "bar",
        name: "foo [2]",
        animals: ["1", "2"],
      });
    });

    it("Count should be 0, when [childField].length is equal to 0", () => {
      const parentObj = {
        foo: "bar",
        name: "foo",
        animals: [],
      };

      expect(formatObjWithCountName(parentObj, "animals")).toEqual({
        foo: "bar",
        name: "foo [0]",
        animals: [],
      });
    });
  });

  describe("filterByAnimalName(countries, animalName)", () => {
    const countries = [
      {
        name: "Dillauti",
        people: [
          {
            name: "Winifred Graham",
            animals: [
              { name: "Anoa" },
              { name: "Duck" },
              { name: "Narwhal" },
              { name: "Badger" },
              { name: "Cobra" },
              { name: "Crow" },
            ],
          },
          {
            name: "Blanche Viciani",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Snakyes" },
              { name: "Antelope" },
              { name: "Echidna" },
              { name: "Crow" },
              { name: "Guinea Fowl" },
              { name: "Deer Mouse" },
            ],
          },
          {
            name: "Philip Murray",
            animals: [
              { name: "Sand Dollar" },
              { name: "Buzzard" },
              { name: "Elephant" },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Cora Howell",
            animals: [
              { name: "Rhea" },
              { name: "Sponge" },
              { name: "Cat" },
              { name: "African Wild Dog" },
              { name: "Snakes" },
              { name: "Starling" },
              { name: "Pronghorn" },
            ],
          },
          {
            name: "Ernest Conte",
            animals: [
              { name: "Bird" },
              { name: "Colugo" },
              { name: "Grison" },
              { name: "Pot Bellied Pig" },
              { name: "Asian Elephant" },
            ],
          },
        ],
      },
    ];

    it("Should return only animals containing ak filter is their name, with same order", () => {
      expect(filterByAnimalName(countries, "ak")).toEqual([
        {
          name: "Dillauti",
          people: [
            {
              name: "Blanche Viciani",
              animals: [{ name: "Snakes" }, { name: "Snakyes" }],
            },
          ],
        },
        {
          name: "Satanwi",
          people: [
            {
              name: "Cora Howell",
              animals: [{ name: "Snakes" }],
            },
          ],
        },
      ]);
    });

    it("Should return duck when the filter is uc", () => {
      expect(filterByAnimalName(countries, "uc")).toEqual([
        {
          name: "Dillauti",
          people: [{ animals: [{ name: "Duck" }], name: "Winifred Graham" }],
        },
      ]);
    });

    it("Should return an empty array when filter doesn't match anything", () => {
      // Not sure if this special case, match this rule -> Empty array after filtering are NOT returned.
      expect(filterByAnimalName(countries, "azertyui")).toEqual([]);
    });
  });

  describe("formatPeopleOrAnimal(isConcat, acc, formatObj)", () => {
    const acc = [{ foo: "one", bar: "one" }];
    const objToAdd = { foo: "bar", tom: "james" };

    it("Should concat a new object when isConcat is true", () => {
      const format = formatPeopleOrAnimal(true, acc, objToAdd);
      expect(format).toEqual([
        { foo: "one", bar: "one" },
        { foo: "bar", tom: "james" },
      ]);
    });

    it("Should return the acc object when isConcat is false", () => {
      const format = formatPeopleOrAnimal(false, acc, objToAdd);
      expect(format).toEqual([{ foo: "one", bar: "one" }]);
    });
  });
});

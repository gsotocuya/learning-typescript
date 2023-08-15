(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "ironman",
    weapon: "Armorsuit",
  };

  const capitanAmerica: Avenger = {
    name: "capitan america",
    weapon: "escudo",
  };

  const thor: Avenger = {
    name: "thor",
    weapon: "mjolnir",
  };



  const avengers: Avenger[] = [ironman, thor, capitanAmerica]

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon)
  }


})();

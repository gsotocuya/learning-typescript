(()=>{

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert ',
    vision: 'paul bettany',
    activo: true,
    poder: 1500.2121313
  }

  // const {poder, vision} = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase);

  const printAvenger = ({ironman, ...resto}:Avengers) => {

    console.log(ironman, resto);
  };

  printAvenger(avengers);

})()
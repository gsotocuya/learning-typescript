(() => {
    let flash: {name:string, age?:number, powers:string[] }= {
        name : 'Barry Allen',
        age : 24,
        powers : ['Súper velocidad', 'Viajar en el tiempo']
    }
    

    flash ={
        name: 'Clark kent',
      //  age: 60,
        powers: ['Súper fueza'],
        // getNombre(){
        //     return this.name;
        // }
    }

    console.log(flash);
})()
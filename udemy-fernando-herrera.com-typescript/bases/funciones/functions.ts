(() => {

    const hero: string = 'Flash';
    
    function returnName():string{
        return hero;
    }

    const activateBatsignal = ():string =>{
        return 'Bastiseñal acrivado!';
    }

    console.log(typeof activateBatsignal);


    const heroName = returnName();

})()
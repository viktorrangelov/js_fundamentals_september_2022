function inventory(heros) {
    let herosList = [];
    heros.forEach(hero => {
        let heroName = hero.split(' / ')[0];
        let level = Number(hero.split(' / ')[1]);
        let items = hero.split(' / ')[2];
        let newHero = {
            name: heroName,
            level: level,
            items: items
        }
        herosList.push(newHero)
        
    });
    herosList.sort((a,b) => a.level - b.level );
   herosList.forEach(hero => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
   });
   
    
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])
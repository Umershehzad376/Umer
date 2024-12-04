const marval_hero = ["spider", "thor", "ironman"]
const dc_hero = ["superman", "batman", "flash"]

//marval_hero.push(dc_hero)    //       node array2.js


// console.log(marval_hero);


// const all_hero = marval_hero.concat(dc_hero)

// console.log(all_hero);

const all_new_hero = [...marval_hero, ...dc_hero]

// console.log(all_new_hero);
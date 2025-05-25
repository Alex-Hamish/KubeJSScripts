// priority: 0

ServerEvents.recipes(event => { 
    event.shapeless('9x kubejs:diamond_nugget', [
  'minecraft:diamond',
    ])
    event.shapeless('minecraft:diamond', [
  '9x kubejs:diamond_nugget',
    ])
  console.log('Recipes Done') // you can remove this, this is for debug
})
console.info('Hello, World! (Loaded server scripts)')


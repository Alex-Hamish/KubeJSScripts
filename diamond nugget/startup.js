// priority: 0

// Visit the wiki for more info - https://kubejs.com/
StartupEvents.registry('item', e => {
  e.create('diamond_nugget').texture('kubejs:item/diamondnug') 
// This texture would be located at kubejs/assets/kubejs/textures/item/diamondnug
})
console.info('Hello, World! (Loaded startup scripts)')


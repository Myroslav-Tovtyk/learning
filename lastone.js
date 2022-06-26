const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let p of this.potions) {
      if (p.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let p of this.potions) {
      if (p.name === potionName) {
        let i = this.potions.indexOf(p);
        this.potions.splice(i, 1);
        return;
      }
      return `Potion ${potionName} is not in inventory`;
    }
  },
  updatePotionName(oldName, newName) {
    for (let p of this.potions) {
      if (p.name === oldName) {
        let i = this.potions.indexOf(p);
        this.potions.splice(i, 1, newName);
        return;
      }
    }
  },
  // Change code above this line
};

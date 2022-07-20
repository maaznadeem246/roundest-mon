const MAX_DEX_ID = 493;


export const getRandomPokemon : (notThisOne?:number) => number = (notThisOne?: number) => {
    const pokedeskNumber = Math.floor(Math.random() * (MAX_DEX_ID))
    if(pokedeskNumber !== notThisOne) return pokedeskNumber;

    return getRandomPokemon(notThisOne);
}


export const getOptionsForVote = () => {
    const firstId = getRandomPokemon();
    const secondId = getRandomPokemon(firstId)

    return [firstId, secondId];
}
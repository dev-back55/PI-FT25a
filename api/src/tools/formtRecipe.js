function dbRecipe(target){
    if(target.diets){
        const tempss = target.diets;
        const tempToJoin = [];
        tempss.forEach(elem=>{
            tempToJoin.push(elem.name) 
        });
    target.diets = tempToJoin.join(' - ').toUpperCase();
    }
    const newrecipe={
        id: target.id,
        title: target.title,
        image: target.image,
        summary: target.summary,
        aggregateLikes: target.aggregateLikes,
        healthScore: target.healthScore,
        steps: target.steps,
        diets: target.diets
    }        
    return newrecipe
}

module.exports = {
    dbRecipe
}
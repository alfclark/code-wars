function isValidWalk(walk) {
    let northSouth = 0
    let eastWest = 0
    
    if(walk.length === 10){
      for(let i of walk){
        if(i = 'n'){northSouth += 1}
        if(i = 's'){northSouth -= 1}
        if(i = 'e'){eastWest += 1}
        if(i = 'w'){eastWest -= 1}
      }
    }else
    return false
    return northSouth === 0 && eastWest ===0
      
}
   
isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
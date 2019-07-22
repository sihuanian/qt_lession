var minEatingSpeed = function(piles, H = 8) {
    let lo = 1, // min
        hi = Math.max(...piles) // max
        
    while(lo <= hi) {
        // 提前退出
        if (canEatAllBananas(piles, H, lo)) {
            return lo
        }
        lo++
    }

    return lo
}

function canEatAllBananas(piles, H, lo) {
    let h = 0
    for (let pile of piles) {
        h += Math.ceil(pile / lo) // 每一串香焦用时之和
    }
    return h <= H
}

console.log(minEatingSpeed([3, 6, 7, 11]))
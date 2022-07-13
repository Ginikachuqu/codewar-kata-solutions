function enough(cap, on, wait) {
    const canTakeWaiting = Math.abs(cap - on - wait)

    if (cap != on && cap - on > wait) {
        return 0
    } else if (cap - on < wait) {
        return canTakeWaiting
    } else {
        return 0
    }

}

console.log(enough(100, 60, 50))
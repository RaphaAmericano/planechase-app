function shuffleArray(arr:any[]){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório entre 0 e i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca os elementos nas posições i e j
    }
    return arr;
}
function moveFirstToLast(arr:any[]){
    if(arr.length <= 1) {
        return arr
    }
    const firstEl = arr.shift()
    arr.push(firstEl)
    return arr
}


export { shuffleArray, moveFirstToLast }
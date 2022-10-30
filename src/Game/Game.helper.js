const handleKnightMoves = (arr, active, fen, row, col) => {
    if(active ? fen?.[row+1]?.[col+2] !== fen?.[row+1]?.[col+2]?.toString().toUpperCase() : fen?.[row+1]?.[col+2] !== fen?.[row+1]?.[col+2]?.toString().toLowerCase()){
        arr.push([row+1, col+2]);
    }
    if(active ? fen?.[row+2]?.[col+1] !== fen?.[row+2]?.[col+1]?.toString().toUpperCase() : fen?.[row+2]?.[col+1] !== fen?.[row+2]?.[col+1]?.toString().toLowerCase()){
        arr.push([row+2, col+1]);
    }
    if(active ? fen?.[row-1]?.[col+2] !== fen?.[row-1]?.[col+2]?.toString().toUpperCase() : fen?.[row-1]?.[col+2] !== fen?.[row-1]?.[col+2]?.toString().toLowerCase()){
        arr.push([row-1, col+2]);
    }
    if(active ? fen?.[row-1]?.[col-2] !== fen?.[row-1]?.[col-2]?.toString().toUpperCase() : fen?.[row-1]?.[col-2] !== fen?.[row-1]?.[col-2]?.toString().toLowerCase()){
        arr.push([row-1, col-2]);
    }
    if(active ? fen?.[row-2]?.[col-1] !== fen?.[row-2]?.[col-1]?.toString().toUpperCase() : fen?.[row-2]?.[col-1] !== fen?.[row-2]?.[col-1]?.toString().toLowerCase()){
        arr.push([row-2, col-1]);
    }
    if(active ? fen?.[row-2]?.[col+1] !== fen?.[row-2]?.[col+1]?.toString().toUpperCase() : fen?.[row-2]?.[col+1] !== fen?.[row-2]?.[col+1]?.toString().toLowerCase()){
        arr.push([row-2, col+1]);
    }
    if(active ? fen?.[row+1]?.[col-2] !== fen?.[row+1]?.[col-2]?.toString().toUpperCase() : fen?.[row+1]?.[col-2] !== fen?.[row+1]?.[col-2]?.toString().toLowerCase()){
        arr.push([row+1, col-2]);
    }
    if(active ? fen?.[row+2]?.[col-1] !== fen?.[row+2]?.[col-1]?.toString().toUpperCase() : fen?.[row+2]?.[col-1] !== fen?.[row+2]?.[col-1]?.toString().toLowerCase()){
        arr.push([row+2, col-1]);
    }

    return arr;
}

const handleRookMoves = (arr, active, fen, row, col) => {
    for(let i=row-1; i>=0; i--){
        if(active ? fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toUpperCase() : fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toLowerCase() : fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toUpperCase()) {
            arr.push([i, col]);
            break;
        }
        if(fen?.[i]?.[col] === 0){
            arr.push([i, col]);
        }        
    }

    for(let i=row+1; i<8; i++){
        if(active ? fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toUpperCase() : fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toLowerCase() : fen?.[i]?.[col] === fen?.[i]?.[col]?.toString().toUpperCase()) {
            arr.push([i, col]);
            break;
        }
        if(fen?.[i]?.[col] === 0){
            arr.push([i, col]);
        } 
    }

    for(let j=col-1; j>=0; j--){
        if(active ? fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toUpperCase() : fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toLowerCase() : fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toUpperCase()) {
            arr.push([row, j]);
            break;
        }
        if(fen?.[row]?.[j] === 0){
            arr.push([row, j]);
        }
    }

    for(let j=col+1; j<8; j++){
        if(active ? fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toUpperCase() : fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toLowerCase() : fen?.[row]?.[j] === fen?.[row]?.[j]?.toString().toUpperCase()) {
            arr.push([row, j]);
            break;
        }
        if(fen?.[row]?.[j] === 0){
            arr.push([row, j]);
        }
    }

    return arr;
}

const handleBishopMoves = (arr, active, fen, row, col) => {
    let i=row-1;
    let j=col-1;

    while(i>=0 && j>=0){
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase()) {
            arr.push([i, j]);
            break;
        }
        if(fen?.[i]?.[j] === 0){
            arr.push([i, j]);
        }

        i--;
        j--;
    }

    i=row-1;
    j=col+1;

    while(i>=0 && j<=7){
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase()) {
            arr.push([i, j]);
            break;
        }
        if(fen?.[i]?.[j] === 0){
            arr.push([i, j]);
        }

        i--;
        j++;
    }

    i=row+1;
    j=col-1;

    while(i<=7 && j>=0){
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase()) {
            arr.push([i, j]);
            break;
        }
        if(fen?.[i]?.[j] === 0){
            arr.push([i, j]);
        }

        i++;
        j--;
    }

    i=row+1;
    j=col+1;

    while(i<=7 && j<=7){
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase()) {
            break;
        }
        if(active ? fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toLowerCase() : fen?.[i]?.[j] === fen?.[i]?.[j]?.toString().toUpperCase()) {
            arr.push([i, j]);
            break;
        }
        if(fen?.[i]?.[j] === 0){
            arr.push([i, j]);
        }

        i++;
        j++;
    }
    return arr;
}

const handlePawnMoves = (arr, active, fen, row, col) => {
    if(active == true) { 
        if(fen?.[row-1]?.[col-1] === fen?.[row-1]?.[col-1]?.toString().toLowerCase()){
            arr.push([row-1, col-1]);
        }
        if(fen?.[row-1]?.[col+1] === fen?.[row-1]?.[col+1]?.toString().toLowerCase()){
            arr.push([row-1, col+1]);
        }
        if(fen?.[row-1]?.[col] === 0){
            arr.push([row-1, col]);
        }
        if(row === 6 && fen?.[row-2]?.[col] === 0 && fen?.[row-1]?.[col] === 0){
            arr.push([row-2, col]);
        }        
    }

    else {
        if(fen?.[row+1]?.[col-1] === fen?.[row+1]?.[col-1]?.toString().toUpperCase()){
            arr.push([row+1, col-1]);
        }
        if(fen?.[row+1]?.[col+1] === fen?.[row+1]?.[col+1]?.toString().toUpperCase()){
            arr.push([row+1, col+1]);
        }
        if(fen?.[row+1]?.[col] === 0){
            arr.push([row+1, col]);
        } 
        if(row === 1 && fen?.[row+2]?.[col] === 0 && fen?.[row+1]?.[col] === 0){
            arr.push([row+2, col]);
        } 
    }

    return arr;
}
export const fenParser = (fen) => {

    var arr=Array(8).fill(0).map(row => new Array(8).fill(0));

    var r=0;
    var c=0;
    
    for(let i=0; i<fen.length; i++){
        if(fen[i]==='/'){
            r++;
            c = 0;
        }else if(fen[i]>=1 && fen[i]<=8){
            c = c + Number(fen[i]);
        }else{
            arr[r][c] = fen[i];
            c++;
        }
    }

    return arr;
}

export const moves = (row=0, col=0, fen, active) => {
    let arr=[];
    arr.push([row, col]);

    if(fen?.[row]?.[col] === 0){
        return arr;
    }

    if(active === true && fen?.[row]?.[col] !== fen?.[row]?.[col]?.toString()?.toUpperCase()) {
        return arr;
    }

    if(active === false && fen?.[row]?.[col] === fen?.[row]?.[col]?.toString()?.toUpperCase()) {
        return arr;
    }

    switch (fen?.[row]?.[col]) {
        case "N":
            arr = handleKnightMoves(arr, active, fen, row, col);
            break;
        case "n":
            arr = handleKnightMoves(arr, active, fen, row, col);
            break;
        case "R":
            arr = handleRookMoves(arr, active, fen, row, col);
            break;
        case "r":
            arr = handleRookMoves(arr, active, fen, row, col);
            break;
        case "B":
            arr = handleBishopMoves(arr, active, fen, row, col);
            break;
        case "b":
            arr = handleBishopMoves(arr, active, fen, row, col);
            break;
        case "Q":
            let m1 = handleBishopMoves(arr, active, fen, row, col);
            const m2 = handleRookMoves(arr, active, fen, row, col);
            arr=m1.concat(m2);
            break;
        case "q":
            let m3 = handleBishopMoves(arr, active, fen, row, col);
            const m4 = handleRookMoves(arr, active, fen, row, col);
            arr=m3.concat(m4);
            break;
        case "P":
            arr=handlePawnMoves(arr, active, fen, row, col);
            break;
        case "p":
            arr=handlePawnMoves(arr, active, fen, row, col);
            break;
    }

    return arr;
}

const M = parseInt(readline());
for (let i = 0; i < M; i++) {
    const N = parseInt(readline());
    if (N % 2 !== 0)
        console.log(N);
    else {
        console.log(N + 1);
    }
}
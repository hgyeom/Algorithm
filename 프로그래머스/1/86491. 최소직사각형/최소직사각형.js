function solution(sizes) {
    let w = 0;
    let h = 0;

    for (const [a, b] of sizes) {
        const big = Math.max(a, b);
        const small = Math.min(a, b);

        w = Math.max(w, big);
        h = Math.max(h, small);
    }

    return w * h;
}
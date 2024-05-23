function solution(a, b) {
    const date = new Date(`2016-${a}-${b}`);

    const day = date.toString().substring(0, 3).toUpperCase();

    return day;
}

solution(5, 24);

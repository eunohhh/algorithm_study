function solution(babbling) {
    let answer = 0;
    const validSounds = ["aya", "ye", "woo", "ma"];

    // 각 단어를 순회하면서 검사합니다.
    babbling.forEach((word, i) => {
        let isValid = true;
        let previousSound = "";

        // 가능한 발음들로 단어를 분할하고 확인합니다.
        while (word.length > 0 && isValid) {
            let found = false;
            // while 문 안에서 유효한 발음 수 만큼 반복
            for (const sound of validSounds) {
                // 주어진 발음이 유효한 발음으로 시작할 경우
                if (word.startsWith(sound)) {
                    // 할 수 있는 이전 발음(저장해 둔 값) 과 주어진 발음이 같으면
                    // 연속된 발음이므로 할 수 없음 > 탈출
                    if (previousSound === sound) {
                        isValid = false;
                        break;
                    }
                    // 연속된 발음이 아니라면 현재 단어에서 유효한 발음을 제거
                    // 유효한 발음으로 시작했고 체크 했으므로 그만큼 slice
                    word = word.slice(sound.length);
                    // 현재 발음을 이전 발음으로 저장
                    previousSound = sound;
                    // 유효한 발음을 찾았음을 표시하고 루프 탈출(찾으면 바로 탈출)
                    found = true;
                    break;
                }
            }
            // 찾지 못했다면 isValid false 로 만들어 while 문 탈출
            if (!found) isValid = false;
        }
        // while 과 for 를 다 돌았는데도 isValid 가 true 면 answer 증가
        if (isValid) answer++;
    });

    return answer;
}

const answer = solution(["yeayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
console.log(answer);

// function solution(babbling) {
//     let answer = 0;
//     // 할 수 있는 발음
//     const validSounds = ["aya", "ye", "woo", "ma"];

//     // 주어진 배열을 기준으로 순회
//     babbling.forEach(word => {
//         let isValid = true;
//         let usedSounds = {};

//         // 할수있는 발음 기준으로 내부에서 또 순회
//         for (const sound of validSounds) {
//             // 주어진 문자열에 할 수 있는 발음이 포함된 경우
//             if (word.includes(sound)) {
//                 // 주어진 문자열에서 할 수 있는 발음의 인덱스 계산
//                 const idx = word.indexOf(sound);
//                 // 임시객체에 할 수 있는 발음(sound)이 이미 있고(같은 할 수 있는 발음이 여러번 나왔으면 바로 종료)
//                 // 역순 탐색의 index 와 같지 않으면 유효하지 않다고 판단하고 for문 종료??? 여기 모르겠습니다
//                 // if (usedSounds[sound] || idx !== word.lastIndexOf(sound)) {
//                 console.log(sound === "ye" && sound + ', ' + idx)
//                 if (idx !== word.lastIndexOf(sound)) {

//                     isValid = false;
//                     return;
//                 }

//                 // 할 수 있는 발음을 공백으로 치환
//                 word = word.replace(sound, " ");
//                 usedSounds[sound] = true;
//             }
//         }

//         // 공백제거 후 길이가 0 이면 할 수 있는 발음으로 취급
//         if (isValid && !word.trim().length) {
//             answer++;
//         }
//     });

//     return answer;
// }

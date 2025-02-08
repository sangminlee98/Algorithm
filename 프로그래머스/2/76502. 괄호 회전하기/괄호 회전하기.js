function isValidGwalho(closedGwalho, map) {
    switch(closedGwalho) {
        case "]":
            if(!map.has("[") || map.get("[") <= 0) return false;
            else {
                map.set("[",map.get("[") - 1);
                return true;
            }
        case ")":
            if(!map.has("(") || map.get("(") <= 0) return false;
            else {
                map.set("(",map.get("(") - 1);
                return true;
            }
        case "}":
            if(!map.has("{") || map.get("{") <= 0) return false;
            else {
                map.set("{",map.get("{") - 1);
                return true;
            }
        default: return false;
    }
}

function rotateGwalho(s) {
    const firstStr = s.substring(0, 1);
    const restStr = s.substring(1);
    return restStr + firstStr;
}

function solution(s) {
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        const gwalhoMap = new Map();
        for(let j = 0; j < s.length; j++) {
            if(s[j] === "[" || s[j] === "(" || s[j] === "{") {
                if(gwalhoMap.has(s[j])) gwalhoMap.set(s[j], gwalhoMap.get(s[j]) + 1);
                else gwalhoMap.set(s[j], 1);
            } else {
                if(!isValidGwalho(s[j], gwalhoMap)) continue;
            }
        }
        if(gwalhoMap.get("[") === 0 && gwalhoMap.get("{") === 0 && gwalhoMap.get("(") === 0) answer++;
        s = rotateGwalho(s);
    }
    return answer;
}



// 1. 올바른 괄호인지 체크하는 함수 isValid
// 2. 괄호를 회전시키는 함수 rotate
// 3. s 길이만큼 반복문 돌며 괄호 체크
// 4. 올바른 괄호 개수 반환
function solution(s)
{
    // stack 생성
    // s 순회
    // 해당 문자열이 스택의 top과 같으면 pop
    // 반복문이 끝났을 때 stack이 비어있으면 1, 아니면 0
    
    const stack = [s[0]];
    
    for(let i = 1; i < s.length; i++) {
        const top = stack[stack.length - 1];
        if(top === s[i]) stack.pop();
        else stack.push(s[i]);
    };
    return stack.length > 0 ? 0 : 1
}
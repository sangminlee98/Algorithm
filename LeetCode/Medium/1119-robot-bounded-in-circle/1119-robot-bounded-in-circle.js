/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    let axis = [0, 0];

    let idx = 3;

    for(let i = 0; i<instructions.length; i++) {
        if(instructions[i] === 'G') {
            axis[0] += dx[idx];    
            axis[1] += dy[idx];    
        } 
        else if (instructions[i] === 'L') {
            idx = (idx+1)%4;
        }
        else {
            idx = (idx+3)%4;
        };
    }

    return (axis[0] === 0 && axis[1] === 0) || idx !== 3;
};


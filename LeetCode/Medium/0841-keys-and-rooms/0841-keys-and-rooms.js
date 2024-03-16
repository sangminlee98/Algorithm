/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const visitedRooms = Array.from({length: rooms.length}, () => false);
  const keys = new Map()
  rooms.map((_, idx) => keys.set(idx, false));
  dfs(rooms, visitedRooms, 0, keys);
  return visitedRooms.filter(visited => !visited).length === 0;
};

const dfs = (rooms, visitedRooms, roomNum, keys) => {
  visitedRooms[roomNum] = true;

  for(let i = 0; i < rooms[roomNum].length; i++) {
    if(!keys.get(rooms[roomNum][i])) {
      keys.set(rooms[roomNum][i], true);
    }
    if(keys.get(rooms[roomNum][i]) && !visitedRooms[rooms[roomNum][i]]) {
      dfs(rooms, visitedRooms, rooms[roomNum][i], keys);
    }
  }
}
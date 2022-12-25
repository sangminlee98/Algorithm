function solution(nums) {
  const maxCnt = nums.length / 2;
  const typeCnt = new Set(nums).size;
  return maxCnt > typeCnt ? typeCnt : maxCnt;
}

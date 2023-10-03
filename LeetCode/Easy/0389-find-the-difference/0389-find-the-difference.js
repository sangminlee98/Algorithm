function findTheDifference (s, t) {
  const sortS = s.split("").sort();
  const sortT = t.split("").sort();

  for(let i = 0; i<t.length; i++) {
    if(sortS[i] !== sortT[i]) return sortT[i];
  }
};


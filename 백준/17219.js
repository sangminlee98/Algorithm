let fs = require("fs");
let [info, ...list] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const siteCnt = +info.split(" ")[0];
const siteList = list.splice(0, siteCnt);
const map = new Map();
siteList.map(site => {
  const siteName = site.split(" ")[0];
  const password = site.split(" ")[1];
  map.set(siteName,password);
});
answer = [];
list.map(site => {
  answer.push(map.get(site));
})
console.log(answer.join("\n"));
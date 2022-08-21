const Queue = require("./createQueue").Queue;
console.log("Queue", Queue);
/**
 * 击鼓传花
 * @param {*} nameList
 * @param {*} num
 */
function passGame(nameList, num) {
  const queue = new Queue(10);
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  console.log("queue.getSize()", queue.getSize());
  while (queue.getSize() > 1) {
    // 查找为num的人从队列中移除，否则重新加入到队列中
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  console.log(queue.getSize());
  console.log(queue.getFront());
  console.log(nameList.indexOf(queue.getFront()));
}
passGame(["a", "b", "c", "d", "e"], 6);

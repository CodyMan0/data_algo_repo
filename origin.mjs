import { Node, LinkedList } from "./linkedList/linkedList.mjs";
import { Stack } from "./stack /stack.mjs";
import { Queue } from "./queue/queue.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();
console.log("======== insertAt");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("======== clear");
list.clear();
list.printAll();

console.log("======== insertLast");
list.insertLast(0);
list.insertLast(2);
list.insertLast(1);
list.printAll();

console.log("======== delete");
list.deleteAt(0);
list.printAll();

console.log("======== deleteLast");
list.deleteLast();
list.printAll();

console.log("======== getNodeAt");
list.insertLast(1);
list.insertLast(2);
list.insertLast(5);
list.insertLast(10);

let secondNode = list.getNodeAt(2);

console.log(secondNode);
list.printAll();

let stack = new Stack();
console.log("======== stack");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("======== 두번째 출력 ");
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());

let queue = new Queue();
console.log("======== queue ");

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.front());
console.log("======== dequeue ");

console.log(queue.isEmpty());

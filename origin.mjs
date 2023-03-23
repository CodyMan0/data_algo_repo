import { Node, LinkedList } from "./linkedList/linkedList.mjs";
import { Stack } from "./stack /stack.mjs";
import { Queue } from "./queue/queue.mjs";
import { Deque } from "./deque/Deque.mjs";
import { HashTable } from "./hashTable/HashTable.mjs";
import { HashSet } from "./hashSet/HashSet.mjs";
import { BinaryTree } from "./tree/binaryTree.mjs";

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

let deque = new Deque();

console.log("======== Deque ");
console.log(`isEmpty ${deque.isEmpty()}`);
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(5);
deque.addFirst(6);
deque.printAll();

console.log("======== remove ");
deque.removeFirst();
deque.printAll();

console.log("======== hashTable ");
let hashTable = new HashTable();
hashTable.set(1, "이운제");
hashTable.set(4, "최진철");
hashTable.set(20, "홍명보");
hashTable.set(16, "송종국");
hashTable.set(22, "박지성");
hashTable.set(21, "최대욱");
hashTable.set(5, "설기현");
hashTable.set(10, "이천수");

console.log(hashTable.get(1));
console.log(hashTable.remove(1));
console.log(hashTable.get(1));

console.log("======== hashSet ");
let hashSet = new HashSet();

console.log(hashSet.isEmpty());

hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);

hashSet.printAll();
console.log(hashSet.isEmpty());

let tree1 = new BinaryTree(1);
let tree2 = new BinaryTree(2);
let tree3 = new BinaryTree(3);
let tree4 = new BinaryTree(4);
let tree5 = new BinaryTree(5);
let tree6 = new BinaryTree(6);
let tree7 = new BinaryTree(7);

tree1.setLeftSubTree(tree2);
tree1.setRightSubTree(tree3);
tree2.setLeftSubTree(tree4);
tree2.setRightSubTree(tree5);
tree3.setLeftSubTree(tree6);
tree3.setRightSubTree(tree7);

console.log("오른쪽 자식", tree1.getRightSubTree());

console.log("전위 순회");
tree1.preOrderTraversal(tree1);

console.log("중위 순회");
tree1.inOrderTraversal(tree1);

console.log("후");
tree1.postOrderTraversal(tree1);

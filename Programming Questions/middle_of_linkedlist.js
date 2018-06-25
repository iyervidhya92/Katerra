function Node(data, next) {
  this.data = data;
  this.next = next;
}            

var n1 = new Node("Hello", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 

// assign a node to the head which functions
// as the entry into our linked list
var head = n3;       

// Write code here

var first = head;
var second = head;


while (first != null && first.next != null) {
  first = first.next.next;   
  second = second.next;
}

return second.data;  
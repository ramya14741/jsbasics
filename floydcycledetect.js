class ListNode{
    constructor(){
        this.value = value;
        this.next = null;
    }
}


function detectCycle(head){
    let slow = head;
    let fast= head; 

    while(fast!== null && fast.next!==null){
        slow = slow.next;
        fast= fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next.next = head.next;

console.log(detectCycle(head)
);

   
/*1 → 2 → 3 → 4 → 5
      ↑         ↓
      ← ← ← ← ←
      */

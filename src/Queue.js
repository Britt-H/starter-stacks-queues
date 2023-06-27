class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(value) {
        const newNode = new Node(value)

        if(this.first) {
            this.last.next = newNode
        } else {
            //set node of queues next point to be the new node
            this.first = newNode        
        }

        //make new node last item in queue
        this.last = newNode
    }

    dequeue() {
        if (this.first) {
            const dequeued = this.first

            //update first pointer to the next node of the dequeue
            this.first = dequeued.next

            //if the dequeued node is the last node in the queue
            //update the last point to point to `null`
            if(dequeued === this.last) {
                this.last = null
            }

            return dequeued.value
        }
    }
}
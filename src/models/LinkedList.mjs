import { defaultEquals } from "../models/util.js";
import { Node } from "./Node.mjs"

export class LinkedList {
    #count
    #head

    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(item) {
        const node = new Node(item)
        let current
        if (this.#head == null) {
            this.#head = node
        } else {
            current = this.#head
            while (current.next != null)
                current = current.next
            current.next = node
        }
        this.#count++
    }

    getElementAt(index) {
        if (index>=0 && index<this.#count) {
            let node = this.#head
            for (let i=0;i<index && node != null; i++)
                node = node.next
            return node
        }
        return undefined
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.#count
    }
    
    toString() {
        if (this.#head == null) {
        return '';
        }
        let objString = `${this.#head.element}`;
        let current = this.#head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
        objString = `${objString},${current.element}`;
        current = current.next;
        }
        return objString;
    }

    indexOf(element) {
        let current = this.#head;
        for (let i = 0; i < this.#count && current != null; i++) {
        if (this.equalsFn(element, current.element)) {
        return i;
        }
        current = current.next;
        }
        return -1;
    }

    removeAt(index) {
        if (index >= 0 && index < this.#count) {
        let current = this.#head;
        if (index === 0) {
        this.#head = current.next;
        } else {
        let previous;
        for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
        }
        previous.next = current.next;
        }
        this.#count--;
        return current.element;
        }
        return undefined;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

}

/**
 * Stacks and queues are both collections of data that abide by LIFO
 * last in first out, stack of papers on a desk
 *
 * queues is like for the ice cream
 *
 *
 *
 * You could use a linked list to create a stack for example. The call stack is also this thingy bob.
 *
 * stacks are uses to manage function invocation , undo and redo etc
 *
 * We can make it anyway we want, we can use an array to build this kinda thing it just has to be lifo
 *
 * const myStack = ["hi", "its", "me"]   // here we can just use pop and push to creat a stack.
 *
 *
 *
 * Theres also a fun idea of creating your own stack using..... our own class
 *
 * basically the same as a linked list but with only pop and push  but use the shift and unshift in the node version because its constant time we add
 * to the begining each time where as if er used the linked list push po we are looking at having to loop through our list to work with the data.
 * As its not array we don't have any of our performance hits.
 *
 *
 *
 * Queue are first in first out, so we could have an array struct and use push and unshift, in our linked list we'd be looking at again
 * shift and push enque push and dequeu (unshift)
 *
 * big o we want this all to be constant time super fast, arrays cause reiteration weher as class variant can be constant so super fast
 *
 */

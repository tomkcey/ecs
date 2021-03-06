### **Entity Component System**

These resources will explain what this pattern is better than I.

- [Wikipedia](https://en.wikipedia.org/wiki/Entity_component_system)
- [Game Programming](http://gameprogrammingpatterns.com/component.html)

#### **Implementing the pub/sub Component functionality**

Components can message other components belonging to the same entity, although it's technically possible to message components belonging to other entities, should you need to.

##### **Publishing**

`pub: (msg: unknown) => void`

The current signature accepts whatever input you wish to give your message. It defaults to a noop (`function noop() {}`) if you don't define a custom one.

It will put that message into the `data` property of a `ComponentCommand` construct, which has the `from` and `data` properties. The `from` property serves to inform the receiver who has sent the message. This is necessary because it's possible for the sender to receive his own message, depending on the implementation.

##### **Subscribing**

`sub: (command: ComponentCommand) => void`

The current signature accepts the `ComponentCommand` construct. It defaults to a noop (`function noop() {}`) if you don't define a custom one.

the `ComponentCommand` has the `from` and `data` properties. The `from` property serves to inform the receiver who has sent the message and the `data` property holds the message that was sent.

##### **Note about pub/sub**

It's possible to implement one but not the other. For example a Component might need to receive messages, but not send any. And vice-versa.

#### **Identifiers**

Components by default uses a generator function to generate an ever-increasing integer identifier. It can be overriden, but the signature of Component `id` is a `number`.

Entities are merely identifiers. Thus, an entity identifier generator is exposed. You can invoke the `generateEntityId()` function to create an ever-increasing integer identifier.

##### **Note about identifiers**

Identifiers are generated by a generator function. If the program restarts, the identifier count will reset to 0, thus providing 1 as the first identifier when invoked.

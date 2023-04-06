---
sidebar_label: "Architecture"
sidebar_position: 2
title: Architecture
---
The Architecture we developed tries to provide a solution to both our Functional and Non-Functional Requirements.

As explained before, all Users/Entities must contain a copy of the state of the Reputation System's network according to the connections and entities they are interested in. They must also be allowed to propagate and verify changes to the network in order to provide eventual consistency.

Information about the state of the Reputation System is stored locally on the user's Terminal. The user's interface was built using Kotlin Android Studio in order to provide a more native feel to the user interface as well as more control. 

All operations between clients are made through a REST API. The RestController was built with the Flask Framework, and all business logic is done in Python. 

Asynchronous Communication is accomplished through the integration of a Publish/Subscribe Message Broker, and communication is carried through a TCP Socket. This broker allows Users/Entities to receive updates on the state of the network from connections they are interested in. A User can subscribe to multiple channels, where each channel corresponds to another User in the network. This way relevant information about the network state can be shared asyncronously and without much congestion. 

The Community's Server also contains its own copy of the Reputation System network through a Redis Database. It also uses this Database as a cache for certain operations.


![alt text](/img/aarchitecture.drawio.svg "Image Title")




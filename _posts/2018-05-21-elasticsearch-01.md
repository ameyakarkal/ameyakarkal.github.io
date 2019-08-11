---
title : Elastic Search
author : Ameya Karkal
description : My journey into learning elastic search using YouTube and PluralSight.
tags: elasticsearch
---
## why
- As part of my full time project WE/I have been using elastic search as the final storage of data. I had in a previous project and other side initiatives used MongoDB back in 2015 but never got the opportunity to work with ES till now.

## setup
- Checkout [https://github.com/ameyakarkal/learn-elasticsearch](https://github.com/ameyakarkal/learn-elasticsearch)

## concepts : 
### node and cluster
 - each server in the cluster is called a node.
 - each node participates in _indexing_ and _searching_
 - each node has unique name
 - each cluster has unique name

### index / type / document
 - collection of similar documents. (similar to a database)
 - index may be made of mutliple types (type is analogous to table)
 - type is a grouping of documents
 - document is the smallest unit of data in elastic search. consists of data stored as JSON. it belongs to a single type on a single index

### shards / replica
> by default ES has 5 shards and 1 replica for each index
 - index can be split across multiple nodes.
   - this helps to parallelize searches
 - replica are copies of the same index hosted on different nodes
   - this helps to make index available inspite of node failures.

---
tags: elasticsearch
---
# Aggregations in elastic search

- Aggr

## Metric aggregations

- single value or multiple values as a result
- you can generate a metric value for the entire Set of data or group your Set into Buckets and have a metric value generated per Bucket.
- each document in the Set is evaluated on the criteria used for grouping the Set into Buckets and then put into a Bucket.

## Matrix aggregation
- this is currently experimental

```
curl -XPOST
```
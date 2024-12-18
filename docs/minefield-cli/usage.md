---
sidebar_position: 1
---

# Minefield CLI

## Query

### Custom Queries

Custom queries allow users to perform complex searches by combining multiple commands. These queries can be used to analyze the relationships between different nodes in the graph.

When running a custom query, there are multiple commands that can be used. For example, the custom command:

```sh
minefield query custom "dependencies library pkg:generic/dep1@1.0.0 and dependencies library pkg:generic/lib-A@1.0.0"
```

This custom command uses the commands "dependencies" and "and".

#### Available Commands

##### dependencies
- **Description**: Retrieves all dependencies of a specified node.
- **Usage**: `dependencies <node_type> <node_name>`
- **Example**: `dependencies library pkg:generic/dep1@1.0.0`

##### dependents
- **Description**: Retrieves all dependents of a specified node.
- **Usage**: `dependents <node_type> <node_name>`
- **Example**: `dependents library pkg:generic/dep1@1.0.0`

##### and
- **Description**: Combines two queries with a logical AND, returning nodes that satisfy both conditions.
- **Usage**: `<query1> and <query2>`
- **Example**: `dependencies library pkg:generic/dep1@1.0.0 and dependencies library pkg:generic/lib-A@1.0.0`

##### or
- **Description**: Combines two queries with a logical OR, returning nodes that satisfy either condition.
- **Usage**: `<query1> or <query2>`
- **Example**: `dependencies library pkg:generic/dep1@1.0.0 or dependencies library pkg:generic/lib-A@1.0.0`

##### xor
- **Description**: Combines two queries with a logical XOR, returning nodes that satisfy one condition but not both.
- **Usage**: `<query1> xor <query2>`
- **Example**: `dependencies library pkg:generic/dep1@1.0.0 xor dependencies library pkg:generic/lib-A@1.0.0`

#### Examples

To find the dependencies shared by `dep1` and `lib-A`, you can use the following custom query:

```sh
minefield query "dependencies library pkg:generic/dep1@1.0.0 and dependencies library pkg:generic/lib-A@1.0.0"
```

This query will return all nodes that are dependencies of both `dep1` and `lib-A`.

#### Flags

--visualize : This flag will visualize the query, by creating a graph of the nodes and edges.

--addr : This flag will specify the port that the visualization will be hosted on.

--max-output: This flag will specify the maximum number of nodes that the query will return.

### Output Query

Output is takes in a node name, and will output the metadata of the node to the terminal or to a file if the --outputdir flag is specified.

#### Usage

```sh
minefield query output <node_name>
```

#### Examples

To output the metadata of the node `pkg:generic/dep1@1.0.0`, you can use the following command:

```sh
minefield query output pkg:generic/dep1@1.0.0
```

This will output the node's name, id, type, and metadata.


#### Flags
--output-file: This flag will specify the file that output will be saved to.


### Globsearch 

The globsearch command is used to search for nodes in the graph that match a given pattern. We can run this query without the cache command, without any impact on performance. 

#### Usage

```sh
minefield query globsearch <pattern>
```

#### Examples

To search for all the noes for the package `dep` you can run `*dep*` with the following command:

```sh
minefield query globsearch "*dep*"  
```

The pattern is a glob pattern, and will match any node that contains the pattern. 

## Leaderboard 

The `leaderboard` command is used to generate a leaderboard of nodes based on a specified query, sorted by the number of nodes returned by the query.

### Custom Leaderboard

To create a custom leaderboard, you can use the `leaderboard custom` command.

#### Usage

```sh
minefield leaderboard custom <query>
```

#### Examples

To create a leaderboard of based on there dependents, you can use the following command:

```sh
minefield leaderboard custom "dependents library"
```

This will generate a leaderboard of nodes based on the number of dependents they have.

We can also sort by the number of circular dependencies a node has.

```sh
minefield leaderboard custom "dependents library and depedencies library"
```

if a node has dependents that are also dependencies, they will pop up on this query, and we will be sorting by the length of the output of the query.

As you can see, this command differs from the 'query' command's script, since we do not a node. This is because we are running this query on every single node, and then sorting them by the length of the output of the query.

This command can only be run after running the cache .

#### Flags
--max-output: This flag will specify the maximum number of nodes that the query will return.

--concurrency: This flag will specify the number of concurrent queries that the leaderboard will run, this is useful for speeding up the query.

--all: shows the queries for each node, instead of the size of the output.


### allKeys 

The `allKeys` command is used to generate a list of all the keys in the graph. This does not need the cache command to be run first, since allKeys does not sort by any value, it just returns all the keys in the graph.

#### Usage

```sh
minefield leaderboard allKeys
```

#### Flags
--max-output: This flag will specify the maximum number of nodes that the query will return.

## Cache

### Usage

```sh
minefield cache
```

### Flags
--clear : This flag will clear the cache, removing all cached, but leaving the graph unchanged.


## Ingest 

### SBOM

#### Usage

```sh
minefield ingest sbom <sbom_file or directory>
```

### OSV

#### Load

This command will load the OSV data into a local database without graphing it.
THe data must be in the OSV JSON schema, but it can be in a directory, a single file, or a zip file.

#### Usage

```sh
minefield ingest osv load <osv_file or directory>
```
#### Graph

This command will load the OSV data into the graph, from the local database.

#### Usage

```sh
minefield ingest osv graph
```
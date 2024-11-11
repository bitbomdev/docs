---
sidebar_position: 1
---

# Minefield CLI

For any command, Minefield requires Redis to be running at `localhost:6379`. You can start Redis using:

```sh
make docker-up
```

## Commands

### `minefield start-service`

Starts the Minefield API server, which is required for many operations.

### `minefield query custom <query>`

Executes complex searches by combining multiple commands to analyze relationships between nodes in the graph.

Example:
```sh
minefield query custom "dependencies library pkg:generic/dep1@1.0.0 and dependencies library pkg:generic/lib-A@1.0.0"
```

Available operators:
- `dependencies`: Retrieves all dependencies of a node
- `dependents`: Retrieves all dependents of a node
- `and`: Combines queries with logical AND
- `or`: Combines queries with logical OR
- `xor`: Combines queries with logical XOR

Flags:
- `--visualize`: Creates a graph visualization
- `--addr`: Specifies visualization port
- `--max-output`: Limits number of returned nodes
- `--save-query`: Saves query to file

### `minefield query output <node_name>`

Outputs metadata of a specified node to terminal or file.

Example:
```sh
minefield query output pkg:generic/dep1@1.0.0
```

Flags:
- `--output-file`: Specifies output file location

### `minefield query globsearch <pattern>`

Searches for nodes matching a glob pattern. Can be run without cache.

Flags:
- `--max-output`: Limits number of results
- `--save-query`: Saves query to file

Example:
```sh
minefield query globsearch "*dep*"
```

### `minefield leaderboard custom <query>`

Generates a sorted leaderboard of nodes based on query results. Requires cache to be run first.

Flags:
- `--max-output`: Limits number of results
- `--concurrency`: Sets number of concurrent queries
- `--all`: Shows full queries instead of just sizes
- `--save-query`: Saves query to file

Example:
```sh
minefield leaderboard custom "dependents library pkg:generic/dep1@1.0.0"
```

### `minefield leaderboard allKeys`

Lists all keys in the graph. No cache required.

Flags:
- `--max-output`: Limits number of results
- `--save-query`: Saves query to file

### `minefield cache`

Builds an index of graph data for faster queries. Required before using custom leaderboards.

Flags:
- `--clear`: Removes cached data while preserving graph

### `minefield ingest sbom <file_or_directory>`

Ingests SBOM data into the graph.

### `minefield ingest osv load <file_or_directory>`

Loads [OSV](https://google.github.io/osv.dev/data/#data-dumps) data into local database. Accepts JSON files, directories, or zip files.

### `minefield ingest osv graph`

Loads [OSV](https://google.github.io/osv.dev/data/#data-dumps) data from local database into the graph.

### `minefield ingest scorecard load <file_or_directory>`

Loads [OpenSSF Scorecard](https://github.com/ossf/scorecard) data into local database. Accepts JSON files, directories, or zip files.

### `minefield ingest scorecard graph`

Loads [OpenSSF Scorecard](https://github.com/ossf/scorecard) data from local database into the graph.


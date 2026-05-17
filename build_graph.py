import json
from graphify.graphify import build_graph
from pathlib import Path

# Build the complete graph
result = build_graph(Path('.'))
print(f'Graph built: {len(result.get("nodes", []))} nodes, {len(result.get("edges", []))} edges')
print('Output saved to graphify-out/')

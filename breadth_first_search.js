const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];
graph.g = [];

function breadthFirstSearch(graph, start, end) {
	let queue = [];
	const searched = new Set();

	queue.push(start);

	while (queue.length) {
		const current = queue.shift();
		if (searched.has(current)) continue;

		if (graph[current].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}

		searched.add(current);
	}

	return false;
}

console.log(breadthFirstSearch(graph, 'a', 'g'));
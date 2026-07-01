function canFinish(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;

    while (queue.length > 0) {
        let current = queue.shift();
        completed++;

        for (let next of graph[current]) {
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }


    return completed === numCourses;
}
console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
console.log(canFinish(4, [[1,0],[2,1],[3,2]])); // true
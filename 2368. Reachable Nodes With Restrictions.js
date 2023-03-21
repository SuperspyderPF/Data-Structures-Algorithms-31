var reachableNodes = function (n, edges, restricted) {
    const restrictedConfig = (function () {
        const config = {};
        for (const iterator of restricted) {
            config[iterator] = true;
        }
        return config;
    })();
    const config = {};
    for (const [from, to] of edges) {
        if (!config[from]) {
            config[from] = {};
        }
        if (!config[to]) {
            config[to] = {};
        }
        config[from][to] = true;
        config[to][from] = true;
    }
    const visited = {};
    function visit(from) {
        if (restrictedConfig[from]) {
            return;
        }
        if (visited[from]) {
            return;
        }
        visited[from] = true;
        for (const key in config[from]) {
            visit(key);
        }
    }
    visit((from = 0));

    return Object.keys(visited).length;
};
function solution(tickets) {
  let routes = [];

  DFS = (extra, current, route) => {
    if (extra.length === 0) {
      routes.push(route);
    } else {
      extra.forEach(([from, to], index) => {
        if (current === from) {
          const newExtra = extra.slice();
          newExtra.splice(index, 1);
          DFS(newExtra, to, route.concat(to));
        }
      });
    }
  };

  DFS(tickets, "ICN", ["ICN"]);
  return routes.sort()[0];
}

function solution(tickets) {
    tickets.sort();
    let startNode = "ICN";
    let prevNode = "";
    let count = 0;
    let tickets_length = tickets.length;
    let route = ["ICN"];
    function dfs(startNode){
        for(t in tickets){
            if(tickets[t][0] === startNode){
                prevNode = startNode;
                startNode = tickets[t][1];
                route.push(startNode);
                tickets[t] = [null,null];
                break;
            }
        }
        count ++;
        if(count === tickets_length){
            return;
        }
        dfs(startNode);
    }
    dfs(startNode);
    return route;
}
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
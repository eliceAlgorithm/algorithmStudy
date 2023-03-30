import sys
from collections import deque


def BFS(V):
    queue = deque([V])
    visited_BFS[V] = 1
    count = 0
    while queue:
        V = queue.popleft()
        for i in range(computerCount):
            if linkedList[V][i] == 1 and visited_BFS[i] == 0:
                queue.append(i) # JS에서의 push
                visited_BFS[i] = 1
                count += 1
    print(count)


computerCount = int(input())  # 컴퓨터 수
link = int(input())  # 간선의 개수

linkedList = [[0 for _ in range(computerCount)]
              for _ in range(computerCount)]

visited_BFS = [0] * (computerCount)

for i in range(link):
    x, y = map(int, sys.stdin.readline().split())
    linkedList[x-1][y-1] = linkedList[y-1][x-1] = 1

BFS(0)

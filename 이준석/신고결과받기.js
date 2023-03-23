function solution(id_list, report, k) {
  // 인원 수 크키의 빈배열 생성 후 전체 0으로 할당
  // 생성 이유: 인원의 신고당한 수 를 해당 자리에 할당 예정
  const answer = new Array(id_list.length).fill(0);
  // Map객체 생성
  const reports = new Map();
  // 위에 생성한 Map객체에
  for (let r of report) {
    // 신고자와 피신고자 배열
    // "muzi frodo" => [muzi, frodo]
    const [from, to] = r.split(" ");
    // reports(Map객체)에 피신고자가 없을 때 생성
    if (!reports.has(to)) {
      // [피신고자, Set{신고자}] 의 형태
      reports.set(to, new Set());
    }
    // reports(Map객체)에 피신고자가 있을 때 Set객체에 신고자 이름 추가
    reports.get(to).add(from);
  }
  //  첫번째 테스트 케이스 경우
  //  console.log(reports)
  //  Map(3) {
  //    'frodo' => Set(2) { 'muzi', 'apeach' },
  //    'neo' => Set(2) { 'frodo', 'muzi' },
  //    'muzi' => Set(1) { 'apeach' }
  //  }
  //   피신고자 => {신고자, 신고자}의 형태로 확인할 수 있다.

  for (let [to, senders] of reports) {
    // 정지당한 사람 찾기 (자신을 신고한 사람이 k명 이상일 경우)
    if (senders.size >= k) {
      for (let s of senders) {
        // 신고한 사람들의 자리에 1증가
        answer[id_list.indexOf(s)] += 1;
      }
    }
  }
  return answer;
}

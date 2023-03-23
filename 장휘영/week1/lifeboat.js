function solution(people, limit) {
  let lt =0
   let rt = people.length-1;
  const p = people.sort((a,b)=>a-b)
  let ans = 0
  while (lt<=rt){
    if (lt===rt){
      ans+=1
      break
    }
    else if (p[lt]+p[rt]<=limit){
      ans+=1
      lt+=1
      rt-=1
    }else{
      ans+=1
      rt-=1
    }
    
  }
  return ans

}
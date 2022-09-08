const k = 3;
const a = [ -2, -1, 0, 1, 2];

function angryProfessor(k, a) {
  // Write your code here
  let studentsOnTime = 0;
  a.forEach((el) => {
      if(el <= 0) {
          studentsOnTime += 1;
      }
      
  })

  return (studentsOnTime >= k) ? "NO" : "YES";

}
console.log(angryProfessor(k,a));
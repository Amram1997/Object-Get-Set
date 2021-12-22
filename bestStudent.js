function getBestStudent(obj) {
    let state = 0;
    let studentName = "";
    for (let student in obj) {
      const result = obj[student].reduce((aggr, val) => aggr + val) / obj[student].length;
      if (result > state) {
        studentName = student;
        state = result;
      }
    }
    return studentName;
  }
  console.log(
    getBestStudent({
      John: [100, 90, 80],
      Bob: [100, 70, 80],
    })
  )
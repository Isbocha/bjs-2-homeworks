function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks !== undefined) {
      this.marks.push(...marksToAdd);
    } 
  }
  Student.prototype.getAverage = function () {
    if (this.marks.length === 0) {
      return 0;
    } else {
      let result = this.marks.reduce((age, item, index, acc) => {
        age += item;
        if (index === acc.length - 1) {
          return age / acc.length;
        }
        return age;
      }, 0);
  
      return result
    }
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
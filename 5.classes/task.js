class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(state) {
      if (state <= 0) {
        this._state = 0;
      } else if (state >= 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      let book = this.books.find(book => book[type] === value);
      if (!book) {
        return null;
      }
      else {
  
        return book
      }
    }
  
    giveBookByName(bookName) {
      let book = this.books.find((book) => book.name === bookName);
      if (!book) {
        return null;
      } else {
        this.books.splice(this.books.indexOf(bookName));
        return book;
      }
    }

}

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (typeof mark !== "number" || mark < 2 || mark > 5) {
        console.log("Допустимое только значение оценки от 2 до 5 включительно");
      } else {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
          this.marks[subject].push(mark);
        } else {
          this.marks[subject].push(mark);
        }
      }
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject] || this.marks[subject].length === 0) {
        // console.log(0);
        return 0;
      } else {
        let sum = this.marks[subject].reduce((acc, item) => acc += item);
        let result = sum / this.marks[subject].length;
        // console.log(result);
        return result;
      }
    }
  
    getAverage() {
      if (!Object.keys(this.marks).length) {
        // console.log("cредний балл не найден");
        return 0;
      } else {
        let sub = Object.keys(this.marks);
        let sum = 0;
        for (let value of sub) {
          sum += this.getAverageBySubject(value);
        }
        // console.log("Средний балл по всем предметам " + sum / sub.length);
        return sum / sub.length;
      }
    }
  }
    

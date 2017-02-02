
import Rx from 'rxjs/Rx';

const app = document.getElementById("app");


const fiveSeconds$ = Rx.Observable.create((observer) => {
  observer.next(2);
  setTimeout(() => {
    observer.next(2);
  }, 1000);
  setTimeout(() => {
    observer.next(10);

  }, 2000);
  setTimeout(() => {
    observer.next(3);
    observer.complete();
  }, 3000);
}).filter(val=>val%2==0);





fiveSeconds$.subscribe({
  next: (val) => {
    console.log(val);
     app.innerHTML += `observer 1 ${val} <br />`;
  },
  err: () => {

  },
  complete: () => {
    const complete = 'COMPLETE!!!';
    app.innerHTML += `${complete}`;
  }
});



fiveSeconds$.subscribe({
  next: (val) => {
    console.log(val);
    app.innerHTML += `observer 2 ${val} <br />`;
  },
  err: () => {

  },
  complete: () => {
    const complete = 'COMPLETE!!!';
    app.innerHTML += `${complete}`;
  }

});


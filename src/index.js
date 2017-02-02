
import Rx from 'rxjs/Rx';

const app = document.getElementById("app");


const fiveSeconds$ = Rx.Observable.interval(1000).take(5);

fiveSeconds$.subscribe({
  next: (val) => {
    console.log(val);
    app.innerHTML+= val+'<br />';
  },
  err: () => {

  },
  complete: () => {
    const complete = 'COMPLETE!!!';
    app.innerHTML+= `${complete}`;
  }

});


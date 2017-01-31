
import Rx from 'rxjs/Rx';

Rx.Observable.of(1,2,3).forEach((value)=> {
  console.log(value);
});

console.log("its works!!");

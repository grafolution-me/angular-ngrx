import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../counter.action'
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    console.log(this.count$);
  }
 
  increment() {
    console.log("hier in click");
    this.store.dispatch(CounterActions.increment());
  }
 
  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
 
  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
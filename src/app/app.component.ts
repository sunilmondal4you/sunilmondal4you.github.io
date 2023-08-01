import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppGlobalState } from './store/appglobal.state';
import { decrement, increment } from './store/counter.reducer';
import { BookItem } from './store/common.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mypage';
  counter:number | undefined;
  bookDetail:BookItem | undefined

  constructor(private state:Store<AppGlobalState>){}

  ngOnInit(): void {
    this.state.subscribe((store)=>{
      this.counter = store.counter;
      this.bookDetail = store.bookState
    })
  }

  increament(){
    this.state.dispatch(increment())
  }

  decreament(){
    this.state.dispatch(decrement())
  }
}

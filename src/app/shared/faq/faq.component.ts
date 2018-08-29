import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromState from '../../state/app.state';
import * as stateActions from '../../state/app.actions';
import { FireFilterPipe } from '../pipes/filters/filter.pipe';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  json$: Observable<any>;
  allData: any [] = [];
  data: any [] = [];
  search: any;

  constructor(
    private store: Store<fromState.state>,
    private filter: FireFilterPipe
  ) { 
    this.json$ = this.store.pipe(select(fromState.getJson)) as Observable<any>;
    this.store.dispatch(new stateActions.Load('/faq'));
  }

  ngOnInit() {
    this.json$.subscribe(res =>{
      if(res != undefined){
        res.json.forEach(element => {
          this.data.push(element);
          this.allData.push(element);
        });
      }
    })
  }

  valuechange(){
    this.data = this.filter.transform(this.allData, this.search);
    console.log(this.data);
  }

}

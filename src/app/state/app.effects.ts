import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { AppService } from '../app.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as jsonAction from './app.actions';


@Injectable()
export class AppEffects {

  constructor(private service: AppService,
              private actions$: Actions) { }

  @Effect()
  loadAcademicYear$: Observable<Action> = this.actions$.pipe(
    ofType(jsonAction.AllJson.Load),
    mergeMap((action: any) =>
      this.service.getJson(action.payload).pipe(
        map(academicYears => (new jsonAction.LoadSuccess(academicYears.json()))),
        catchError(err => of(new jsonAction.LoadFail(err)))
      )
    )
  );
}
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { routerChange } from '../actions';



@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {
  }

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(routerChange),
    map(({ navigateTo, navigationExtras }) => ({ navigateTo, navigationExtras })),
    tap(({ navigateTo, navigationExtras }) => {
      this.router.navigate(navigateTo)
    })
  )
    ;
}
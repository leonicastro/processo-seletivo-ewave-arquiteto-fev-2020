import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


export const routerChange = createAction('[Router] Route Change',
  props<{ navigateTo: any[], navigationExtras: NavigationExtras }>());
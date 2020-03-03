import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import reducers from './reducers';
import effects from './effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }) : [],
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
  ],
  providers: [],
  exports: [
    StoreModule
  ]
})
export class RootStoreModule { }

import { NgModule } from '@angular/core';
import { SocketIoModule } from 'ngx-socket-io';
import { socketIoConfig } from './realtime-config';


@NgModule({
  declarations: [],
  imports: [
    SocketIoModule.forRoot(socketIoConfig)
  ],
  exports: [
    SocketIoModule
  ]
})
export class RealtimeModule { }

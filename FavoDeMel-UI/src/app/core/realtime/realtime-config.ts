import { environment } from '../../../environments/environment';
import { SocketIoConfig } from 'ngx-socket-io';

export const socketIoConfig: SocketIoConfig = {
  url: environment.realtime_url,
  options: {}
};

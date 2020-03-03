import { server } from './app';
const port = parseInt(process.env.PORT || '3000');
server.listen(port, () => {
  console.log(`Server Notifyer running on ${port}`);
});

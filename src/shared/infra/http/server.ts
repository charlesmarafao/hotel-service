/* eslint-disable no-console */
import { app } from './app';

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Running on port 3000');
});

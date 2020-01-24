import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {

  const tron = Reactotron
    .configure() // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())// add all built-in react native plugins
    .use(reactotronSaga())// add all built-in react native plugins
    .connect(); // let's connect!

  tron.clear();
  console.tron = tron;
}

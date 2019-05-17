import TouchableSuccess from './Success';
import TouchableFailure from './Failure';
import withBase from './withBase';

const Success = withBase(TouchableSuccess);
const Failure = withBase(TouchableFailure);

export {Success, Failure};

const log = msg => console.log(msg);

const call = (fn, ...args) => ({ fn, args });
const put = (msg) => ({ msg });

const sendMessage = msg => Promise.resolve('some response');

const handleResponse = response => ({
  type: 'RECEIVED_RESPONSE',
  payload: response
});

const handleError = err => ({
  type: 'IO_ERROR',
  payload: err
});

function* sendMessageSaga(msg) {
  try {
    const response = yield call(sendMessage, msg);
    yield put(handle(response));
  } catch(err) {
    yield put(handleError(err));
  }
}

const iter = sendMessageSaga('Hello, world!');
const step1 = iter.next();

log(step1);

const { value: {fn, args}} = step1;

const step2 = fn(args);

step2.then(log);

// iter.next(simulatedNetworkResponse);

function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }
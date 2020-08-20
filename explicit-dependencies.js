const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// in its own module...
const withLogging = logger => o => Object.assign({}, o, {
  log(text) {
    logger(text)
  }
});

const addConfig = config => o => Object.assign({}, o, {
  get(key) {
    return config[key] == undefined ?
    this.log(`Missing config key: ${key}`) :
    config[key];
  }
});

// in a different module with no explicit mention of
// withLogging -- we just assume it's there...
const withConfig = ({initialConfig, logger}) => o =>
  pipe(
    withLogging(logger),
    addConfig(initialConfig)
  )(o);

// in yet another module that imports withLogging and
// withConfig...
const createConfig = ({ initialConfig, logger}) =>
    withConfig(initialConfig, logger)({});

// elsewhere...
const initialConfig = {
  host: 'localhost'
};

const logger = console.log.bind(console);

const config = createConfig({initialConfig, logger});

console.log(config.get('host')); // 'localhost'
config.get('notThere'); // 'Missing config key: notThere'
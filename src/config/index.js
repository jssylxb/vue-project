const envConfig = require(`./env/${process.env.NODE_ENV}`);

const config = {
    name: 'sunacwy'
};

export default Object.assign(
    config,
    envConfig
);

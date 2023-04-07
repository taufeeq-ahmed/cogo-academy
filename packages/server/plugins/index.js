/* eslint-disable global-require */
const plugins = async (fastify) => {
    fastify.log.info('Registering Plugins');
    await fastify.register(require('./auth-check'));
};

plugins[Symbol.for('skip-override')] = true;
module.exports = plugins;

// const batchAddPlugin = async (fastify) => {
//     await fastify.addHook('preHandler', async (request, reply) => {
//         try {
//             request.batch_id = request.query.batch_id;
//         } catch (err) {
//             console.log(err)
//         }
//     });
//     fastify.log.info('Loaded plugin batch-add');
// };

// batchAddPlugin[Symbol.for('skip-override')] = true;
// module.exports = batchAddPlugin;

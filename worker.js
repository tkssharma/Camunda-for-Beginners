const { Client, logger } = require('camunda-external-task-client-js');

const config = {
    baseUrl: 'http://localhost:8080/engine-rest',
    use: logger, 
    asyncResponseTimeout: 10000
};

const client = new Client(config);

client.subscribe('save-database', async function ({ task, taskService }) {
    const firstName = task.variables.get('firstName');
    const email = task.variables.get('email');
    console.log(task.variables);
    // const age = task.variables.get('age');
    console.log('save-db task')

    await taskService.complete(task);
});

client.subscribe('send-email', async function ({ task, taskService }) {
    const firstName = task.variables.get('firstName');
    const email = task.variables.get('email');
    // const age = task.variables.get('age');
    console.log(task.variables);
    console.log(`firstName: ${firstName}`);
    console.log(`Email: ${email}`);
    console.log('send-email task')
    await taskService.complete(task);
});

client.subscribe('done', async function ({ task, taskService }) {
    const firstName = task.variables.get('firstName');
    const email = task.variables.get('email');
    // const age = task.variables.get('age');
    console.log(task.variables);
    console.log(`firstName: ${firstName}`);
    console.log(`Email: ${email}`);
    console.log('send-email task')
    await taskService.complete(task);
});
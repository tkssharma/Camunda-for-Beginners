const { Client, logger, Variables } = require('camunda-external-task-client-js');

const config = {
    baseUrl: 'http://192.168.29.254:8080/engine-rest',
    use: logger, 
    asyncResponseTimeout: 10000
};

const client = new Client(config);

client.subscribe('check-action', async function ({ task, taskService }) {
  try {
  console.log('handling check-action...')
  const localVariables = new Variables();
  localVariables.set("type", 'holidayCheck');
  await taskService.complete(task, localVariables);
  console.log('done check-action')
  }catch(err){
    console.log(err);
  }

});
client.subscribe('HolidayCheck', async function ({ task, taskService }) {
  console.log('handling HolidayCheck')
  console.log(task.variables.getAll());
  const localVariables = new Variables();
  localVariables.set("isHoliday", 'Yes');
  await taskService.complete(task, localVariables);
  console.log('done HolidayCheck')
});
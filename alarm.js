const schedule = require('node-schedule');
const exec = require('child_process').exec;

console.log('Setting alarm  for you at 5:00 AM...');

// Schedule the alarm for 5:00 AM every day
const rule = new schedule.RecurrenceRule();
rule.hour = 5;
rule.minute = 00;

const alarmJob = schedule.scheduleJob(rule, function() {
  exec('afplay alarm.wav');
  console.log('Wake up and CHECK YOUR TO DO LIST! It is 5:00 AM.');
});


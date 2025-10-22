const EventEmitter = require('events')

const eventEmitter = new EventEmitter();


// Register an event listener
eventEmitter.on('test1', (data) => {
    console.log('Event triggered:', data);
});

eventEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
});

try{
eventEmitter.emit('test1');
eventEmitter.removeListener('test1');
eventEmitter.emit('test1');
} catch(err){
    eventEmitter.emit('error', err);
}

eventEmitter.emit('test1');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong!');
    }, 5000);
});

promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('does this run?');
}).catch ((error) => {
    console.log('error', error);
});


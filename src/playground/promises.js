const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve({
        //     name: 'gb',
        //     afer: 30
        // });
        reject('something went wrong');
    }, 5000);
});

console.log('before');
promise.then((data)=>{    //called only when resolved
    console.log('1' , data);
}).catch((error)=>{
    console.log('error: ' ,error);
});

console.log('after');


console.log('before');
promise.then((data)=>{    //called only when resolved
    console.log('1' , data);
},(error)=>{
    console.log('error: ' ,error);
});

console.log('after');
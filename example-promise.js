/*
function getTempCallback(location,callback) {
  callback(undefined,78);
  callback('City not found');
}

getTempCallback('Philadelphia',function (err,temp) {
  if(err) {
    console.log('error',err);
  } else {
    console.log('success',temp);
  }
});
*/
//用promise的方法
/*
function getTempPromise(location) {
  return new Promise(function(resolve,reject) {
    //when thing go well you can call resolve
    resolve(79);
    //when thing didn't go well
    reject('City not found');
  });
}

getTempPromise('Hong Kong').then(function (temp) {
  console.log('promise success',temp);
},function (err) {
  console.log('promise fail',err);
});
*/

//Test
function addPromise(a,b) {
  return new Promise(function (resolve,reject) {
    if(!isNaN(a) && !isNaN(b)) {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}


addPromise(2,3).then(function (sum) {
  console.log('success',sum);
},function (err) {
  console.log('error',err);
});

addPromise('Evan',3).then(function (sum) {
  console.log('success',sum);
},function (err) {
  console.log('error',err);
});

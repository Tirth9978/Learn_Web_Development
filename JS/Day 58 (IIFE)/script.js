async function sleep() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {

          }, 2000)
          resolve(12);
     })
}




(function () {
     let a = sleep()
     let b = sleep();
     console.log(a)
     console.log(b)
})();
/// <reference lib="webworker" />





addEventListener('message', ({ data }) => {
  console.log('Data in Worker : ', data);
});

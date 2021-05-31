/// <reference lib="webworker" />

console.log('In The Worker');
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

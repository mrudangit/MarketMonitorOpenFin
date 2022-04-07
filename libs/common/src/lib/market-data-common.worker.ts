/// <reference lib="webworker" />

console.log('Common Worker .....');
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

const mockPromise = (index) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(index + 1);
      },
      index % 3 === 0 ? 3000 : 1000
    );
  });

let mockPromises = new Array(12).fill("").map((item, index) => {
  return () => mockPromise(index);
});

const runConcurrentPromises = async (promises, concurrency) => {
  let resolver;
  const p = new Promise((res, rej) => {
    resolver = res;
  });
  const result = { results: [], failures: [] };
  let pending = 0;

  const runPromise = (cb) => {
    pending++;
    cb()
      .then((res) => {
        result.results.push(res);
      })
      .catch((err) => {
        result.results.push(err);
      })
      .finally(() => {
        pending--;
        // chain  another promise if there are more to run
        if (pendingPromises.length) {
          let next = pendingPromises.shift();
          runPromise(next);
        } else if (pending) {
          // do nothing
        } else {
          resolver(result);
        }
      });
  };

  // here we run the initial promises
  const initialPromises = promises.slice(0, concurrency);
  const pendingPromises = promises.slice(concurrency);

  // start of the number of promises that we need
  initialPromises.forEach((p) => {
    runPromise(p);
  });

  return p;
};
(async () => {
  let res = await runConcurrentPromises(mockPromises, 3);
  console.log({ res });
})();

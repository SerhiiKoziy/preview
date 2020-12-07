function secondExample() {
  Promise.resolve().then(secondExample);
}

secondExample();

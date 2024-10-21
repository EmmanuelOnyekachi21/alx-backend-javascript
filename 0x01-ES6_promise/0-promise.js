#!/usr/bin/node
/**
 * Return a Promise using this prototype function getResponseFromAPI()
 */

export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous operation
    resolve('Success');
  });
}

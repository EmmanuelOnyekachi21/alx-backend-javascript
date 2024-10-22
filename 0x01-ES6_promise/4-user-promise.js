// export default function signUpUser(firstName, lastName) {
//   return new Promise((resolve, reject) => {
//     if (firstName != undefined && lastName != undefined) {
//       resolve(
//         {
//           firstName: firstName,
//           lastName: lastName,
//         }
//       )
//     } else {
//       reject(new Error('Not good'))
//     }

//   });
// }

/* A better way of doing the above */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve(
    {
      firstName,
      lastName,
    },
  );
}

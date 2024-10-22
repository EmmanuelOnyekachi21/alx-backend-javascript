// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';

// export default function handleProfileSignup(firstName, lastName, fileName) {
//   const signUpPromise = signUpUser(firstName, lastName);
//   const uploadPromise = uploadPhoto(fileName);

//   // Return a promise that settles all the promises
//   return Promise.allSettled([signUpPromise, uploadPromise])
//     .then((results) => results.map((result) => ({
//       status: result.status,
//       value: result.status === 'fulfilled' ? result.value : result.reason,
//     })));
// }

import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    // Create the promises for sign-up and photo upload
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);
    
    // Use Promise.allSettled to handle both promises
    const results = await Promise.allSettled([signUpPromise, uploadPromise]);
    
    // Map the results to the desired structure
    return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
}

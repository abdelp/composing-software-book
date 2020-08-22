const log = (...arg) => console.log(args);

const readUser = () => Promise.reject(false);
const getFolderInfo = () => Promise.resolve(false);
const haveWriteAccess = () => Promise.resolve(false);
const uploadToFolder = () => Promise.resolve('Success');

const user = '123';
const folder = '456';
const files = ['a', 'b', 'c'];

// async function uploadFiles({user, folder, files}) {
//   const dbUser = await readUser(user);
//   const folderInfo = await getFolderInfo(folder);

//   if (await haveWriteAccess({dbUser, folderInfo})) {
//     return uploadToFolder({dbUser, folderInfo, files});
//   } else {
//     throw new Error("No write access to that folder");
//   }
// }

// uploadFiles({user, folder, files})
// .then(log);

const asyncPipe = (...fns) => x => (
  fns.reduce(async (y, f) => f(await y), x)
);

const uploadFiles = asyncPipe(
  readUser,
  getFolderInfo,
  haveWriteAccess,
  uploadToFolder
);

uploadFiles({user, folder, files})
.then(result => console.log(result));
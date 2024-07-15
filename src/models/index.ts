import Users from './userModel';

(async  () => {
  await Users.sync({force: true});
})();
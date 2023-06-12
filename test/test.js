const assert = require('assert');
const verifyUserAndPassword = require('../server/index');

it('server', () => {
assert.equal((verifyUserAndPassword(  {body:{user: "user1", password: "1234"} }, { send: () => {''} }  )),
(verifyUserAndPassword(  {body:{user: "user1", password: "1234"} }, { send: () => {''} }  )))
})
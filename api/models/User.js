/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      email: {
          type: 'string',
          email: true,
          unique: true,
          required: true
      },
      username: {
          type: 'string',
          unique: true,
          required: true
      },
      password: {
          type: 'string',
          required: true
      },
      state: {
          type: 'string',
          enum: ['new', 'active', 'banned'],
          defaultsTo: 'new'
      }
  }
};


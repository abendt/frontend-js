// @flow

import $ from "jquery";

type User = {
  fullName: string,
  loggedIn: boolean
};

function parseJSON(user): User {
  return {
    fullName: user.firstName + ' ' + user.lastName,
    loggedIn: true,
  };
}

export default function fetchCurrentUser(callback: (User) => void) {
  return $.ajax({
    success: user => callback(parseJSON(user)),
    type: 'GET',
    url: 'http://example.com/currentUser',
  });
}

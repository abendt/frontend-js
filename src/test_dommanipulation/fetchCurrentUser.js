// @flow

import $ from "jquery";

function parseJSON(user) {
  return {
    fullName: user.firstName + ' ' + user.lastName,
    loggedIn: true,
  };
}

export default function fetchCurrentUser(callback: (any) => void) {
  return $.ajax({
    success: user => callback(parseJSON(user)),
    type: 'GET',
    url: 'http://example.com/currentUser',
  });
}

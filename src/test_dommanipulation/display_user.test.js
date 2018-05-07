// @flow

import fetchCurrentUser from './fetchCurrentUser';
import $ from "jquery";

jest.mock('./fetchCurrentUser');

const mock = (mockFn: any) => mockFn;

const assignInnerHtml = (html) => {
  const body: any = document.body;
  body.innerHTML = html;
};

it('displays a user after a click', () => {
  // Set up our document body
  assignInnerHtml(
    '<div>' +
    '  <span id="username" />' +
    '  <button id="button" />' +
    '</div>');

  // This module has a side-effect
  require('./displayUser');

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  mock(fetchCurrentUser).mockImplementation(cb => {
    cb({
      fullName: 'Johnny Cash',
      loggedIn: true,
    });
  });

  // Use jquery to emulate a click on our button
  $('#button').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(fetchCurrentUser).toBeCalled();
  expect($('#username').text()).toEqual('Johnny Cash - Logged In');
});

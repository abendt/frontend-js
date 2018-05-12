// @flow

import * as matchers from 'jest-jquery-matchers';

import $ from "jquery";

const assignInnerHtml = (html) => {
  const body: any = document.body;
  body.innerHTML = html;
};

describe('my suite', () => {
  beforeEach(function () {
    const anyJest: any = jest;
    anyJest.addMatchers(matchers);
  });

  it('can use jest-jquery-matchers', () => {
    // Set up our document body
    assignInnerHtml(
      `<div>
        <div id="username" attr1="value1"/>
        <div id="button" />
        <div class="myclass" />
        <div id="text">MyText</div>
      </div>`);

      expect($('div')).toBeInDom();

      expect($('span')).not.toExist();

      expect($('.myclass')).toHaveLength(1);
      expect($('#username')).toHaveId('username');

      expect($('.myclass')).toHaveClass('myclass');
      expect($('div')).toHaveTag('div');
      expect($('#username')).toHaveAttr("attr1");
      expect($('#username')).toHaveAttr("attr1", "value1");

      expect($('#text')).toHaveText("MyText");
      expect($('#text')).toHaveText(/MyTe.t/);
    });
  });

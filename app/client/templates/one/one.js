"use strict";

import { sayHi } from '../../../imports/client/sayHi';
import { twoLib } from 'meteor/pgpb:two';

Template.oneTemplate.events({
  'click button' : () => {
    console.log('twoLib', twoLib);
    twoLib.makeTwo('from button click');
  }
});

Template.oneTemplate.onCreated(() => {
  console.log('oneTemplateCreated');
  sayHi();
});
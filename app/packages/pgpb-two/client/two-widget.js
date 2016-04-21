import * as twoLib from '../lib/two-lib';

Template.twoWidget.events({
    'click button' : (e) => {
        console.log('twoLib', twoLib);
        twoLib.makeTwo('from button click');
        e.stopPropagation();
    }
});
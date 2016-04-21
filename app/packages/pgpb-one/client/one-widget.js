import { twoLib } from 'meteor/pgpb:two';

Template.oneWidget.events({
    'click button' : (e) => {
        console.log('twoLib', twoLib);
        twoLib.makeTwo('from oneWidget: button click');
        e.stopPropagation();
    }
});
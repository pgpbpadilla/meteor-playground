import '../imports/hello/myapp.html';
import '../imports/hello/myapp.css';
import * as myApp from '../imports/hello/myapp.js';

myApp.setupTemplates(Meteor, Session, Template);

console.log('Client Started!!!!');

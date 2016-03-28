import { sayHi } from '../../../imports/client/sayHi';

Template.oneTemplate.onCreated(() => {
  console.log('oneTemplateCreated');
  sayHi();
});
/*****************************************************************************/

import { ReactiveDict } from 'meteor/reactive-dict'
/* Example: Event Handlers */
/*****************************************************************************/
Template.example.events({
  'click #anAction' : (event, instance) => {
    instance.myModelObj.set('rdSomeVar',
      '**' + Iron.controller().state.get('someVar') + '**');
  }
});

/*****************************************************************************/
/* Example: Helpers */
/*****************************************************************************/
Template.example.helpers({
  getSomeVarFromController : () => {
    console.log('getSomeVar was called');
    return Iron.controller().state.get('someVar');
  },
  rdSomeVar () {
    const self = Template.instance();
    return 'This the value using a ReactiveDic = ' + self.myModelObj.get('rdSomeVar');
  }
});

/*****************************************************************************/
/* Example: Lifecycle Hooks */
/*****************************************************************************/
Template.example.onCreated(function () {
  console.log('Example created');
  this.myModelObj = new ReactiveDict();
  this.myModelObj.set('p1', 'Some property that has no meaning');
  this.myModelObj.set('rdSomeVar', 'Initial value for rdSomeVar');
});

Template.example.onRendered(function () {
  console.log('Example rendered');
});

Template.example.onDestroyed(function () {
});

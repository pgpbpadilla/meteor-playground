/*****************************************************************************/

import { ReactiveDict } from 'meteor/reactive-dict'
/* Example: Event Handlers */
/*****************************************************************************/
Template.Example.events({
  'click #anAction' : (event, instance) => {
    instance.myModelObj.set('rdSomeVar',
      '**' + Iron.controller().state.get('someVar') + '**');
  }
});

/*****************************************************************************/
/* Example: Helpers */
/*****************************************************************************/
Template.Example.helpers({
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
Template.Example.onCreated(function () {
  console.log('Example created');
  this.myModelObj = new ReactiveDict();
  this.myModelObj.set('p1', 'Some property that has no meaning');
  this.myModelObj.set('rdSomeVar', 'Initial value for rdSomeVar');
});

Template.Example.onRendered(function () {
  console.log('Example rendered');
});

Template.Example.onDestroyed(function () {
});

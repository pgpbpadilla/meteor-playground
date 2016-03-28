/*****************************************************************************/
/* Example: Event Handlers */
/*****************************************************************************/
Template.example.events({
});

/*****************************************************************************/
/* Example: Helpers */
/*****************************************************************************/
Template.example.helpers({
  getSomeVar : () => {
    console.log('getSomeVar was called');
    return Iron.controller().state.get('someVar');
  }
});

/*****************************************************************************/
/* Example: Lifecycle Hooks */
/*****************************************************************************/
Template.example.onCreated(function () {
  console.log('Example created');

});

Template.example.onRendered(function () {
  console.log('Example rendered');
});

Template.example.onDestroyed(function () {
});

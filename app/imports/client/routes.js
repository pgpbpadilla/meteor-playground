"use strict";

export function setup(Router) {
  Router.configure({
     layoutTemplate: 'MainLayout'
  });

  Router.route('/example', {
    name: 'Example',
    controller: 'ExampleController',
    where: 'client'
  });
}
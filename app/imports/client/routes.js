"use strict";

export function setup(Router) {
  Router.configure({
     layoutTemplate: 'MainLayout'
  });

  Router.route('/example', {
    name: 'example',
    controller: 'ExampleController',
    where: 'client'
  });
}
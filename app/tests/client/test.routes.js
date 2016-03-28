/*global describe, it*/

"use strict";

// When writing testable code avoid using
// import { name } from 'module'
// The reason is that when debuggin it will appear
// as an anonymous function which makes debugging a little tricky
import * as routes from '../../imports/client/routes';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('test', () => {

    const Router = {
        configure : () => {}
    };

    beforeEach (() => {
        sinon.spy(Router, 'configure');
    });

    afterEach(() => {
        sinon.restore(Router.configure);
    });

    it('should configure the main layout', () => {

        routes.setup(Router);
        
        expect(Router.configure.calledWith({
            layoutTemplate: 'MainLayout'
        })).to.be.true;
    });
});
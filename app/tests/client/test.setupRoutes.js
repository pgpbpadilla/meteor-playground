/*global describe, it*/

"use strict";

import { setupRouter } from '../../imports/client/setupRouter';

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

        setupRouter(Router);
        
        expect(Router.configure.calledWith({
            layoutTemplate: 'MainLayout'
        })).to.be.true;
    });
});
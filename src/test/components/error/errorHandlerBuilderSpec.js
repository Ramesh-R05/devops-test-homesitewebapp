import { betterMockComponentContext } from '@bxm/flux';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
const proxyquire = require('proxyquire').noCallThru();

const ErrorHandlerBuilder = proxyquire('../../../app/components/error/errorHandlerBuilder', {
    react: React
}).default;

describe('ErrorHandlerBuilder', () => {
    let reactModule;
    let title;
    let bodyItems;
    let homepageLink;

    it('does not render when code is not specified', () => {
        reactModule = Context.mountComponent(ErrorHandlerBuilder());
        expect(ReactDOM.findDOMNode(reactModule)).not.to.exist;
    });

    it('does not render when code is unknown', () => {
        reactModule = Context.mountComponent(ErrorHandlerBuilder(418));
        expect(ReactDOM.findDOMNode(reactModule)).not.to.exist;
    });

    describe('500 error', () => {
        before(() => {
            reactModule = Context.mountComponent(ErrorHandlerBuilder(500));
            title = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'error-page__title');
            bodyItems = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'error-page__body-item');
            homepageLink = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'error-page__homepage-link');
        });

        it('contains the 500 page error title', () => {
            expect(ReactDOM.findDOMNode(title).textContent).to.eq(`Oh no! Something has gone wrong.`);
        });

        it('contains the 500 page body items', () => {
            expect(bodyItems.map(i => ReactDOM.findDOMNode(i).textContent)).to.deep.eq([
                `It seems the page you were trying to view is temporarily unavailable.`,
                `Please try again shortly.`
            ]);
        });

        it('links to the home page', () => {
            expect(homepageLink.href).to.eq('/');
        });
    });

    describe('404 error', () => {
        before(() => {
            reactModule = Context.mountComponent(ErrorHandlerBuilder(404));
            title = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'error-page__title');
            bodyItems = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'error-page__body-item');
            homepageLink = TestUtils.findRenderedDOMComponentWithClass(reactModule, 'error-page__homepage-link');
        });

        it('contains the 500 page error title', () => {
            expect(ReactDOM.findDOMNode(title).textContent).to.eq(`Oops! We're sorry!`);
        });

        it('contains the 500 page body items', () => {
            expect(bodyItems.map(i => ReactDOM.findDOMNode(i).textContent)).to.deep.eq([`We could not find the page you were looking for.`]);
        });

        it('links to the home page', () => {
            expect(homepageLink.href).to.eq('/');
        });
    });
});

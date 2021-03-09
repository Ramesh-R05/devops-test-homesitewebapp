import { betterMockComponentContext } from '@bxm/flux';
import { filterErrors, restoreErrors } from '../../utils/propTypeWarningFilter';
import each from 'lodash/collection/each';
const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
const proxyquire = require('proxyquire').noCallThru();
const BrandLink = proxyquire('../../../app/components/brand/link', {
    react: React
}).default;

describe('BrandLink', () => {
    let reactModule;
    let linkSiteBrand = true;
    let source = 'Homes to Love';

    describe('with all props', () => {
        let link;
        let children = <div>Hello</div>;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(
                <BrandLink linkSiteBrand={linkSiteBrand} source={source}>
                    {children}
                </BrandLink>
            );
            link = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'a');
        });

        it(`should pass the correct URL to the link'`, () => {
            expect(link.href).to.eq(BrandLink.sources[source.toLocaleLowerCase()]);
        });

        it(`should wrap the link around the children passed'`, () => {
            const div = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'div');
            expect(ReactDOM.findDOMNode(link).innerHTML).to.eq(ReactDOM.findDOMNode(div).outerHTML);
        });
    });

    describe('with linkSiteBrand prop set to true and source is "Homes to Love"', () => {
        let link;
        let children = <div>Hello</div>;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(
                <BrandLink linkSiteBrand={false} source={source}>
                    {children}
                </BrandLink>
            );
            link = TestUtils.scryRenderedDOMComponentsWithTag(reactModule, 'a');
        });

        it(`should only render the children with no link`, () => {
            const div = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'div');
            expect(link.length).to.eq(0);
            expect(ReactDOM.findDOMNode(reactModule).textContent).to.eq(ReactDOM.findDOMNode(div).textContent);
        });
    });

    describe('with linkSiteBrand prop set to true and source is "Homes+"', () => {
        let link;
        let children = <div>Hello</div>;

        before(() => {
            source = 'Homes+';
            reactModule = TestUtils.renderIntoDocument(
                <BrandLink linkSiteBrand={false} source={source}>
                    {children}
                </BrandLink>
            );
            link = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'a');
        });

        it(`should pass the correct URL to the link'`, () => {
            expect(link.href).to.eq(BrandLink.sources[source.toLocaleLowerCase()]);
        });

        it(`should wrap the link around the children passed'`, () => {
            const div = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'div');
            expect(ReactDOM.findDOMNode(link).innerHTML).to.eq(ReactDOM.findDOMNode(div).outerHTML);
        });
    });

    describe('with no Children', () => {
        before(() => {
            filterErrors();
            reactModule = TestUtils.renderIntoDocument(<BrandLink linkSiteBrand={linkSiteBrand} source={source} />);
        });

        after(() => {
            restoreErrors();
        });

        it('should not render the component', () => {
            expect(ReactDOM.findDOMNode(reactModule)).to.not.exist;
        });
    });

    describe('different sources', () => {
        each(['homes+', 'real living', 'Belle', 'Australian House and Garden'], source => {
            it(`should link to ${source} with the correct URL`, () => {
                reactModule = TestUtils.renderIntoDocument(
                    <BrandLink linkSiteBrand={linkSiteBrand} source={source}>
                        TEST
                    </BrandLink>
                );
                const link = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'a');
                expect(link.href).to.eq(BrandLink.sources[source.toLocaleLowerCase()]);
            });
        });
    });

    describe('with no source', () => {
        let link;

        before(() => {
            filterErrors();
            reactModule = TestUtils.renderIntoDocument(
                <BrandLink linkSiteBrand={linkSiteBrand} source="Fake Source">
                    TEST
                </BrandLink>
            );
            link = TestUtils.scryRenderedDOMComponentsWithTag(reactModule, 'a');
        });

        after(() => {
            restoreErrors();
        });

        it(`should render the children with no link`, () => {
            expect(link.length).to.eq(0);
            expect(ReactDOM.findDOMNode(reactModule).textContent).to.eq('TEST');
        });
    });
});

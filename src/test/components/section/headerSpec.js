import { betterMockComponentContext } from '@bxm/flux';
import { articles as articlesMock } from '../../mock/articles';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;

const proxyquire = require('proxyquire').noCallThru();
const AdStub = Context.createStubComponent();
const StickyAdStub = Context.createStubComponent();

const Header = proxyquire('../../../app/components/section/header', {
    react: React,
    '@bxm/ad/lib/google/components/ad': AdStub,
    '@bxm/ad/lib/google/components/stickyAd': StickyAdStub
}).default;

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

describe('SectionHeader', () => {
    afterEach(Context.cleanup);

    const singleWordHeading = 'Section';
    describe(`with Top banner/leaderboard/billboard ad and heading prop`, () => {
        let reactModule;
        let ad;
        let stickyAd;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(<Header title={singleWordHeading} />);
            stickyAd = TestUtils.scryRenderedComponentsWithType(reactModule, StickyAdStub);
        });

        it(`should render the Ad component with correct size`, () => {
            expect(stickyAd).to.exist;
            const expectedSizes = {
                small: 'banner',
                leaderboard: 'leaderboard',
                billboard: ['billboard', 'leaderboard']
            };
            expect(stickyAd[0].props.adProps.sizes).to.deep.equal(expectedSizes);
        });

        const expectedClassname = 'ad--section-top-leaderboard';
        it(`should have the classname prop equal to ${expectedClassname}`, () => {
            expect(stickyAd[0].props.adProps.className).to.equal(expectedClassname);
        });
    });

    describe(`with the heading prop equal to ${singleWordHeading}`, () => {
        let reactModule;
        let heading;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(<Header title={singleWordHeading} />);
            heading = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'b');
        });

        const expectedHeading = 'Section';
        it(`should have the heading equal to ${expectedHeading}`, () => {
            expect(ReactDOM.findDOMNode(heading).textContent).to.equal(expectedHeading);
        });
    });

    const twoWordsHeading = 'Section Tag';
    describe(`with the heading prop equal to ${twoWordsHeading}`, () => {
        let reactModule;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(<Header title={twoWordsHeading} />);
        });

        const expectedHeading = 'Section Tag';
        it(`should have the heading equal to ${expectedHeading}`, () => {
            const heading = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'h1');
            expect(ReactDOM.findDOMNode(heading).textContent.trim()).to.equal(expectedHeading);
        });

        const expectedBoldWord = 'Tag';
        it(`should have the second word '${expectedBoldWord}' bold`, () => {
            const boldWord = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'b');
            expect(ReactDOM.findDOMNode(boldWord).textContent.trim()).to.equal(expectedBoldWord);
        });
    });

    const threeWordsHeading = 'Section Tag Landing';
    describe(`with the heading prop equal to ${threeWordsHeading}`, () => {
        let reactModule;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(<Header title={threeWordsHeading} />);
        });

        const expectedHeading = 'Section Tag Landing';
        it(`should have the heading equal to ${expectedHeading}`, () => {
            const heading = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'h1');
            expect(ReactDOM.findDOMNode(heading).textContent).to.equal(expectedHeading);
        });

        const expectedBoldWord = 'Tag';
        it(`should have the second word '${expectedBoldWord}' bold`, () => {
            const boldWord = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'b');
            expect(ReactDOM.findDOMNode(boldWord).textContent.trim()).to.equal(expectedBoldWord);
        });
    });

    const fourWordsHeading = 'Section Tag Landing Page';
    describe(`with the heading prop equal to ${fourWordsHeading}`, () => {
        let reactModule;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(<Header title={fourWordsHeading} />);
        });

        const expectedHeading = 'Section Tag Landing Page';
        it(`should have the heading equal to ${expectedHeading}`, () => {
            const heading = TestUtils.findRenderedDOMComponentWithTag(reactModule, 'h1');
            expect(ReactDOM.findDOMNode(heading).textContent.trim()).to.equal(expectedHeading);
        });

        let expectedBoldWord = 'Tag';
        it(`should have the second word '${expectedBoldWord}' bold`, () => {
            const boldWord = TestUtils.scryRenderedDOMComponentsWithTag(reactModule, 'b')[0];
            expect(ReactDOM.findDOMNode(boldWord).textContent.trim()).to.equal(expectedBoldWord);
        });

        const expectedSecondBoldWord = 'Page';
        it(`should have the fourth word '${expectedSecondBoldWord}' bold`, () => {
            const boldWord = TestUtils.scryRenderedDOMComponentsWithTag(reactModule, 'b')[1];
            expect(ReactDOM.findDOMNode(boldWord).textContent.trim()).to.equal(expectedSecondBoldWord);
        });
    });

    describe('without the heading prop', () => {
        let reactModule;

        before(() => {
            reactModule = TestUtils.renderIntoDocument(<Header />);
        });

        it('should not be rendered', () => {
            expect(ReactDOM.findDOMNode(reactModule)).to.not.exist;
        });
    });
});

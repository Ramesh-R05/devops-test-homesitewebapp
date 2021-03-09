import { betterMockComponentContext } from '@bxm/flux';
import articlesMock from '../../mock/teasers';
import intersection from 'lodash/array/intersection';
import extend from 'lodash/object/extend';
import proxyquire, { noCallThru } from 'proxyquire';

const Context = betterMockComponentContext();
const { React, ReactDOM, TestUtils } = Context;
const ImageStub = Context.createStubComponentWithChildren();
const TitleStub = Context.createStubComponentWithChildren();
const SummaryStub = Context.createStubComponentWithChildren();
const SourceStub = Context.createStubComponentWithChildren();
const getStub = sinon.stub();
const AdStub = Context.createStubComponent();
const GoogleNativeAdTeaserHomesStub = Context.createStubComponent();

AdStub.pos = {
    aside: 'rhs',
    outside: 'outside',
    body: 'body',
    wallpaper: 'wallpaper',
    inskin: 'inskin',
    panel: 'panel'
};

noCallThru();
const Teaser = proxyquire('../../../app/components/teaser/teaser', {
    react: React,
    '@bxm/article/lib/components/teaser/title': TitleStub,
    '@bxm/article/lib/components/teaser/image': ImageStub,
    '@bxm/article/lib/components/teaser/summary': SummaryStub,
    '@bxm/ad/lib/google/components/ad': AdStub,
    '@bxm/teaser/lib/components/native/googleNativeAdTeaserHomes': GoogleNativeAdTeaserHomesStub,
    './source': SourceStub,
    './icon': Context.createStubComponent()
}).default;
const props = articlesMock.basic;

const contextConfigStub = {
    key: 'config',
    type: '',
    value: {
        get: getStub,
        isFeatureEnabled: () => true
    }
};

const googleNativeAdsMock = {
    index: 0,
    label: 'home_top_feed_1',
    targets: {
        kw: 'home_top_feed_1',
        adUnitPath: 'sponsored/HomeTopNewsFeed1',
        adPositionClassName: 'google-native-ad-home-top-news-feed-1'
    }
};

describe('Teaser', () => {
    const allowedThemeClasses = ['theme-australian_house_and_garden', 'theme-real_living', 'theme-homes_', 'theme-belle'];

    describe('with correct article data', () => {
        let reactModule;
        let Image;
        let Title;
        let Summary;
        let Source;
        const sourceValue = 'Country Style';
        const sourceLogoPath = 'countrystyle.svg';
        getStub.withArgs(`article.sources.${sourceValue.toLowerCase()}.logo`).returns(sourceLogoPath);

        before(() => {
            reactModule = Context.mountComponent(Teaser, { ...props }, [contextConfigStub]);
            Image = TestUtils.findRenderedComponentWithType(reactModule, ImageStub);
            Title = TestUtils.findRenderedComponentWithType(reactModule, TitleStub);
            Summary = TestUtils.findRenderedComponentWithType(reactModule, SummaryStub);
            Source = TestUtils.findRenderedComponentWithType(reactModule, SourceStub);
        });

        after(() => {
            if (reactModule && TestUtils.isCompositeComponent(reactModule)) {
                let domElement = ReactDOM.findDOMNode(reactModule);
                if (domElement) ReactDOM.unmountComponentAtNode(domElement.parentElement);
            }
        });

        const expectedClassName = 'teaser';
        it(`should be rendered with the .${expectedClassName} classname`, () => {
            const component = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, expectedClassName);
            expect(component.length).to.equal(1);
        });

        it(`Teaser should have the themeClass defined`, () => {
            expect(reactModule).to.have.property('themeClass');
        });

        it('Teaser should have lazyload true', () => {
            expect(Image.props.lazyload).to.eq(true);
        });

        it(`Teaser should have the themeClass set to one of these theme values .${allowedThemeClasses} `, () => {
            const intersect = intersection([reactModule.themeClass], allowedThemeClasses);
            expect(intersect.length).to.eq(1);
        });

        it(`should have the className set to one of these theme values .${allowedThemeClasses} `, () => {
            const classNames = ReactDOM.findDOMNode(reactModule).className.split(/\s+/);
            const intersect = intersection(classNames, allowedThemeClasses);
            expect(intersect.length).to.eq(1);
        });

        // Image
        it(`should set the Image link prop to ${props.url}`, () => {
            expect(Image.props.link).to.equal(props.url);
        });

        it(`should set the Image imageUrl prop to ${props.imageUrl}`, () => {
            expect(Image.props.imageUrl).to.equal(props.imageUrl);
        });

        it(`should set the Image alt prop to ${props.imageAltText}`, () => {
            expect(Image.props.alt).to.equal(props.imageAltText);
        });

        it(`should set the Image gtmClass prop to gtm-${props.id}`, () => {
            expect(Image.props.gtmClass).to.equal(`gtm-${props.id}`);
        });

        it(`should set the Image breakpoints prop`, () => {
            expect(Image.props.breakpoints).to.deep.equal(require('../../../app/breakpoints'));
        });

        // Title
        it(`should set the Title url prop to ${props.url}`, () => {
            expect(Title.props.url).to.equal(props.url);
        });

        it(`should set the Title title prop to ${props.title}`, () => {
            expect(Title.props.title).to.equal(props.title);
        });

        it(`should set the Title gtmClass prop to gtm-${props.id}`, () => {
            expect(Title.props.gtmClass).to.equal(`gtm-${props.id}`);
        });

        //Summary
        it(`should set the Summary summary prop to ${props.summary}`, () => {
            expect(Summary.props.summary).to.equal(props.summary);
        });

        //Source
        it(`should set the Source source prop to ${props.source}`, () => {
            expect(Source.props.source).to.equal(props.source);
        });

        describe('when not googleNativeAds and not nativeAdHasContentReady and not nativeAdContent', () => {
            it('it should render regular teaser', () => {
                const component = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, 'teaser__content');
                expect(component.length).to.equal(1);
            });
        });
    });

    describe('when showGoogleNativeAds and googleNativeAds', () => {
        let reactModule;
        let Ad;
        const propsWithNativeAdData = {
            ...props,
            googleNativeAds: googleNativeAdsMock
        };

        before(() => {
            reactModule = Context.mountComponent(Teaser, { ...propsWithNativeAdData }, [contextConfigStub]);
            Ad = TestUtils.findRenderedComponentWithType(reactModule, AdStub);
        });

        after(() => {
            if (reactModule && TestUtils.isCompositeComponent(reactModule)) {
                let domElement = ReactDOM.findDOMNode(reactModule);
                if (domElement) ReactDOM.unmountComponentAtNode(domElement.parentElement);
            }
        });

        it('should render ad slot', () => {
            expect(ReactDOM.findDOMNode(Ad)).to.exist;
        });
    });

    describe('when showGoogleNativeAds and googleNativeAds and nativeAdHasContentReady and nativeAdContent', () => {
        // TODO - Add unit test for this functionality. Consider using the testWrapper to test this whole component.
    });

    describe('with lazyload not set', () => {
        let reactModule;
        let Image;

        let propWithLazyload = Object.assign({}, props, {
            Lazyload: false
        });

        before(() => {
            reactModule = Context.mountComponent(Teaser, { ...propWithLazyload }, [contextConfigStub]);
            Image = TestUtils.findRenderedComponentWithType(reactModule, ImageStub);
        });

        it('Teaser should have lazyload true', () => {
            expect(Image.props.lazyload).to.eq(true);
        });
    });

    describe('with the modifier prop', () => {
        let reactModule;
        let Image;
        const props = extend({}, articlesMock.basic, { modifier: 'hero' });

        before(() => {
            reactModule = Context.mountComponent(Teaser, { ...props }, [contextConfigStub]);
            Image = TestUtils.findRenderedComponentWithType(reactModule, ImageStub);
        });

        after(() => {
            if (reactModule && TestUtils.isCompositeComponent(reactModule)) {
                let domElement = ReactDOM.findDOMNode(reactModule);
                if (domElement) ReactDOM.unmountComponentAtNode(domElement.parentElement);
            }
        });

        const expectedClassName = 'teaser--hero';
        it(`should be rendered with the .${expectedClassName} classname`, () => {
            const component = TestUtils.scryRenderedDOMComponentsWithClass(reactModule, expectedClassName);
            expect(component.length).to.equal(1);
        });
    });

    describe('with sizes prop', () => {
        let reactModule;
        let image;
        let props;

        afterEach(() => {
            if (reactModule && TestUtils.isCompositeComponent(reactModule)) {
                let domElement = ReactDOM.findDOMNode(reactModule);
                if (domElement) ReactDOM.unmountComponentAtNode(domElement.parentElement);
            }
        });

        describe('of value narrow', () => {
            before(() => {
                props = extend({}, articlesMock.basic, { sizes: 'narrow' });
                reactModule = Context.mountComponent(Teaser, { ...props }, [contextConfigStub]);
                image = TestUtils.findRenderedComponentWithType(reactModule, ImageStub);
            });

            it(`should set the Image sizes prop to`, () => {
                expect(image.props.imageSizes).to.deep.eq({
                    s: { w: 640, h: 396 },
                    m: { w: 640, h: 396 },
                    l: { w: 400, h: 247 },
                    xl: { w: 300, h: 185 }
                });
            });
        });

        describe('of value home-hero (for Hero image with label ontop)', () => {
            before(() => {
                props = extend({}, articlesMock.basic, { sizes: 'home-hero' });
                reactModule = Context.mountComponent(Teaser, { ...props }, [contextConfigStub]);
                image = TestUtils.findRenderedComponentWithType(reactModule, ImageStub);
            });

            it(`should set the Image sizes prop to`, () => {
                expect(image.props.imageSizes).to.deep.eq({
                    s: { w: 690, h: 426 },
                    m: { w: 963, h: 595 },
                    l: { w: 633, h: 391 },
                    xl: { w: 633, h: 391 }
                });
            });
        });

        describe('of value img-top (for Teaser image with label below)', () => {
            before(() => {
                props = extend({}, articlesMock.basic, { sizes: 'img-top' });
                reactModule = Context.mountComponent(Teaser, { ...props }, [contextConfigStub]);
                image = TestUtils.findRenderedComponentWithType(reactModule, ImageStub);
            });

            it(`should set the Image sizes prop to`, () => {
                expect(image.props.imageSizes).to.deep.eq({
                    s: { w: 690, h: 426 },
                    m: { w: 467, h: 288 },
                    l: { w: 301, h: 186 },
                    xl: { w: 301, h: 186 }
                });
            });
        });
    });

    describe('without the id prop', () => {
        let reactModule;

        before(() => {
            reactModule = Context.mountComponent(Teaser, {}, [contextConfigStub]);
        });

        after(() => {
            if (reactModule && TestUtils.isCompositeComponent(reactModule)) {
                let domElement = ReactDOM.findDOMNode(reactModule);
                if (domElement) React.unmountComponentAtNode(domElement.parentElement);
            }
        });

        it('should not be rendered', () => {
            expect(ReactDOM.findDOMNode(reactModule)).to.not.exist;
        });
    });
});

/* eslint-disable max-len */

import breakpoints from '../breakpoints';
import networkBrands from './networkBrands';
import services from './services';
import siteBrands from './siteBrands';
import googleNativeAds from './googleNativeAds';

export default {
    ga: { id: 'UA-57795117-2' },

    article: {
        sources: {
            belle: {
                path: '/belle',
                logo: 'belle.svg'
            },
            'real living': {
                path: '/real-living',
                logo: 'real-living.svg'
            },
            'australian house and garden': {
                path: '/australian-house-and-garden',
                logo: 'australian-house-and-garden.svg'
            },
            'homes+': {
                path: '/homes-plus',
                logo: 'homes.svg'
            },
            'homes to love': {
                path: '/',
                logo: 'homes-to-love.svg'
            },
            'inside out': {
                path: '/inside-out',
                logo: 'inside-out.svg'
            },
            'country style': {
                path: '/country-style',
                logo: 'country-style.svg'
            },
            'home beautiful': {
                path: '/home-beautiful',
                logo: 'homebeautiful.svg'
            },
            homelife: {
                path: '/homelife',
                logo: 'homelife.svg'
            }
        },
        siteBrand: 'homes to love',
        videoIconSVG: `
            <svg class="icon-video" viewBox="0 0 30 30">
            <path id="path-1" d="M7.7,2.8l20.5,12.7L7.7,28.3L7.7,2.8 M7.7,1C7.4,1,7.1,1.1,6.8,1.2C6.3,1.5,5.9,2.2,5.9,2.8l0,25.5
                c0,0.7,0.4,1.3,0.9,1.6c0.3,0.2,0.6,0.2,0.9,0.2c0.3,0,0.7-0.1,0.9-0.3l20.5-12.7c0.5-0.3,0.8-0.9,0.8-1.5c0-0.6-0.3-1.2-0.8-1.5
                L8.6,1.3C8.4,1.1,8,1,7.7,1L7.7,1z"/>
            </svg>`,
        galleryIconSVG: `
            <svg class="icon-gallery" viewBox="0 0 30 30">
            <path id="path-1" d="M27.2,28H2.6C1.4,28,0,26.7,0,25V9c0-2,1.9-3,2.8-3h4.3l2.3-4h11.3l2.3,4h4.3C29.1,6,30,8,30,9v16
                C30,26.6,28.5,28,27.2,28z M28.1,9c0-0.1-0.3-1-0.9-1h-4.3h-1.1l-0.5-1l-1.7-3h-9.2L8.7,7L8.2,8H7.1H2.8C2.7,8,1.9,8.3,1.9,9v16
                c0,0.5,0.5,1,0.7,1h24.6c0.3,0,0.9-0.6,0.9-1V9z M15,23c-3.6,0-6.6-3.1-6.6-7c0-3.9,2.9-7,6.6-7s6.6,3.1,6.6,7
                C21.6,19.9,18.6,23,15,23z M15,11c-2.6,0-4.7,2.2-4.7,5c0,2.8,2.1,5,4.7,5s4.7-2.2,4.7-5C19.7,13.2,17.6,11,15,11z"/>
            </svg>`
    },

    typekit: {
        id: 'mmp8xzm'
    },

    gtm: {
        masthead: 'HOMES',
        id: 'GTM-KG7F8H'
    },
    jwPlayer: {
        scriptKey: 'hsF3ib28',
        baseUrl: 'https://cdn.jwplayer.com'
    },
    gigya: {
        apiKey: '3_ghsdy4V7gVQHU_8eFfPgTAKIw-3ct5dXWtLoc86lIcHaPQOswMYyMkMKCe377vah'
    },

    brands: {
        site: siteBrands,
        network: networkBrands
    },

    features: {
        galleryOfGalleries: {
            enabled: true
        },
        socialShareBlock: {
            enabled: true
        },
        loadMoreBtn: {
            enabled: true
        },
        recommendations: {
            enabled: true
        },
        outbrain: {
            enabled: true
        },
        sailthru: {
            enabled: true
        },
        feedCarousel: {
            enabled: true
        },
        viPlayer: {
            enabled: true
        },
        jwPlayer: {
            enabled: true
        },
        headerExpanded: {
            enabled: true
        },
        royMorganAmp: {
            enabled: true,
            id: 'm8frgflsxh',
            pixels: [
                { ca: '10034212', a: 'yp0d3p0a' }, // HTL pixel
                { ca: '20001092', a: 'jmtr1l0t' }, // Rollup pixel
                { ca: '20002302', a: '0j16fz4d' }, // To Love pixel
                { ca: '20002304', a: '30tp4z58' } // Women's sites pixel
            ]
        },
        search: {
            enabled: true
        },
        navigationSubSectionDropdown: {
            enabled: true
        },
        ias: {
            enabled: true,
            id: 926929
        },
        lipstick: {
            enabled: true
        },
        showHeaderSocialIcons: {
            enabled: true
        },
        showBuyMagazinesButton: {
            enabled: true
        },
        brandsModalInHeader: {
            enabled: true
        },
        listingsEmailTest: {
            enabled: true
        },
        skimLinks: {
            enabled: true,
            publisherCode: '105419X1562407'
        },
        ix: {
            enabled: true,
            scriptUrl: '//js-sec.indexww.com/ht/p/187830-32379471272294.js'
        },
        googleNativeAds: {
            enabled: true
        }
    },

    pagination: {
        nbFirstPageItems: 20,
        nbLoadMoreItems: 18
    },

    global: {
        breakpoints,
        googleAds: {
            slotPrefix: 'gpt-slot-',
            networkId: 'GOOGLE-ADS-NETWORKID-NOT-SET',
            siteId: 'GOOGLE-ADS-SITEID-NOT-SET'
        }
    },

    ads: {
        networkId: 13534306,
        targets: { env: 'test' },
        disabledGalleryChangeRefresh: true
    },

    outbrain: {
        templateId: 'Homestolove',
        widgetId: 'AR_1',
        scriptUrl: '//widgets.outbrain.com/outbrain.js'
    },

    grecaptcha: {
        siteKey: '6LeMu6AUAAAAAB8Wnn18Y0tRmybaXCyXmCNbZgFC'
    },

    nielsen: 'D8F7E7CC-324B-4FEA-A412-097B3CC98D0A',

    meta: {
        awinDomainVerification: {
            content: '898f2cd5b8c0bfcc2d35621f11dc3e24',
            scriptUrl: 'https://www.dwin2.com/pub.687331.min.js'
        },
        commissionFactoryVerification: {
            content: 'fc1aba559513404b870123d48c96fe06'
        }
    },

    rssListingQuery: 'nodeTypeAlias eq %27Article%27 or nodeTypeAlias eq %27HomesArticle%27 or nodeTypeAlias eq %27Gallery%27',

    site: {
        host: 'http://homes-site-au.sit.bxm.net.au',
        name: 'Homes To Love',
        shortName: 'Homes To Love',
        prefix: 'HOMES',
        network: 'wn',
        prodDomain: 'www.homestolove.com.au',
        dateTimeFormat: 'MMM DD, YYYY h:mma',
        adTaggingId: 'HomesToLove',
        buyMagazinesLink: 'https://www.magshop.com.au',
        defaultSocialLinks: {
            facebook: 'https://www.facebook.com/homestoloveau',
            twitter: 'https://twitter.com/homestoloveau',
            instagram: 'https://www.instagram.com/homestoloveau',
            pinterest: 'https://www.pinterest.com/homestoloveau'
        },
        customFonts: [
            { url: 'https://fonts.googleapis.com/css?family=Questrial' },
            { url: 'https://fonts.googleapis.com/css?family=Muli:400,600,800' },
            { url: 'https://fonts.googleapis.com/css?family=Spectral:600' }
        ]
    },

    server: {
        port: 3001
    },

    services,

    localeData: {
        magShop: {
            magshopCoverImage: 'magazines.png',
            magshopCoverAltText: "Women's Weekly Cookbooks",
            magshopHeading: 'More ways to read',
            magshopText:
                'Subscribe to our homes mags to gain access to more inspiring homes and gardens, plus renovating, decorating, food and travel stories.',
            magshopUrl: 'https://www.magshop.com.au/store/homestolove'
        },
        newsletterIframeUrl: 'https://d4jqclkssewcy.cloudfront.net/page.aspx?QS=38dfbe491fab00eaf0b8fb992ad1a0b52fb9e1dc0c154322&brand=homes_to_love'
    },

    cache: {
        Homepage: 600,
        Gallery: 1800,
        HomesArticle: 1800,
        NavigationSection: 3600,
        BrandSection: 3600,
        TagSection: 7200
    },

    urls: {
        newsletterSignupInBodyCopy: 'https://cb.sailthru.com/join/5ky/signup-homestolove-article-iframe-bottom',
        footerUrls: {
            privacy: 'https://www.aremedia.com.au/privacy',
            advertise: 'https://www.aremedia.com.au/brands/homes-to-love/',
            terms: 'https://www.aremedia.com.au/terms/',
            contactUs: 'https://www.aremedia.com.au/about-us/contact-us/'
        }
    },

    useBrandTitleSuffix: true,

    homepageFilter: {
        excludedNodeIds: ['HOMES-10958'] // Home Directories (dev)
    },

    footer: {
        links: {
            corporate: [
                {
                    title: 'Privacy Policy',
                    url: 'https://www.aremedia.com.au/privacy/',
                    gtmClass: 'gtm-footer-privacy'
                },
                {
                    title: 'Advertise',
                    url: 'https://www.aremedia.com.au/brands/homes-to-love/',
                    gtmClass: 'gtm-footer-advertising'
                },
                {
                    title: 'Terms of Use',
                    url: 'https://www.aremedia.com.au/terms/',
                    gtmClass: 'gtm-footer-terms'
                },
                {
                    title: 'Magshop',
                    url: 'https://www.magshop.com.au/',
                    gtmClass: 'gtm-footer-magshop'
                }
            ]
        }
    },

    listings: {
        testToEmail: 'bxmdeveloper@gmail.com',
        senderName: 'Homes To Love',
        senderEmail: 'bxmdeveloper@gmail.com'
    },

    googleNativeAds
};

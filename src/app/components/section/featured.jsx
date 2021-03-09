import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Ad from '@bxm/ad/lib/google/components/ad';
import Teaser from '../teaser/teaser';
import SearchBar from '../search/searchBar';

export default class Featured extends Component {
    static displayName = 'Featured';

    static propTypes = {
        articles: PropTypes.array.isRequired,
        nativeAdTargets: PropTypes.array,
        hero: PropTypes.object,
        showSearchBar: PropTypes.bool,
        renderBlockBelowHero: PropTypes.func
    };

    static defaultProps = {
        nativeAdTargets: [],
        hero: null,
        showSearchBar: false,
        renderBlockBelowHero: () => {}
    };

    renderSearchBar = () => {
        const { showSearchBar } = this.props;

        if (showSearchBar) {
            return (
                <section className="section__search">
                    <SearchBar />
                </section>
            );
        }

        return null;
    };

    renderHeroTeaser = () => {
        const { hero } = this.props;

        if (!hero) {
            return null;
        }

        return hero ? (
            <Teaser {...hero} gtmClass="gtm-hero-section" key={`${hero.id}-xl`} modifier="hero" sizes="home-hero" className="columns small-12" />
        ) : null;
    };

    renderTeaserGrid = () => {
        const { articles, nativeAdTargets } = this.props;

        const baseGridItemClass = 'section__grid-item';
        const baseTeaserClasses = classNames(baseGridItemClass, 'section__grid-teaser', 'columns', 'small-12', 'medium-6');
        const baseAdClasses = classNames(
            baseGridItemClass,
            'section__grid-ad',
            'ad--section-mrec',
            'columns',
            'small-12',
            'medium-6',
            'hide-for-large-up'
        );

        if (!Array.isArray(articles) || !articles.length) {
            return null;
        }

        const teaserProps = {
            sizes: 'brand-list',
            modifier: 'img-top',
            gtmClass: 'gtm-topteaserlist-index'
        };

        return [
            <Ad className={baseAdClasses} displayFor="medium" sizes={['double-mrec', 'mrec']} label={{ active: false }} pageLocation={Ad.pos.body} />,
            <Teaser key={articles[0].id} {...articles[0]} {...teaserProps} googleNativeAds={nativeAdTargets[0]} className={baseTeaserClasses} />,
            <Ad
                className="ad--section-mrec"
                displayFor="small"
                sizes={['double-mrec', 'mrec']}
                updatePageOffset
                label={{ active: false }}
                pageLocation={Ad.pos.body}
            />,
            articles
                .slice(0, 3)
                .map(article => <Teaser {...article} {...teaserProps} key={article.id} className={baseTeaserClasses} googleNativeAds={false} />),
            <Ad
                className={baseAdClasses}
                displayFor="medium"
                sizes={{
                    medium: 'mrec'
                }}
                label={{ active: false }}
                pageLocation={Ad.pos.body}
            />
        ];
    };

    render() {
        const { renderBlockBelowHero } = this.props;
        const className = 'section__featured gtm-topteaserlist-index columns small-12 medium-12 large-8';

        return (
            <section className={className}>
                <div className="row">{this.renderSearchBar()} </div>
                <div className="row">{this.renderHeroTeaser()}</div>
                {renderBlockBelowHero()}
                <div className="row">{this.renderTeaserGrid()}</div>
            </section>
        );
    }
}

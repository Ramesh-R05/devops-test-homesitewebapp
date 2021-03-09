import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parse } from '@bxm/markdown';
import Icon from './icon';

export default function ContactCard({ streetAddress, webAddress, phoneNumber, emailAddress, classModifier }) {
    // remove protocol from URL
    // TODO - make this a separate util function for easier unit testing
    const formatWebAddress = url => {
        if (!url) {
            return '';
        }

        return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
    };

    const rootClass = classNames('contact-card', {
        [`contact-card--${classModifier}`]: classModifier
    });

    return (
        <div className={rootClass}>
            <ul className="contact-card__list">
                {webAddress && (
                    <li className="contact-card__list-item contact-card__list-item--web-address">
                        <span className="contact-card__list-item-icon">
                            <Icon name="globe-icon" />
                        </span>
                        <span className="contact-card__list-item-text">
                            <a className="contact-card__list-item-link gtm-contact-card-web-address" href={webAddress} target="_blank" rel="nofollow">
                                {formatWebAddress(webAddress)}
                            </a>
                        </span>
                    </li>
                )}
                {emailAddress && (
                    <li className="contact-card__list-item contact-card__list-item--email">
                        <span className="contact-card__list-item-icon">
                            <Icon name="email-icon" />
                        </span>
                        <span className="contact-card__list-item-text">
                            <a
                                className="contact-card__list-item-link gtm-contact-card-email-address"
                                href={`mailto:${emailAddress}?subject=Enquiry from Homes To Love Directory Listing`}
                                target="_blank"
                                rel="noreferrer noreferrer"
                            >
                                {emailAddress}
                            </a>
                        </span>
                    </li>
                )}
                {streetAddress && (
                    <li className="contact-card__list-item contact-card__list-item--street-address">
                        <span className="contact-card__list-item-icon">
                            <Icon name="home-icon" />
                        </span>
                        {/* eslint-disable-next-line react/no-danger */}
                        <span className="contact-card__list-item-text" dangerouslySetInnerHTML={{ __html: parse(streetAddress) }} />
                    </li>
                )}
                {phoneNumber && (
                    <li className="contact-card__list-item contact-card__list-item--phone">
                        <span className="contact-card__list-item-icon">
                            <Icon name="phone-icon" />
                        </span>
                        <span className="contact-card__list-item-text">
                            <a className="contact-card__list-item-link gtm-contact-card-phone-number" href={`tel:${phoneNumber}`}>
                                {phoneNumber}
                            </a>
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
}

ContactCard.displayName = 'ContactCard';

ContactCard.propTypes = {
    streetAddress: PropTypes.string,
    webAddress: PropTypes.string,
    phoneNumber: PropTypes.string,
    emailAddress: PropTypes.string,
    classModifier: PropTypes.string
};

ContactCard.defaultProps = {
    streetAddress: '',
    webAddress: '',
    phoneNumber: '',
    emailAddress: '',
    classModifier: ''
};

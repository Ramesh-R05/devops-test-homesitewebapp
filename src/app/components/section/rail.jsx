import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Ad from '@bxm/ad/lib/google/components/ad';
import StickyBlock from '@bxm/behaviour/lib/components/sticky';

export default class Rail extends Component {
    static displayName = 'Rail';

    static propTypes = {
        children: PropTypes.node,
        marginBottom: PropTypes.number,
        yPosition: PropTypes.number
    };

    static defaultProps = {
        marginBottom: 0,
        yPosition: 0,
        children: null
    };

    render() {
        const { marginBottom, yPosition, children } = this.props;

        return (
            <StickyBlock
                breakpoints={['large', 'xlarge']}
                containerClasses="columns large-4 show-for-large-up"
                containerMarginBottom={marginBottom}
                carriageYPosition={yPosition}
            >
                <React.Fragment>
                    <Ad
                        className="ad--section-mrec"
                        displayFor={['large', 'xlarge']}
                        sizes={['double-mrec', 'mrec']}
                        label={{ active: false }}
                        pageLocation={Ad.pos.aside}
                    />
                    {children}
                </React.Fragment>
            </StickyBlock>
        );
    }
}

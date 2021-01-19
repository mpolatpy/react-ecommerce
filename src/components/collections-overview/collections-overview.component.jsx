import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections
            .map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />)
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
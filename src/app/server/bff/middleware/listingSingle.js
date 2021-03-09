import API from '../api';
import { parseEntity } from '../helper/parseEntity';
import transformListingGalleries from '../helper/transformListingGalleries';
import filterEmptyItems from '../helper/filterEmptyItems';

export const listingNodeTypes = ['CardListing', 'StandardListing', 'EnhancedListing', 'PremiumListing'];

export default async function listingSingle(req, res, next) {
    try {
        const { query } = req;
        const { id, preview } = query;

        const saved = `?saved=${!!preview}`;

        if (!id) {
            next();

            return;
        }

        const directoryListingEntity = await API.getEntity(`HOMES-${id}${saved}`);

        if (!directoryListingEntity) {
            next();

            return;
        }

        if (!listingNodeTypes.includes(directoryListingEntity.nodeTypeAlias)) {
            next();

            return;
        }

        const parsedEntity = parseEntity(directoryListingEntity);

        const heroGallery = parsedEntity.heroGallery && filterEmptyItems(parsedEntity.heroGallery, 'url');

        if (parsedEntity.video) {
            const video = JSON.parse(JSON.stringify(parsedEntity.video));
            heroGallery.unshift(video);
        }

        res.body = {
            ...res.body,
            entity: {
                ...parsedEntity,
                linkedGalleries: transformListingGalleries(parsedEntity.galleries),
                testimonials: parsedEntity.testimonials && filterEmptyItems(parsedEntity.testimonials, 'message'),
                profileGallery: parsedEntity.profileGallery && filterEmptyItems(parsedEntity.profileGallery, 'url'),
                heroGallery
            }
        };

        next();
    } catch (error) {
        next(error);
    }
}

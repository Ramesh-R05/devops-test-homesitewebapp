import API from '../api';
import { parseEntities } from '../helper/parseEntity';

export default async function latestBrandItems(req, res, next) {
    try {
        const brandConfig = req.app.locals.config.brands.site;
        const brandContentPromises = brandConfig.map(brand =>
            API.getLatestTeasers(3, 0, `source eq %27${brand.title}%27`).then(itemRes => ({
                [brand.id]: parseEntities(itemRes && itemRes.data ? itemRes.data : [])
            }))
        );
        const brandContentRes = await Promise.all(brandContentPromises);

        if (Array.isArray(brandContentRes) && brandContentRes.length) {
            res.body.latestBrandItems = brandContentRes.reduce((obj, item) => {
                const newObj = { ...obj };
                const [key, value] = Object.entries(item)[0];
                newObj[key] = value;

                return newObj;
            }, {});
        }

        next();
    } catch (e) {
        next(e);
    }
}

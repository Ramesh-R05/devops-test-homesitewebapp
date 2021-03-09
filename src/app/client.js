import '@babel/polyfill';
import 'picturefill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createElementWithContext } from 'fluxible-addons-react';
import fluxibleConfigPlugin from 'fluxible-plugin-context-config';
import batchedUpdatePlugin from 'fluxible-addons-react/batchedUpdatePlugin';
import app from './app';
import adConfig from './config/ads';

window.React = React; // For chrome dev tool support

app.plug(fluxibleConfigPlugin());
app.plug(batchedUpdatePlugin());

app.rehydrate(window.App, (err, context) => {
    if (err) {
        throw err;
    }

    const mountNode = document.getElementById('app');
    const { userAgent } = window.navigator;
    adConfig.init(context.getComponentContext().config.site.adTaggingId);
    ReactDOM.hydrate(createElementWithContext(context, { userAgent }), mountNode, () => {});
});

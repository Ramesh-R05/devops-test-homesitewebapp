import * as React from 'react';
import { navigateAction } from 'fluxible-router';
import server from '@bxm/server';
import fluxibleConfigPlugin from 'fluxible-plugin-context-config';
import config from '../config';
import app, { stores } from '../app';
// import GoogleFont from '../components/html/googleFont';
import bff from './bff';
import fluxibleLoggerPlugin from '../../fluxibleLoggerPlugin';
import logger from '../../logger';

app.plug(fluxibleConfigPlugin(config));
app.plug(fluxibleLoggerPlugin());

server(bff, config, app, React, navigateAction, logger, stores);

import type { CracoConfig } from '@craco/types';

const config: CracoConfig = {
    webpack: {
        configure: {
            resolve: {
                // Setting up the proper node_modules resolution for NPM packages linked with `yarn link`.
                symlinks: false,
            },
        },
    },
};

module.exports = config;

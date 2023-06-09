import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    const { paths, isDev } = options;

    
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })
    ];

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        );
    }

    return plugins;
};

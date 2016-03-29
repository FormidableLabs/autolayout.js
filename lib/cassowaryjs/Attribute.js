'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Layout attributes.
 * @enum {String}
 */
var Attribute = {
    CONST: 'const',
    NOTANATTRIBUTE: 'const',
    VARIABLE: 'var',
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom',
    WIDTH: 'width',
    HEIGHT: 'height',
    CENTERX: 'centerX',
    CENTERY: 'centerY',
    /*LEADING: 'leading',
    TRAILING: 'trailing'*/
    /** Used by the extended VFL syntax. */
    ZINDEX: 'zIndex'
};
exports.default = Attribute;
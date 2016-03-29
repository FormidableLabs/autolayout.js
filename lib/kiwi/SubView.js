'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kiwiSolver = require('../node_modules/kiwi-solver');

var _kiwiSolver2 = _interopRequireDefault(_kiwiSolver);

var _Attribute = require('./Attribute');

var _Attribute2 = _interopRequireDefault(_Attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A SubView is automatically generated when constraints are added to a View.
 *
 * @namespace SubView
 */

var SubView = function () {
    function SubView(options) {
        _classCallCheck(this, SubView);

        this._name = options.name;
        this._type = options.type;
        this._solver = options.solver;
        this._attr = {};
        if (!options.name) {
            if (undefined) {
                this._attr[_Attribute2.default.LEFT] = new _kiwiSolver2.default.Variable();
                this._solver.addConstraint(new _kiwiSolver2.default.StayConstraint(this._attr[_Attribute2.default.LEFT], _kiwiSolver2.default.Strength.required));
                this._attr[_Attribute2.default.TOP] = new _kiwiSolver2.default.Variable();
                this._solver.addConstraint(new _kiwiSolver2.default.StayConstraint(this._attr[_Attribute2.default.TOP], _kiwiSolver2.default.Strength.required));
                this._attr[_Attribute2.default.ZINDEX] = new _kiwiSolver2.default.Variable();
                this._solver.addConstraint(new _kiwiSolver2.default.StayConstraint(this._attr[_Attribute2.default.ZINDEX], _kiwiSolver2.default.Strength.required));
            } else {
                this._attr[_Attribute2.default.LEFT] = new _kiwiSolver2.default.Variable();
                this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[_Attribute2.default.LEFT], _kiwiSolver2.default.Operator.Eq, 0));
                this._attr[_Attribute2.default.TOP] = new _kiwiSolver2.default.Variable();
                this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[_Attribute2.default.TOP], _kiwiSolver2.default.Operator.Eq, 0));
                this._attr[_Attribute2.default.ZINDEX] = new _kiwiSolver2.default.Variable();
                this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[_Attribute2.default.ZINDEX], _kiwiSolver2.default.Operator.Eq, 0));
            }
        }
    }

    _createClass(SubView, [{
        key: 'toJSON',
        value: function toJSON() {
            return {
                name: this.name,
                left: this.left,
                top: this.top,
                width: this.width,
                height: this.height
            };
        }
    }, {
        key: 'toString',
        value: function toString() {
            JSON.stringify(this.toJSON(), undefined, 2);
        }

        /**
         * Name of the sub-view.
         * @readonly
         * @type {String}
         */

    }, {
        key: 'getValue',


        /**
         * Gets the value of one of the attributes.
         *
         * @param {String|Attribute} attr Attribute name (e.g. 'right', 'centerY', Attribute.TOP).
         * @return {Number} value or `undefined`
         */
        value: function getValue(attr) {
            return this._attr[attr] ? this._attr[attr].value() : undefined;
        }

        /**
         * @private
         */

    }, {
        key: '_getAttr',
        value: function _getAttr(attr) {
            if (this._attr[attr]) {
                return this._attr[attr];
            }
            this._attr[attr] = undefined ? new _kiwiSolver2.default.Variable() : new _kiwiSolver2.default.Variable();
            switch (attr) {
                case _Attribute2.default.RIGHT:
                    this._getAttr(_Attribute2.default.LEFT);
                    this._getAttr(_Attribute2.default.WIDTH);
                    if (undefined) {
                        this._solver.addConstraint(new _kiwiSolver2.default.Equation(this._attr[attr], _kiwiSolver2.default.plus(this._attr[_Attribute2.default.LEFT], this._attr[_Attribute2.default.WIDTH])));
                    } else {
                        this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[attr], _kiwiSolver2.default.Operator.Eq, this._attr[_Attribute2.default.LEFT].plus(this._attr[_Attribute2.default.WIDTH])));
                    }
                    break;
                case _Attribute2.default.BOTTOM:
                    this._getAttr(_Attribute2.default.TOP);
                    this._getAttr(_Attribute2.default.HEIGHT);
                    if (undefined) {
                        this._solver.addConstraint(new _kiwiSolver2.default.Equation(this._attr[attr], _kiwiSolver2.default.plus(this._attr[_Attribute2.default.TOP], this._attr[_Attribute2.default.HEIGHT])));
                    } else {
                        this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[attr], _kiwiSolver2.default.Operator.Eq, this._attr[_Attribute2.default.TOP].plus(this._attr[_Attribute2.default.HEIGHT])));
                    }
                    break;
                case _Attribute2.default.CENTERX:
                    this._getAttr(_Attribute2.default.LEFT);
                    this._getAttr(_Attribute2.default.WIDTH);
                    if (undefined) {
                        this._solver.addConstraint(new _kiwiSolver2.default.Equation(this._attr[attr], _kiwiSolver2.default.plus(this._attr[_Attribute2.default.LEFT], _kiwiSolver2.default.divide(this._attr[_Attribute2.default.WIDTH], 2))));
                    } else {
                        this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[attr], _kiwiSolver2.default.Operator.Eq, this._attr[_Attribute2.default.LEFT].plus(this._attr[_Attribute2.default.WIDTH].divide(2))));
                    }
                    break;
                case _Attribute2.default.CENTERY:
                    this._getAttr(_Attribute2.default.TOP);
                    this._getAttr(_Attribute2.default.HEIGHT);
                    if (undefined) {
                        this._solver.addConstraint(new _kiwiSolver2.default.Equation(this._attr[attr], _kiwiSolver2.default.plus(this._attr[_Attribute2.default.TOP], _kiwiSolver2.default.divide(this._attr[_Attribute2.default.HEIGHT], 2))));
                    } else {
                        this._solver.addConstraint(new _kiwiSolver2.default.Constraint(this._attr[attr], _kiwiSolver2.default.Operator.Eq, this._attr[_Attribute2.default.TOP].plus(this._attr[_Attribute2.default.HEIGHT].divide(2))));
                    }
                    break;
            }
            if (!undefined) {
                this._solver.updateVariables();
            }
            return this._attr[attr];
        }

        /**
         * @private
         */

    }, {
        key: '_getAttrValue',
        value: function _getAttrValue(attr) {
            if (undefined) {
                return this._getAttr(attr).value;
            } else {
                return this._getAttr(attr).value();
            }
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }

        /**
         * Left value (`Attribute.LEFT`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'left',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.LEFT);
        }

        /**
         * Right value (`Attribute.RIGHT`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'right',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.RIGHT);
        }

        /**
         * Width value (`Attribute.WIDTH`).
         * @type {Number}
         */

    }, {
        key: 'width',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.WIDTH);
        }

        /**
         * Height value (`Attribute.HEIGHT`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'height',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.HEIGHT);
        }

        /**
         * Intrinsic width of the sub-view.
         *
         * Use this property to explicitely set the width of the sub-view, e.g.:
         * ```javascript
         * var view = new AutoLayout.View(AutoLayout.VisualFormat.parse('|[child1][child2]|'), {
         *   width: 500
         * });
         * view.subViews.child1.intrinsicWidth = 100;
         * console.log('child2 width: ' + view.subViews.child2.width); // 400
         * ```
         *
         * @type {Number}
         */

    }, {
        key: 'intrinsicWidth',
        get: function get() {
            return this._intrinsicWidth;
        },
        set: function set(value) {
            if (value !== undefined && value !== this._intrinsicWidth) {
                var attr = this._getAttr(_Attribute2.default.WIDTH);
                if (this._intrinsicWidth === undefined) {
                    if (undefined) {
                        this._solver.addEditVar(attr, new _kiwiSolver2.default.Strength('required', this._name ? 998 : 999, 1000, 1000));
                    } else {
                        this._solver.addEditVariable(attr, _kiwiSolver2.default.Strength.create(this._name ? 998 : 999, 1000, 1000));
                    }
                }
                this._intrinsicWidth = value;
                this._solver.suggestValue(attr, value);
                if (undefined) {
                    this._solver.resolve();
                } else {
                    this._solver.updateVariables();
                }
            }
        }

        /**
         * Intrinsic height of the sub-view.
         *
         * See `intrinsicWidth`.
         *
         * @type {Number}
         */

    }, {
        key: 'intrinsicHeight',
        get: function get() {
            return this._intrinsicHeight;
        },
        set: function set(value) {
            if (value !== undefined && value !== this._intrinsicHeight) {
                var attr = this._getAttr(_Attribute2.default.HEIGHT);
                if (this._intrinsicHeight === undefined) {
                    if (undefined) {
                        this._solver.addEditVar(attr, new _kiwiSolver2.default.Strength('required', this._name ? 998 : 999, 1000, 1000));
                    } else {
                        this._solver.addEditVariable(attr, _kiwiSolver2.default.Strength.create(this._name ? 998 : 999, 1000, 1000));
                    }
                }
                this._intrinsicHeight = value;
                this._solver.suggestValue(attr, value);
                if (undefined) {
                    this._solver.resolve();
                } else {
                    this._solver.updateVariables();
                }
            }
        }

        /**
         * Top value (`Attribute.TOP`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'top',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.TOP);
        }

        /**
         * Bottom value (`Attribute.BOTTOM`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'bottom',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.BOTTOM);
        }

        /**
         * Horizontal center (`Attribute.CENTERX`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'centerX',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.CENTERX);
        }

        /**
         * Vertical center (`Attribute.CENTERY`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'centerY',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.CENTERY);
        }

        /**
         * Z-index (`Attribute.ZINDEX`).
         * @readonly
         * @type {Number}
         */

    }, {
        key: 'zIndex',
        get: function get() {
            return this._getAttrValue(_Attribute2.default.ZINDEX);
        }

        /**
         * Returns the type of the sub-view.
         * @readonly
         * @type {String}
         */

    }, {
        key: 'type',
        get: function get() {
            return this._type;
        }
    }]);

    return SubView;
}();

exports.default = SubView;
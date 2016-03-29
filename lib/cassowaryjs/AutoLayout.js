'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Attribute = require('./Attribute');

var _Attribute2 = _interopRequireDefault(_Attribute);

var _Relation = require('./Relation');

var _Relation2 = _interopRequireDefault(_Relation);

var _Priority = require('./Priority');

var _Priority2 = _interopRequireDefault(_Priority);

var _VisualFormat = require('./VisualFormat');

var _VisualFormat2 = _interopRequireDefault(_VisualFormat);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _SubView = require('./SubView');

var _SubView2 = _interopRequireDefault(_SubView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import DOM from './DOM';

/**
 * AutoLayout.
 *
 * @namespace AutoLayout
 * @property {Attribute} Attribute
 * @property {Relation} Relation
 * @property {Priority} Priority
 * @property {VisualFormat} VisualFormat
 * @property {View} View
 * @property {SubView} SubView
 */
var AutoLayout = {
  Attribute: _Attribute2.default,
  Relation: _Relation2.default,
  Priority: _Priority2.default,
  VisualFormat: _VisualFormat2.default,
  View: _View2.default,
  SubView: _SubView2.default
  //DOM: DOM
};

exports.default = AutoLayout;
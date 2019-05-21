function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import RNAiquaBase from './RNAiquaBase';
import { NativeModules } from 'react-native';
var RNAiquaSdk = NativeModules.RNAiquaSdk;

var RNAiquaIOS =
/*#__PURE__*/
function (_RNAiquaBase) {
  _inherits(RNAiquaIOS, _RNAiquaBase);

  function RNAiquaIOS() {
    _classCallCheck(this, RNAiquaIOS);

    return _possibleConstructorReturn(this, _getPrototypeOf(RNAiquaIOS).apply(this, arguments));
  }

  _createClass(RNAiquaIOS, null, [{
    key: "configure",
    value: function configure(_ref) {
      var appId = _ref.appId,
          _ref$senderId = _ref.senderId,
          senderId = _ref$senderId === void 0 ? null : _ref$senderId,
          _ref$appGroup = _ref.appGroup,
          appGroup = _ref$appGroup === void 0 ? null : _ref$appGroup,
          _ref$isDev = _ref.isDev,
          isDev = _ref$isDev === void 0 ? false : _ref$isDev;

      _get(_getPrototypeOf(RNAiquaIOS), "configure", this).call(this, {
        appId: appId,
        senderId: senderId,
        appGroup: appGroup,
        isDev: isDev
      });

      RNAiquaSdk.onStartWithAppGroup(appId, appGroup, isDev);
    }
    /**
     * @param {String} token apns token value
     */

  }, {
    key: "setToken",
    value: function setToken(token) {
      if (!RNAiquaIOS.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setToken(token);
    }
  }]);

  return RNAiquaIOS;
}(RNAiquaBase);

export default RNAiquaIOS;
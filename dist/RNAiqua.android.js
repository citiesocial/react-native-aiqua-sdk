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

var RNAiquaAndroid =
/*#__PURE__*/
function (_RNAiquaBase) {
  _inherits(RNAiquaAndroid, _RNAiquaBase);

  function RNAiquaAndroid() {
    _classCallCheck(this, RNAiquaAndroid);

    return _possibleConstructorReturn(this, _getPrototypeOf(RNAiquaAndroid).apply(this, arguments));
  }

  _createClass(RNAiquaAndroid, null, [{
    key: "configure",
    value: function configure(_ref) {
      var appId = _ref.appId,
          _ref$senderId = _ref.senderId,
          senderId = _ref$senderId === void 0 ? null : _ref$senderId,
          _ref$appGroup = _ref.appGroup,
          appGroup = _ref$appGroup === void 0 ? null : _ref$appGroup,
          _ref$isDev = _ref.isDev,
          isDev = _ref$isDev === void 0 ? false : _ref$isDev;

      _get(_getPrototypeOf(RNAiquaAndroid), "configure", this).call(this, {
        appId: appId,
        senderId: senderId,
        appGroup: appGroup,
        isDev: isDev
      });

      RNAiquaSdk.onStartWithSenderId(appId, senderId);
    }
    /**
     * Sets specified custom fields
     * @param {String} key
     * @param value boolean, string, or number
     */

  }, {
    key: "setCustomKey",
    value: function setCustomKey(key, value) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      if (typeof value === 'boolean') {
        return RNAiquaSdk.setCustomKeyBool(key, value);
      }

      if (typeof value === 'string') {
        return RNAiquaSdk.setCustomKeyString(key, value);
      }

      if (typeof value === 'number') {
        if (value % 1 === 0) {
          RNAiquaSdk.setCustomKeyInt(key, value);
        } else {
          RNAiquaSdk.setCustomKeyFloat(key, value);
        }
      }
    }
    /**
     * @param {String} phoneNo phone number of user
     */

  }, {
    key: "setPhoneNumber",
    value: function setPhoneNumber(phoneNo) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setPhoneNumber(phoneNo);
    }
    /**
     * Apart from default user profile parameters,
     * you can log the UTM source through which the user installed the app,
     * @param {String} utmSource
     */

  }, {
    key: "setUtmSource",
    value: function setUtmSource(utmSource) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setUtmSource(utmSource);
    }
    /**
     * Apart from default user profile parameters,
     * you can log the UTM source through which the user installed the app,
     * @param {String} utmMedium
     */

  }, {
    key: "setUtmMedium",
    value: function setUtmMedium(utmMedium) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setUtmMedium(utmMedium);
    }
    /**
     * Apart from default user profile parameters,
     * you can log the UTM source through which the user installed the app,
     * @param {String} utmTerm
     */

  }, {
    key: "setUtmTerm",
    value: function setUtmTerm(utmTerm) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setUtmTerm(utmTerm);
    }
    /**
     * Apart from default user profile parameters,
     * you can log the UTM source through which the user installed the app,
     * @param {String} utmContent
     */

  }, {
    key: "setUtmContent",
    value: function setUtmContent(utmContent) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setUtmContent(utmContent);
    }
    /**
     * Apart from default user profile parameters,
     * you can log the UTM source through which the user installed the app,
     * @param {String} utmCampaign
     */

  }, {
    key: "setUtmCampaign",
    value: function setUtmCampaign(utmCampaign) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setUtmCampaign(utmCampaign);
    }
    /**
     * @param {String} gaID used as an identifier to pass data to Google Analytics
     */

  }, {
    key: "enableGATrackingWithGAID",
    value: function enableGATrackingWithGAID(gaID) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.enableGATrackingWithGAID(gaID);
    }
    /**
     * @param {Function} callback invoked with parameter (String tracker Id set by developer, empty if not set)
     */

  }, {
    key: "getTrackerId",
    value: function getTrackerId(callback) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.getTrackerId(callback);
    }
    /**
     * Disables GA Tracking, if already enabled.
     */

  }, {
    key: "disableGATracking",
    value: function disableGATracking() {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.disableGATracking();
    }
    /**
     * Disables location tracking.
     */

  }, {
    key: "disableLocationTracking",
    value: function disableLocationTracking() {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.disableLocationTracking();
    }
    /**
     * Enables push booster.
     */

  }, {
    key: "enablePushBooster",
    value: function enablePushBooster() {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.enablePushBooster();
    }
    /**
     * @param {String} message value of message parameter from extras present in google cloud message
     * @param {Function} callback invoked with parameter (true if it is from Quantumgraph else false)
     */

  }, {
    key: "isQGMessage",
    value: function isQGMessage(message, callback) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.isQGMessage(message, callback);
    }
    /**
     * @param {Number} maxNumStoredNotifications number of stored notifications
     */

  }, {
    key: "setMaxNumStoredNotifications",
    value: function setMaxNumStoredNotifications(maxNumStoredNotifications) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.setMaxNumStoredNotifications(maxNumStoredNotifications);
    }
    /**
     * @param {Function} callback invoked with paremeter (the stored notifications in String which can be parsed to JSON objects)
     */

  }, {
    key: "getStoredNotifications",
    value: function getStoredNotifications(callback) {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.getStoredNotifications(callback);
    }
    /**
     * Deletes all the stored notifications.
     */

  }, {
    key: "deleteStoredNotifications",
    value: function deleteStoredNotifications() {
      if (!RNAiquaAndroid.isConfigured) {
        console.warn('Must configure the SDK first!');
        return;
      }

      RNAiquaSdk.deleteStoredNotifications();
    }
  }]);

  return RNAiquaAndroid;
}(RNAiquaBase);

export default RNAiquaAndroid;
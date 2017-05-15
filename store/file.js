'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _focusCore = require('focus-core');

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies.


var CoreStore = _focusCore.store.CoreStore;


var definition = {
    files: 'files'
};

/**
* Class standing for the account relative data store.
*/

var FileStore = function (_CoreStore) {
    _inherits(FileStore, _CoreStore);

    function FileStore(conf) {
        _classCallCheck(this, FileStore);

        conf = conf || {};
        conf.definition = conf.definition || definition;
        return _possibleConstructorReturn(this, _CoreStore.call(this, conf));
    }

    return FileStore;
}(CoreStore);

exports.default = FileStore;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOlsiQ29yZVN0b3JlIiwiZGVmaW5pdGlvbiIsImZpbGVzIiwiRmlsZVN0b3JlIiwiY29uZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7Ozs7OytlQURBOzs7SUFFT0EsUyxvQkFBQUEsUzs7O0FBRVAsSUFBTUMsYUFBYTtBQUNmQyxXQUFPO0FBRFEsQ0FBbkI7O0FBSUE7Ozs7SUFHTUMsUzs7O0FBQ0YsdUJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZEEsZUFBT0EsUUFBUSxFQUFmO0FBQ0FBLGFBQUtILFVBQUwsR0FBa0JHLEtBQUtILFVBQUwsSUFBbUJBLFVBQXJDO0FBRmMsZ0RBR2Qsc0JBQU1HLElBQU4sQ0FIYztBQUlqQjs7O0VBTG1CSixTOztrQkFRVEcsUyIsImZpbGUiOiJmaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EZXBlbmRlbmNpZXMuXHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJ2ZvY3VzLWNvcmUnO1xyXG5jb25zdCB7Q29yZVN0b3JlfSA9IHN0b3JlO1xyXG5cclxuY29uc3QgZGVmaW5pdGlvbiA9IHtcclxuICAgIGZpbGVzOiAnZmlsZXMnXHJcbn07XHJcblxyXG4vKipcclxuKiBDbGFzcyBzdGFuZGluZyBmb3IgdGhlIGFjY291bnQgcmVsYXRpdmUgZGF0YSBzdG9yZS5cclxuKi9cclxuY2xhc3MgRmlsZVN0b3JlIGV4dGVuZHMgQ29yZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmYpIHtcclxuICAgICAgICBjb25mID0gY29uZiB8fCB7fTtcclxuICAgICAgICBjb25mLmRlZmluaXRpb24gPSBjb25mLmRlZmluaXRpb24gfHwgZGVmaW5pdGlvbjtcclxuICAgICAgICBzdXBlcihjb25mKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVN0b3JlO1xyXG4iXX0=
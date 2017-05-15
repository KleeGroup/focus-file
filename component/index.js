'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.scss');

var _builtInStore = require('../store/built-in-store');

var _builtInStore2 = _interopRequireDefault(_builtInStore);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _focusCore = require('focus-core');

var _dropzone = require('dropzone');

var _dropzone2 = _interopRequireDefault(_dropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } //Dependencies


var propTypes = {
    withCredentials: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    url: _react.PropTypes.string,
    paramName: _react.PropTypes.string,
    previewTemplate: _react.PropTypes.string,
    removalTimeout: _react.PropTypes.number,
    store: _react.PropTypes.object,
    onFileSuccess: _react.PropTypes.func,
    onFileComplete: _react.PropTypes.func
};

var defaultProps = {
    paramName: 'upfile',
    removalTimeout: 1500,
    store: _builtInStore2.default
};

/**
* Component use for uploading files.
*/

var FileUploadZone = function (_Component) {
    _inherits(FileUploadZone, _Component);

    function FileUploadZone(props) {
        _classCallCheck(this, FileUploadZone);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this._onFileComplete = function (file) {
            var _this$props = _this.props,
                removalTimeout = _this$props.removalTimeout,
                store = _this$props.store;

            setTimeout(function () {
                _this.dropzone.removeFile(file);
            }, removalTimeout);
            var files = store.getFiles() || [];
            files.push(file);
            _focusCore.dispatcher.handleServerAction({
                data: { files: files },
                type: 'update'
            });
            if (_this.props.onFileComplete) {
                _this.props.onFileComplete(file);
            }
        };

        _this._onFileSuccess = function (file, response) {
            if (_this.props.onFileSuccess) {
                _this.props.onFileSuccess(file, response);
            }
        };

        var state = {
            dragging: false,
            fileId: _uuid2.default.v4()
        };
        _this.state = state;
        return _this;
    }

    /**
    * Component did mount
    */


    FileUploadZone.prototype.componentDidMount = function componentDidMount() {
        var fileId = this.state.fileId;

        this.dropzone = new _dropzone2.default('div[data-file-upload=\'' + fileId + '\']', this.props);
        this.dropzone.on('complete', this._onFileComplete);
        this.dropzone.on('success', this._onFileSuccess);
    };

    /**
    * Component will receive props
    */


    FileUploadZone.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if (newProps.url) {
            this.dropzone.options.url = newProps.url;
        }
        if (newProps.headers) {
            this.dropzone.options.headers = newProps.headers;
        }
    };

    /**
    * Render the component
    * @return {JSX} The rendered component
    */
    FileUploadZone.prototype.render = function render() {
        var fileId = this.state.fileId;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'file-upload' },
            _react2.default.createElement(
                'div',
                { className: 'dz-clickable', 'data-file-upload': fileId, 'data-focus': 'file-upload-dropzone' },
                _react2.default.createElement(
                    'div',
                    { className: 'dz-message needsclick' },
                    this.props.children
                )
            )
        );
    };

    return FileUploadZone;
}(_react.Component);

FileUploadZone.displayName = 'FileUploadZone';
FileUploadZone.defaultProps = defaultProps;
FileUploadZone.propTypes = propTypes;

exports.default = FileUploadZone;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwid2l0aENyZWRlbnRpYWxzIiwiYm9vbCIsInN0eWxlIiwib2JqZWN0IiwidXJsIiwic3RyaW5nIiwicGFyYW1OYW1lIiwicHJldmlld1RlbXBsYXRlIiwicmVtb3ZhbFRpbWVvdXQiLCJudW1iZXIiLCJzdG9yZSIsIm9uRmlsZVN1Y2Nlc3MiLCJmdW5jIiwib25GaWxlQ29tcGxldGUiLCJkZWZhdWx0UHJvcHMiLCJGaWxlVXBsb2FkWm9uZSIsInByb3BzIiwiX29uRmlsZUNvbXBsZXRlIiwic2V0VGltZW91dCIsImRyb3B6b25lIiwicmVtb3ZlRmlsZSIsImZpbGUiLCJmaWxlcyIsImdldEZpbGVzIiwicHVzaCIsImhhbmRsZVNlcnZlckFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiX29uRmlsZVN1Y2Nlc3MiLCJyZXNwb25zZSIsInN0YXRlIiwiZHJhZ2dpbmciLCJmaWxlSWQiLCJ2NCIsImNvbXBvbmVudERpZE1vdW50Iiwib24iLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV3UHJvcHMiLCJvcHRpb25zIiwiaGVhZGVycyIsInJlbmRlciIsImNoaWxkcmVuIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7K2VBTkE7OztBQVFBLElBQU1BLFlBQVk7QUFDZEMscUJBQWlCLGlCQUFVQyxJQURiO0FBRWRDLFdBQU8saUJBQVVDLE1BRkg7QUFHZEMsU0FBSyxpQkFBVUMsTUFIRDtBQUlkQyxlQUFXLGlCQUFVRCxNQUpQO0FBS2RFLHFCQUFpQixpQkFBVUYsTUFMYjtBQU1kRyxvQkFBZ0IsaUJBQVVDLE1BTlo7QUFPZEMsV0FBTyxpQkFBVVAsTUFQSDtBQVFkUSxtQkFBZSxpQkFBVUMsSUFSWDtBQVNkQyxvQkFBZ0IsaUJBQVVEO0FBVFosQ0FBbEI7O0FBWUEsSUFBTUUsZUFBZTtBQUNqQlIsZUFBVyxRQURNO0FBRWpCRSxvQkFBZ0IsSUFGQztBQUdqQkU7QUFIaUIsQ0FBckI7O0FBTUE7Ozs7SUFHTUssYzs7O0FBQ0YsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxREFDZixzQkFBTUEsS0FBTixDQURlOztBQUFBLGNBaUNuQkMsZUFqQ21CLEdBaUNELGdCQUFRO0FBQUEsOEJBQ1UsTUFBS0QsS0FEZjtBQUFBLGdCQUNmUixjQURlLGVBQ2ZBLGNBRGU7QUFBQSxnQkFDQ0UsS0FERCxlQUNDQSxLQUREOztBQUV0QlEsdUJBQVcsWUFBTTtBQUNiLHNCQUFLQyxRQUFMLENBQWNDLFVBQWQsQ0FBeUJDLElBQXpCO0FBQ0gsYUFGRCxFQUVHYixjQUZIO0FBR0EsZ0JBQU1jLFFBQVFaLE1BQU1hLFFBQU4sTUFBb0IsRUFBbEM7QUFDQUQsa0JBQU1FLElBQU4sQ0FBV0gsSUFBWDtBQUNBLGtDQUFXSSxrQkFBWCxDQUE4QjtBQUMxQkMsc0JBQU0sRUFBQ0osWUFBRCxFQURvQjtBQUUxQkssc0JBQU07QUFGb0IsYUFBOUI7QUFJQSxnQkFBSSxNQUFLWCxLQUFMLENBQVdILGNBQWYsRUFBK0I7QUFDM0Isc0JBQUtHLEtBQUwsQ0FBV0gsY0FBWCxDQUEwQlEsSUFBMUI7QUFDSDtBQUNKLFNBL0NrQjs7QUFBQSxjQWlEbkJPLGNBakRtQixHQWlERixVQUFDUCxJQUFELEVBQU9RLFFBQVAsRUFBb0I7QUFDakMsZ0JBQUcsTUFBS2IsS0FBTCxDQUFXTCxhQUFkLEVBQTZCO0FBQ3pCLHNCQUFLSyxLQUFMLENBQVdMLGFBQVgsQ0FBeUJVLElBQXpCLEVBQStCUSxRQUEvQjtBQUNIO0FBQ0osU0FyRGtCOztBQUVmLFlBQU1DLFFBQVE7QUFDVkMsc0JBQVUsS0FEQTtBQUVWQyxvQkFBUSxlQUFLQyxFQUFMO0FBRkUsU0FBZDtBQUlBLGNBQUtILEtBQUwsR0FBYUEsS0FBYjtBQU5lO0FBT2xCOztBQUVEOzs7Ozs2QkFHQUksaUIsZ0NBQW9CO0FBQUEsWUFDVEYsTUFEUyxHQUNDLEtBQUtGLEtBRE4sQ0FDVEUsTUFEUzs7QUFFaEIsYUFBS2IsUUFBTCxHQUFnQixtREFBMkNhLE1BQTNDLFVBQXVELEtBQUtoQixLQUE1RCxDQUFoQjtBQUNBLGFBQUtHLFFBQUwsQ0FBY2dCLEVBQWQsQ0FBaUIsVUFBakIsRUFBNkIsS0FBS2xCLGVBQWxDO0FBQ0EsYUFBS0UsUUFBTCxDQUFjZ0IsRUFBZCxDQUFpQixTQUFqQixFQUE0QixLQUFLUCxjQUFqQztBQUNILEs7O0FBRUQ7Ozs7OzZCQUdBUSx5QixzQ0FBMEJDLFEsRUFBVTtBQUNoQyxZQUFJQSxTQUFTakMsR0FBYixFQUFrQjtBQUNkLGlCQUFLZSxRQUFMLENBQWNtQixPQUFkLENBQXNCbEMsR0FBdEIsR0FBNEJpQyxTQUFTakMsR0FBckM7QUFDSDtBQUNELFlBQUlpQyxTQUFTRSxPQUFiLEVBQXNCO0FBQ2xCLGlCQUFLcEIsUUFBTCxDQUFjbUIsT0FBZCxDQUFzQkMsT0FBdEIsR0FBZ0NGLFNBQVNFLE9BQXpDO0FBQ0g7QUFFSixLOztBQXlCRDs7Ozs2QkFJQUMsTSxxQkFBUztBQUFBLFlBQ0VSLE1BREYsR0FDWSxLQUFLRixLQURqQixDQUNFRSxNQURGOztBQUVMLGVBQ0k7QUFBQTtBQUFBLGNBQUssY0FBVyxhQUFoQjtBQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGNBQWYsRUFBOEIsb0JBQWtCQSxNQUFoRCxFQUF3RCxjQUFXLHNCQUFuRTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLHVCQUFmO0FBQ0sseUJBQUtoQixLQUFMLENBQVd5QjtBQURoQjtBQURKO0FBREosU0FESjtBQVNILEs7Ozs7O0FBR0wxQixlQUFlMkIsV0FBZixHQUE2QixnQkFBN0I7QUFDQTNCLGVBQWVELFlBQWYsR0FBOEJBLFlBQTlCO0FBQ0FDLGVBQWVoQixTQUFmLEdBQTJCQSxTQUEzQjs7a0JBRWVnQixjIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlcGVuZGVuY2llc1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBidWlsdEluU3RvcmUgZnJvbSAnLi4vc3RvcmUvYnVpbHQtaW4tc3RvcmUnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IHtkaXNwYXRjaGVyfSBmcm9tICdmb2N1cy1jb3JlJztcclxuaW1wb3J0IERyb3B6b25lRm9jdXMgZnJvbSAnZHJvcHpvbmUnO1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGFyYW1OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJldmlld1RlbXBsYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcmVtb3ZhbFRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uRmlsZVN1Y2Nlc3M6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25GaWxlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwYXJhbU5hbWU6ICd1cGZpbGUnLFxyXG4gICAgcmVtb3ZhbFRpbWVvdXQ6IDE1MDAsXHJcbiAgICBzdG9yZTogYnVpbHRJblN0b3JlXHJcbn07XHJcblxyXG4vKipcclxuKiBDb21wb25lbnQgdXNlIGZvciB1cGxvYWRpbmcgZmlsZXMuXHJcbiovXHJcbmNsYXNzIEZpbGVVcGxvYWRab25lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpbGVJZDogdXVpZC52NCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENvbXBvbmVudCBkaWQgbW91bnRcclxuICAgICovXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7ZmlsZUlkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgdGhpcy5kcm9wem9uZSA9IG5ldyBEcm9wem9uZUZvY3VzKGBkaXZbZGF0YS1maWxlLXVwbG9hZD0nJHtmaWxlSWR9J11gLCB0aGlzLnByb3BzKTtcclxuICAgICAgICB0aGlzLmRyb3B6b25lLm9uKCdjb21wbGV0ZScsIHRoaXMuX29uRmlsZUNvbXBsZXRlKTtcclxuICAgICAgICB0aGlzLmRyb3B6b25lLm9uKCdzdWNjZXNzJywgdGhpcy5fb25GaWxlU3VjY2Vzcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgKiBDb21wb25lbnQgd2lsbCByZWNlaXZlIHByb3BzXHJcbiAgICAqL1xyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xyXG4gICAgICAgIGlmIChuZXdQcm9wcy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5kcm9wem9uZS5vcHRpb25zLnVybCA9IG5ld1Byb3BzLnVybDsgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdQcm9wcy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHpvbmUub3B0aW9ucy5oZWFkZXJzID0gbmV3UHJvcHMuaGVhZGVyczsgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX29uRmlsZUNvbXBsZXRlID0gZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3JlbW92YWxUaW1lb3V0LCBzdG9yZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3B6b25lLnJlbW92ZUZpbGUoZmlsZSk7XHJcbiAgICAgICAgfSwgcmVtb3ZhbFRpbWVvdXQpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVzID0gc3RvcmUuZ2V0RmlsZXMoKSB8fCBbXTtcclxuICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xyXG4gICAgICAgIGRpc3BhdGNoZXIuaGFuZGxlU2VydmVyQWN0aW9uKHtcclxuICAgICAgICAgICAgZGF0YToge2ZpbGVzfSxcclxuICAgICAgICAgICAgdHlwZTogJ3VwZGF0ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkZpbGVDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRmlsZUNvbXBsZXRlKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfb25GaWxlU3VjY2VzcyA9IChmaWxlLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMub25GaWxlU3VjY2Vzcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRmlsZVN1Y2Nlc3MoZmlsZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogUmVuZGVyIHRoZSBjb21wb25lbnRcclxuICAgICogQHJldHVybiB7SlNYfSBUaGUgcmVuZGVyZWQgY29tcG9uZW50XHJcbiAgICAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtmaWxlSWR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtZm9jdXM9J2ZpbGUtdXBsb2FkJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkei1jbGlja2FibGUnIGRhdGEtZmlsZS11cGxvYWQ9e2ZpbGVJZH0gZGF0YS1mb2N1cz0nZmlsZS11cGxvYWQtZHJvcHpvbmUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkei1tZXNzYWdlIG5lZWRzY2xpY2snPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5GaWxlVXBsb2FkWm9uZS5kaXNwbGF5TmFtZSA9ICdGaWxlVXBsb2FkWm9uZSc7XHJcbkZpbGVVcGxvYWRab25lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuRmlsZVVwbG9hZFpvbmUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZFpvbmU7XHJcbiJdfQ==
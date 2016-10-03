webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _JournalEditor = __webpack_require__(172);

	var _JournalEditor2 = _interopRequireDefault(_JournalEditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var journalContainer = document.getElementById('journal-editor'); /**
	                                                                   * Created by Hieu Le on 10/3/2016.
	                                                                   */

	if (journalContainer) {
	  _reactDom2.default.render(_react2.default.createElement(_JournalEditor2.default, null), journalContainer);
	}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _JournalDate = __webpack_require__(173);

	var _JournalDate2 = _interopRequireDefault(_JournalDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var JournalEditor = function (_React$Component) {
	    _inherits(JournalEditor, _React$Component);

	    function JournalEditor(props) {
	        _classCallCheck(this, JournalEditor);

	        var _this = _possibleConstructorReturn(this, (JournalEditor.__proto__ || Object.getPrototypeOf(JournalEditor)).call(this, props));

	        _this.state = {
	            timestamp: Date.now()
	        };

	        _this._onDateChanged = _this._onDateChanged.bind(_this);
	        return _this;
	    }

	    _createClass(JournalEditor, [{
	        key: 'render',
	        value: function render() {
	            var timestamp = this.state.timestamp;


	            return _react2.default.createElement(
	                'div',
	                { className: 'journal-editor' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'journal-header' },
	                    _react2.default.createElement(_JournalDate2.default, { timestamp: timestamp, onDateChanged: this._onDateChanged })
	                )
	            );
	        }
	    }, {
	        key: '_onDateChanged',
	        value: function _onDateChanged(timestamp) {
	            this.setState({
	                timestamp: timestamp
	            });
	        }
	    }]);

	    return JournalEditor;
	}(_react2.default.Component);

	exports.default = JournalEditor;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(174);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var JournalDate = function (_React$Component) {
	    _inherits(JournalDate, _React$Component);

	    function JournalDate(props) {
	        _classCallCheck(this, JournalDate);

	        var _this = _possibleConstructorReturn(this, (JournalDate.__proto__ || Object.getPrototypeOf(JournalDate)).call(this, props));

	        _this._goToNextDate = _this._goToNextDate.bind(_this);
	        _this._goToPrevDate = _this._goToPrevDate.bind(_this);
	        _this._dateObj = null;
	        return _this;
	    }

	    _createClass(JournalDate, [{
	        key: 'render',
	        value: function render() {
	            var dateObj = (0, _moment2.default)(this.props.timestamp).startOf('date');
	            var dateStr = dateObj.format("L");

	            this._dateObj = dateObj;

	            return _react2.default.createElement(
	                'div',
	                { className: 'journal-date' },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'display-value' },
	                    dateStr
	                )
	            );
	        }
	    }, {
	        key: '_goToPrevDate',
	        value: function _goToPrevDate() {
	            this._dateObj.subtract(1, 'days');

	            if (this.props.onDateChanged) {
	                this.props.onDateChanged(this._dateObj.valueOf());
	            }
	        }
	    }, {
	        key: '_goToNextDate',
	        value: function _goToNextDate() {
	            this._dateObj.add(1, 'days');

	            if (this.props.onDateChanged) {
	                this.props.onDateChanged(this._dateObj.valueOf());
	            }
	        }
	    }]);

	    return JournalDate;
	}(_react2.default.Component);

	JournalDate.propTypes = {
	    timestamp: _react2.default.PropTypes.number.isRequired,
	    onDateChanged: _react2.default.PropTypes.func
	};

	exports.default = JournalDate;

/***/ }

});
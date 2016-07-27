/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://0.0.0.0:80";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Page = __webpack_require__(4);
	
	var _Page2 = _interopRequireDefault(_Page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	
	    _reactDom2.default.render(_react2.default.createElement(_Page2.default, null), document.querySelector('#container'));
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AddressSelect = __webpack_require__(5);
	
	var _AddressSelect2 = _interopRequireDefault(_AddressSelect);
	
	var _JQPage = __webpack_require__(7);
	
	var _JQPage2 = _interopRequireDefault(_JQPage);
	
	var _reactRouter = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Nav = _react2.default.createClass({
	    displayName: 'Nav',
	    render: function render() {
	        return _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/jq' },
	                    'bootstrap'
	                )
	            ),
	            _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/address' },
	                    'address'
	                )
	            ),
	            this.props.children
	        );
	    }
	});
	
	var Page = _react2.default.createClass({
	    displayName: 'Page',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                _reactRouter.Router,
	                { history: _reactRouter.hashHistory },
	                _react2.default.createElement(
	                    _reactRouter.Route,
	                    { path: '/', component: Nav },
	                    _react2.default.createElement(_reactRouter.Route, { path: '/jq', component: _JQPage2.default }),
	                    _react2.default.createElement(_reactRouter.Route, { path: '/address', component: _AddressSelect2.default })
	                )
	            )
	        );
	    }
	});
	
	exports.default = Page;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DefaultSelect = __webpack_require__(6);
	
	var _DefaultSelect2 = _interopRequireDefault(_DefaultSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddressSelectForm = _react2.default.createClass({
	    displayName: 'AddressSelectForm',
	    getSubList: function getSubList(value) {
	        return function () {
	            var arr = [];
	
	            if (value == 0) {
	                return arr;
	            }
	
	            console.log('getList of ' + value);
	
	            for (var i = 0; i < 10; i++) {
	                arr.push({ name: value + ':' + i, value: value + ':' + i });
	            }
	            return arr;
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            provinceSelectedValue: 0,
	            citySelectedValue: 0,
	            distSelectedValue: 0
	        };
	    },
	    provinceChange: function provinceChange(value) {
	        this.setState({
	            provinceSelectedValue: value,
	            citySelectedValue: 0,
	            distSelectedValue: 0
	        });
	    },
	    cityChange: function cityChange(value) {
	        this.setState({
	            citySelectedValue: value,
	            distSelectedValue: 0
	        });
	    },
	    distChange: function distChange(value) {
	        this.setState({
	            distSelectedValue: value
	        });
	    },
	    provinceDefaultSelect: function provinceDefaultSelect(provinceList) {
	        console.log('set default province');
	        this.setState({
	            provinceSelectedValue: provinceList[0].value
	        });
	    },
	    cityDefaultSelect: function cityDefaultSelect(cityList) {
	        console.log('set default city');
	        this.setState({
	            citySelectedValue: cityList[0].value
	        });
	    },
	    distDefaultSelect: function distDefaultSelect(distList) {
	        console.log('set default dist');
	        this.setState({
	            distSelectedValue: distList[0].value
	        });
	    },
	    render: function render() {
	
	        var provinceList = [{ name: 'aaa', value: 'aaa' }, { name: 'bbb', value: 'bbb' }, { name: 'ccc', value: 'ccc' }];
	
	        return _react2.default.createElement(
	            'main',
	            null,
	            _react2.default.createElement(_DefaultSelect2.default, { selectedValue: this.state.provinceSelectedValue, onSelectChange: this.provinceChange,
	                setDefaultOption: this.provinceDefaultSelect,
	                options: provinceList }),
	            _react2.default.createElement(_DefaultSelect2.default, { selectedValue: this.state.citySelectedValue,
	                getDataKey: this.state.provinceSelectedValue,
	                getData: this.getSubList(this.state.provinceSelectedValue),
	                onSelectChange: this.cityChange, setDefaultOption: this.cityDefaultSelect }),
	            _react2.default.createElement(_DefaultSelect2.default, { selectedValue: this.state.distSelectedValue, getDataKey: this.state.citySelectedValue,
	                getData: this.getSubList(this.state.citySelectedValue), onSelectChange: this.distChange,
	                setDefaultOption: this.distDefaultSelect })
	        );
	    }
	});
	
	exports.default = AddressSelectForm;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DefaultSelect = _react2.default.createClass({
	    displayName: 'DefaultSelect',
	
	
	    propTypes: {
	        options: _react2.default.PropTypes.array,
	        getData: _react2.default.PropTypes.func,
	        setDefaultOption: _react2.default.PropTypes.func,
	        onSelectChange: _react2.default.PropTypes.func
	    },
	
	    getDefaultOption: function getDefaultOption(options) {
	        if (options && options.length) {
	            return options[0].value;
	        }
	        return 0;
	    },
	    getInitialState: function getInitialState() {
	        return {
	            options: this.props.options || [],
	            selectedValue: this.props.selectedValue
	        };
	    },
	    handleSelectChange: function handleSelectChange(event) {
	        this.props.onSelectChange(event.target.value);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	
	        if (nextProps.getDataKey && nextProps.getDataKey != this.props.getDataKey) {
	
	            var options = nextProps.getData();
	
	            this.setState({
	                options: options
	            });
	            nextProps.setDefaultOption(options);
	        }
	    },
	    componentDidMount: function componentDidMount() {
	
	        if (this.state.options.length) {
	            this.props.setDefaultOption(this.state.options);
	        }
	    },
	    render: function render() {
	
	        var optionsList = this.state.options.map(function (o, i) {
	            return _react2.default.createElement(
	                'option',
	                { key: o.value, value: o.value },
	                o.name
	            );
	        });
	
	        var defaultValue = optionsList.length ? optionsList[0].value : 0;
	
	        var defaultOption = defaultValue == 0 ? _react2.default.createElement(
	            'option',
	            { value: 0 },
	            '请选择'
	        ) : '';
	
	        return _react2.default.createElement(
	            'select',
	            { value: this.props.selectedValue || defaultValue, onChange: this.handleSelectChange },
	            defaultOption,
	            optionsList,
	            ' '
	        );
	    }
	});
	
	exports.default = DefaultSelect;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(8);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Simple pure-React component so we don't have to remember
	// Bootstrap's classes
	var BootstrapButton = _react2.default.createClass({
	    displayName: 'BootstrapButton',
	
	    render: function render() {
	        return _react2.default.createElement('a', _extends({}, this.props, {
	            href: 'javascript:;',
	            role: 'button',
	            className: (this.props.className || '') + ' btn' }));
	    }
	});
	
	var BootstrapModal = _react2.default.createClass({
	    displayName: 'BootstrapModal',
	
	    // The following two methods are the only places we need to
	    // integrate Bootstrap or jQuery with the components lifecycle methods.
	    componentDidMount: function componentDidMount() {
	        // When the component is added, turn it into a modal
	        (0, _jquery2.default)(this.refs.root).modal({ backdrop: 'static', keyboard: false, show: false });
	
	        // Bootstrap's modal class exposes a few events for hooking into modal
	        // functionality. Lets hook into one of them:
	        (0, _jquery2.default)(this.refs.root).on('hidden.bs.modal', this.handleHidden);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        (0, _jquery2.default)(this.refs.root).off('hidden.bs.modal', this.handleHidden);
	    },
	    close: function close() {
	        (0, _jquery2.default)(this.refs.root).modal('hide');
	    },
	    open: function open() {
	        (0, _jquery2.default)(this.refs.root).modal('show');
	    },
	    render: function render() {
	        var confirmButton = null;
	        var cancelButton = null;
	
	        if (this.props.confirm) {
	            confirmButton = _react2.default.createElement(
	                BootstrapButton,
	                {
	                    onClick: this.handleConfirm,
	                    className: 'btn-primary' },
	                this.props.confirm
	            );
	        }
	        if (this.props.cancel) {
	            cancelButton = _react2.default.createElement(
	                BootstrapButton,
	                { onClick: this.handleCancel, className: 'btn-default' },
	                this.props.cancel
	            );
	        }
	
	        return _react2.default.createElement(
	            'div',
	            { className: 'modal fade', ref: 'root' },
	            _react2.default.createElement(
	                'div',
	                { className: 'modal-dialog' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'modal-content' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-header' },
	                        _react2.default.createElement(
	                            'button',
	                            {
	                                type: 'button',
	                                className: 'close',
	                                onClick: this.handleCancel },
	                            '×'
	                        ),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            this.props.title
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-body' },
	                        this.props.children
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'modal-footer' },
	                        cancelButton,
	                        confirmButton
	                    )
	                )
	            )
	        );
	    },
	    handleCancel: function handleCancel() {
	        if (this.props.onCancel) {
	            this.props.onCancel();
	        }
	    },
	    handleConfirm: function handleConfirm() {
	        if (this.props.onConfirm) {
	            this.props.onConfirm();
	        }
	    },
	    handleHidden: function handleHidden() {
	        if (this.props.onHidden) {
	            this.props.onHidden();
	        }
	    }
	});
	
	var JQPage = _react2.default.createClass({
	    displayName: 'JQPage',
	
	    handleCancel: function handleCancel() {
	        if (confirm('Are you sure you want to cancel?')) {
	            this.refs.modal.close();
	        }
	    },
	    render: function render() {
	        var modal = null;
	        modal = _react2.default.createElement(
	            BootstrapModal,
	            {
	                ref: 'modal',
	                confirm: 'OK',
	                cancel: 'Cancel',
	                onCancel: this.handleCancel,
	                onConfirm: this.closeModal,
	                onHidden: this.handleModalDidClose,
	                title: 'Hello, Bootstrap!' },
	            'This is a React component powered by jQuery and Bootstrap!'
	        );
	        return _react2.default.createElement(
	            'div',
	            { className: 'example' },
	            modal,
	            _react2.default.createElement(
	                BootstrapButton,
	                { onClick: this.openModal, className: 'btn-default' },
	                'Open modal'
	            )
	        );
	    },
	    openModal: function openModal() {
	        this.refs.modal.open();
	    },
	    closeModal: function closeModal() {
	        this.refs.modal.close();
	    },
	    handleModalDidClose: function handleModalDidClose() {
	        alert("The modal has been dismissed!");
	    }
	});
	
	exports.default = JQPage;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = window.$;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
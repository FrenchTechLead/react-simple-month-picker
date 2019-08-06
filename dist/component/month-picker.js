'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('./../css/month-picker.css');

require('../css/picker-styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPicker = function (_Component) {
    _inherits(MonthPicker, _Component);

    function MonthPicker(props) {
        _classCallCheck(this, MonthPicker);

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var _this = _possibleConstructorReturn(this, (MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).call(this, props));

        _this.state = {
            cells: [],
            selectedDate: props.selectedDate || (0, _moment2.default)(),
            currentView: props.selectedDate ? "months" : "years",
            renderDate: props.selectedDate ? true : false,
            months: props.months || months
        };

        _this.selectCell = _this.selectCell.bind(_this);
        _this.previous = _this.previous.bind(_this);
        _this.next = _this.next.bind(_this);
        return _this;
    }

    _createClass(MonthPicker, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var cells = [];
            if (this.state.currentView === "years") {
                var year = (0, _moment2.default)().year() - 6;
                for (var i = 0; i < 12; i++) {
                    cells.push(year + i);
                }
            } else {
                cells = this.state.months;
            }
            this.setState({ cells: cells });
        }
    }, {
        key: 'selectCell',
        value: function selectCell(cellContent, index) {
            if (typeof cellContent === 'number') {
                var date = this.state.selectedDate;
                date.year(cellContent);
                this.setState({ selectedDate: date });

                var months = this.state.months;
                this.setState({ currentView: "months", renderDate: false });
                this.setState({ cells: months });
            } else {
                var _date = this.state.selectedDate;
                _date.month(index);
                this.setState({ selectedDate: _date, renderDate: true });
                if (this.props.onChange && typeof this.props.onChange === "function") this.props.onChange(this.state.selectedDate);
            }
        }
    }, {
        key: 'previous',
        value: function previous() {
            if (this.state.currentView === "years") {
                var years = this.state.cells;
                for (var i = 0; i < 12; i++) {
                    years[i] -= 12;
                }this.setState({ cells: years, renderDate: false });
            } else {
                var cells = [];
                var year = (0, _moment2.default)().year() - 6;
                for (var _i = 0; _i < 12; _i++) {
                    cells.push(year + _i);
                }this.setState({ cells: cells });
                this.setState({ currentView: "years", renderDate: false });
            }
        }
    }, {
        key: 'next',
        value: function next() {
            if (this.state.currentView === "years") {
                var years = this.state.cells;
                for (var i = 0; i < 12; i++) {
                    years[i] += 12;
                }this.setState({ cells: years, renderDate: false });
            } else {
                var cells = [];
                var year = (0, _moment2.default)().year() - 6;
                for (var _i2 = 0; _i2 < 12; _i2++) {
                    cells.push(year + _i2);
                }this.setState({ cells: cells });
                this.setState({ currentView: "years", renderDate: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var selectedString = "";
            if (this.state.renderDate) {
                selectedString = this.state.selectedDate.format("M-YYYY");
            }
            var head = _react2.default.createElement(
                'div',
                { className: 'section_mp group_mp' },
                _react2.default.createElement(
                    'div',
                    { className: 'col_mp span_1_of_3_mp arrows_mp', onClick: function onClick() {
                            _this2.previous();
                        } },
                    '<'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col_mp span_1_of_3_mp selected_date_mp' },
                    selectedString
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col_mp span_1_of_3_mp arrows_mp', onClick: function onClick() {
                            _this2.next();
                        } },
                    '>'
                )
            );
            var body = [];

            var _loop = function _loop(i) {
                var cellContent = _this2.state.cells[i];
                body.push(_react2.default.createElement(
                    'div',
                    {
                        key: i,
                        onClick: function onClick() {
                            _this2.selectCell(cellContent, i);
                        },
                        className: 'col_mp span_1_of_3_mp ' + (_this2.state.renderDate && _this2.state.selectedDate.month() === i && 'active')
                    },
                    cellContent
                ));
            };

            for (var i = 0; i < 12; i++) {
                _loop(i);
            }

            return _react2.default.createElement(
                'div',
                { className: 'simple-month-picker' },
                head,
                body
            );
        }
    }]);

    return MonthPicker;
}(_react.Component);

exports.default = MonthPicker;
import React from 'react';

var DefaultSelect = React.createClass({

    propTypes: {
        options: React.PropTypes.array,
        getData: React.PropTypes.func,
        setDefaultOption: React.PropTypes.func,
        onSelectChange: React.PropTypes.func
    },

    getDefaultOption(options){
        if (options && options.length) {
            return options[0].value;
        }
        return 0;
    },

    getInitialState() {
        return {
            options: this.props.options || [],
            selectedValue: this.props.selectedValue
        };
    },
    handleSelectChange(event){
        this.props.onSelectChange(event.target.value);
    },
    componentWillReceiveProps(nextProps) {

        if ((nextProps.getDataKey && nextProps.getDataKey != this.props.getDataKey)) {

            let options = nextProps.getData();

            this.setState({
                options: options
            });
            nextProps.setDefaultOption(options);
        }

    },
    componentDidMount(){

        if (this.state.options.length) {
            this.props.setDefaultOption(this.state.options);
        }
    },
    render() {

        var optionsList = this.state.options.map(function (o, i) {
            return <option key={o.value} value={o.value}>{o.name}</option>;
        });

        var defaultValue = optionsList.length ? optionsList[0].value : 0;

        var defaultOption = defaultValue == 0 ? <option value={0}>请选择</option> : '';

        return (
            <select value={this.props.selectedValue||defaultValue} onChange={this.handleSelectChange}>
                {
                    defaultOption
                    }

                {optionsList} </select>);
    }
});

export default DefaultSelect;

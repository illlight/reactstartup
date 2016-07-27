import React from 'react';
import DefaultSelect from './DefaultSelect.jsx'

var AddressSelectForm = React.createClass({

    getSubList(value){
        return function () {
            let arr = [];

            if (value == 0) {
                return arr;
            }

            console.log('getList of ' + value);

            for (let i = 0; i < 10; i++) {
                arr.push({name: value + ':' + i, value: value + ':' + i})
            }
            return arr;
        }
    },
    getInitialState () {
        return {
            provinceSelectedValue: 0,
            citySelectedValue: 0,
            distSelectedValue: 0
        };
    },
    provinceChange(value){
        this.setState({
            provinceSelectedValue: value,
            citySelectedValue: 0,
            distSelectedValue: 0
        });
    },
    cityChange(value){
        this.setState({
            citySelectedValue: value,
            distSelectedValue: 0
        });
    },
    distChange(value){
        this.setState({
            distSelectedValue: value
        });
    },

    provinceDefaultSelect(provinceList){
        console.log('set default province');
        this.setState({
            provinceSelectedValue: provinceList[0].value
        });
    },

    cityDefaultSelect(cityList){
        console.log('set default city');
        this.setState({
            citySelectedValue: cityList[0].value
        });
    },

    distDefaultSelect(distList){
        console.log('set default dist');
        this.setState({
            distSelectedValue: distList[0].value
        });
    },
    render () {

        let provinceList = [{name: 'aaa', value: 'aaa'}, {name: 'bbb', value: 'bbb'}, {name: 'ccc', value: 'ccc'}];

        return (
            <main>
                <DefaultSelect selectedValue={this.state.provinceSelectedValue} onSelectChange={this.provinceChange}
                               setDefaultOption={this.provinceDefaultSelect}
                               options={provinceList}/>
                <DefaultSelect selectedValue={this.state.citySelectedValue}
                               getDataKey={this.state.provinceSelectedValue}
                               getData={this.getSubList(this.state.provinceSelectedValue)}
                               onSelectChange={this.cityChange} setDefaultOption={this.cityDefaultSelect}/>
                <DefaultSelect selectedValue={this.state.distSelectedValue} getDataKey={this.state.citySelectedValue}
                               getData={this.getSubList(this.state.citySelectedValue)} onSelectChange={this.distChange}
                               setDefaultOption={this.distDefaultSelect}/>
            </main>
        );
    }
});

export default AddressSelectForm;

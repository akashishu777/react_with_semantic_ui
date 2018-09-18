import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export class MyComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            data: [ { key: 'Game', value: 'Game', text: 'Game' },
            { key: 'Place', value: 'Place', text: 'Place' },
            { key: 'Month', value: 'Month', text: 'Month' }],

            datachild:[  { value: 'Game', text: 'Game' },
            {  value: 'Place', text: 'Place' },
            { value: 'Month', text: 'Month' }],   

            pop:[]
        };
    }

    componentWillMount() {
        this.setState({
          isFetching: false,
          multiple: true,
          search: true,
          searchQuery: null,
          value: [],
        })
      }
    
    handleChange (event,data){
        console.log(data.value);

    }

    render() {
       return <div style={{marginTop:'100px',marginLeft:'400px'}}>

                <Dropdown
                    options={this.state.data}
                    placeholder='Select'
                    onChange={this.handleChange}
                    selection
                />             
                    <Dropdown
                    options={this.state.datachild}
                    placeholder='Select'
                    selection
                />             
              </div>
       }
 }

import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Divider, Form, Label } from 'semantic-ui-react'


export class MyComponent extends React.Component{

    constructor(){
        super();
        this.state = {

            data: [ { key: 'Game', value: 'Game', text: 'Game' }, { key: 'Place', value: 'Place', text: 'Place' }, { key: 'Month', value: 'Month', text: 'Month' }],

            category:{
                "Game" : ["GTA","NINJA"],
                "Month" : ["JAN","FEB"],
                "Place" : ["DELHI","MUMBAI"]
              },   

            pop:[]
        };

        this.handleChange = this.handleChange.bind(this);
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

      componentDidUpdate(prevProps, prevState) {
          console.log(this.state.pop); 
      }

    handleChange (event,data){

        var as = this.state.category[data.value];
        var tempPop = [];
        
        for(var i=0 ; i< as.length; i++){
            tempPop.push({key: as[i], value: as[i], text: as[i]});
        }

        this.setState({pop: tempPop});
        
    }

    render() {
       return <div style={{padding:"200px"}}>
                <Form>
          <Form.Field>
            <input type='text' placeholder='First name' />
            <Label pointing>Please enter a value</Label>
          </Form.Field>
          <Divider />
      
          <Form.Field>
            <Label pointing='below'>Please enter a value</Label>
            <input type='text' placeholder='Last Name' />
          </Form.Field>
          <Divider />
      
          <Form.Field inline>
            <input type='text' placeholder='Username' />
            <Label pointing='left'>That name is taken!</Label>
          </Form.Field>
          <Divider />
      
          <Form.Field inline>
            <Label pointing='right'>Your password must be 6 characters or more</Label>
            <input type='password' placeholder='Password' />
          </Form.Field>
        </Form>
        <Divider />
        <Form.Field inline>
                <Dropdown
                    options={this.state.data}
                    placeholder='Select'
                    onChange={this.handleChange}
                    selection
                />             
                    <Dropdown
                    style={{marginLeft:"20px"}}
                    options={this.state.pop}
                    placeholder='Select'
                    selection
                />     
       </Form.Field>       
              </div>
       }
 }

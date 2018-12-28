import 'semantic-ui-css/semantic.min.css';

import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Divider, Form, Button, Icon } from 'semantic-ui-react'
import {FixedMenuLayout} from './nav'

export class MyComponent extends React.Component{

    constructor(){
        super();
        this.state = {

            data: [ { key: 'Game', value: 'Game', text: 'Game' }, { key: 'Place', value: 'Place', text: 'Place' }, { key: 'Month', value: 'Month', text: 'Month' }],

            category:{
                "Game" : ["GTA","PUBG"],
                "Month" : ["JAN","FEB"],
                "Place" : ["DELHI","MUMBAI"]
              },   

            pop:[],
            name: '',
            shareholders: [{ name: '' }]
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

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
          if (idx !== sidx) return shareholder;
          return { ...shareholder, name: evt.target.value };
        });
    
        this.setState({ shareholders: newShareholders });
      }
    
      handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
      }
    
      handleAddShareholder = () => {
        this.setState({
          shareholders: this.state.shareholders.concat([{ name: '' }])
        });
      }
    
      handleRemoveShareholder = (idx) => () => {
        this.setState({
          shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
      }

    render() {
       return <div style={{padding:"200px"}}>
                {/* <Form>
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
        </Form> */}
        {/* <Divider />
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
       </Form.Field>        */}

        <form onSubmit={this.handleSubmit}>
        {/* ... */}
        <h4>Experience</h4>

        {this.state.shareholders.map((shareholder, idx) => (
                    <div className="shareholder">
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
                            <Icon style={{marginLeft:"10px"}} onClick={this.handleRemoveShareholder(idx)} link name='close' /> 
                </Form.Field>     
                
                    </div>
        ))}
        <Button style={{marginTop:"10px"}} type="button" onClick={this.handleAddShareholder} positive>Add Experience</Button>
      </form>   
              </div>
       }
 }

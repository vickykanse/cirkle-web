import React, { Component } from 'react';
import Input from './input';
import FolderContainer from './FolderContainer'
import ReactDOM from 'react-dom';


class testimonialblock extends Component {
    constructor(props) {
        super(props);
        this.handleInput=this.handleInput.bind(this);
        this.handleoption=this.handleoption.bind(this);
        this.state={
            data:this.props.data,
            searcharray: '',

        };
    }
    transformJSON=(data, value)=>{
    let newObj=[];
        (function filterJSON(obj, searchValue)
        {
            if(obj.name && (obj.name.indexOf(searchValue) >-1)){
                newObj.push(obj);
                return
            }
            for (var key in obj)
            {
                if (typeof obj[key] == "object" && obj[key] !== null){
                    filterJSON(obj[key],searchValue);
                }
            }
        })(data, value);
        return newObj;
    };

    handleInput=(event) =>{
        
      this.state={
        searcharray: ''
        };
        this.setState({data: this.transformJSON(this.props.data,event.target.value)});
       
    };
    handleoption(e) {
        alert("click here");
        this.setState({searcharray: ''});
        this.setState({data: this.transformJSON(this.props.data,e.target.value.toLowerCase())});
        ReactDOM.findDOMNode(this.refs.inputRef).focus();
     }
    render() {
        return (
        <div className="widget">
        <Input handleChange={this.handleInput} data={this.props.data} searchvalue={this.state.searcharray} handleoption={this.handleoption}/>
        <section className="our-crew-tagline-section testimonial-reviews">
             <div className="inner_content_wrap portfolio-grid">
                  <FolderContainer data={this.state.data}/>
             </div>
        </section>
    </div>
        );
    }
}

export default testimonialblock;
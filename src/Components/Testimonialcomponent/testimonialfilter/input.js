import React, { Component } from 'react';
import Option from './option'
class input extends Component {
    render() {
        const options = this.props.data;
        let folderoption = [];
        let index=0;
        for (let i = 0; i < options.length; i++) {
            if (options[i].type === 'dir') {
                folderoption.push(<Option key={index++}  value={options[i].name} name={options[i].name}/>);
            }
            else
            {

            }
        }
        return (
            <section className="filter-dropdown" onChange={this.props.handleChange}>
              {/* <input
                    type="text"
                   placeholder="filter..."
              /> */}
              <div className="select-filter">
              <select >
                  <option value={this.props.searchvalue} onClick={this.props.handleoption}>All</option>
              {folderoption}
              </select>
              </div>
              </section>
            
        );
    }
}

export default input;
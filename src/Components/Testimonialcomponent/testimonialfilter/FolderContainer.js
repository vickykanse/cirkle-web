import React, { Component } from 'react';
import File from './file';
import Folder from './folder'

class FolderContainer extends Component {
    render() {
        const items = this.props.data;
        let folderItems = [];
        let index=0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type === 'dir') {
                folderItems.push(<Folder key={index++}  name={items[i].name} subtitle={items[i].subtitle} flag={items[i].flag}/>);
            } else {
                folderItems.push(
                    <File 
                     key={index++} 
                     profileimg={items[i].profileimg} 
                     name={items[i].name} 
                     designation={items[i].designation}
                     highlighted={items[i].highlighted}
                     location={items[i].location}
                     feedback={items[i].feedback}
                     star={items[i].star}/>
                );
            }
            if (items[i].children) {
                folderItems.push(<FolderContainer key={index++} data={items[i].children}/>);
            }
        }
        return (
        <ul className="country-block">
        {folderItems}
    </ul>
        );
    }
}

export default FolderContainer;
import React, { Component } from 'react';
import Nav from './Nav/Nav';
import ContentOne from './Content1/Content1';
import ContentTwo from './Content2/Content2';
import ContentThree from './Content3/Content3';
import './app.scss';


class App extends Component {
    

    render(){
        return(
            <div className="app">
				<Nav />
                <div className="container">
                    <ContentOne />
                    <ContentTwo />
                    <ContentThree />
                </div> 
                
                <div className="footer">
                <span>
                    Curabitur ullamcorper ultricies nisi © 2109 Nam eget dui. Etiam rhoncus.	
                </span>
                </div>
            </div>
        );
    }
}

export default App;

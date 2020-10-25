import React, { Component } from 'react';
import TechList from './techList';
import LeaderBoard from './leaderBoard';
import techs from '../data/technologies.json';
import query from 'query-string';

class HomePage extends Component {
    render() {
        return (
            <div className="d-flex flex-row m-2 justify-content-between">
                <div style={{width:'60%', border:'1px solid black', height:'1500px'}}>
                    <TechList techs={techs} onHClick={this.handleClick}/>
     
                </div>
                <div style={{width:'30%', border:'1px solid black', height:'1500px'}}>
                    <LeaderBoard/>

                </div>
                
            </div>
        );
    }
    handleClick = (techName) =>{
        console.log('joined method');
        
        this.props.history.push({
            pathname:'/tech-details' ,
            search: query.stringify({tech: techName})
        });
        
    };
}

export default HomePage;
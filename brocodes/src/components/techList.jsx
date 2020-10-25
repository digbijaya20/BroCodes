import React, { Component } from 'react';
import Tech from './tech';

class TechList extends Component {
    render() {
        const techs = this.props.techs;
        const onHClick =this.props.onHClick;
        
        return (
            <div className='d-flex flex-row m-2 flex-wrap justify-content-between'>
                {techs.map(tech =>
                <Tech key={tech.name} techName={tech.name}noOfCollaborators={tech.collaborators}
                techDescription={tech.description} onTLClick={(techName)=>
                     {onHClick(techName)
                    }}/>
                
                  )}
            </div>
        );
    }
};

export default TechList;


/*import React, {Component} from 'react';
import Tech from "./tech";

const TechList = (props) => {
    const techs = props.techs;
    const onHClick = props.onHClick;
    return (
        <div className='d-flex flex-row m-2 flex-wrap justify-content-between'>
            {techs.map(tech =>
                <Tech key={tech.name} techName={tech.name} noOfCollaborators={tech.collaborators}
                      techDescription={tech.description} onTLClick={(techName) => {
                          console.log('Tech list component', techName);
                          onHClick(techName)
                }}/>
            )}
        </div>
    );
};

export default TechList;
*/
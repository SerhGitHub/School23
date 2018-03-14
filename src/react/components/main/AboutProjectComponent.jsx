import React from 'react';

import BaseTextComponent from '../shared/BaseTextComponent';

class AboutProjectComponent extends React.Component {

  getData(){
    const width = '100%';
    return <img src={'aboutProject.png'} style={{width: width}}/>;
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data}/>
    );
  }
}

export default AboutProjectComponent;


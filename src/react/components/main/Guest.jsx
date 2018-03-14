import React from 'react';

import BaseTextComponent from '../shared/BaseTextComponent';

class Guest extends React.Component {

  getData(){
    const width = '100%';
    return (<div>Нет данных</div>);
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data}/>
    );
  }
}

export default Guest;

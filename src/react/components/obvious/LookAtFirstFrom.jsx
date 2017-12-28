import React from 'react';

import RootComponent from '../RootComponent';

class LookAtFirstFrom extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должен быть текст или картинки с информацией для страницы "Первоклассник: взгляд родителей и педагогов"
        </div>
      </RootComponent>
    );
  }
}

export default LookAtFirstFrom;

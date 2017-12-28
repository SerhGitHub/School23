import React from 'react';

class RegWindow extends React.Component {

  render() {
    return (
      <div id='regModal' className='modal fade'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title mr-auto'>Регистрация</h4>
              <button className='close' type='button' data-dismiss='modal'>×</button>
            </div>
            <div style={{width: '90%', textAlign: 'left'}}>
              <form>
                <fieldset>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Адрес электронной почты" />
                    <small id="emailHelp" className="form-text text-muted">Мы никогда не будем делиться вашей электронной почтой с кем-либо ещё.</small>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="password1" placeholder="Пароль" />
                    <input type="password" className="form-control" id="password2" placeholder="Повторите пароль" />
                  </div>
                  <button type="submit" className="btn btn-primary">Сохранить</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegWindow;

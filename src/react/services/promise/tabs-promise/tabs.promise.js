import $ from 'jquery';

class TabsPromiseFactory {

  promise(postData, url) {
    return $.ajax({
      type: 'POST',
      url: `${url}`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(postData),
      xhrFields: {
        withCredentials: true
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      dataType: 'json'
    });
  }

}
let tabsPromiseFactoryInstance = new TabsPromiseFactory();
export default tabsPromiseFactoryInstance;




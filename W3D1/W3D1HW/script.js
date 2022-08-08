const Toast = {
    init(){
        this.hideTimeout = null;

        this.el = document.createElement('div');
        this.el.className = 'toast';
        document.body.appendChild(this.el);
    },

    show(message, state){
        clearTimeout(this.hideTimeout);

        this.el.textContent = message;

        this.el.className = 'toast toast--visible';

        if (state){
            this.el.classList.add(`toast--${state}`);
        }


        this.hideTimeout = setTimeout (() => {
            this.el.classList.remove(`toast--visible`);
        }, 3000);
    }
};

document.addEventListener('DOMContentLoaded', () => Toast.init());

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Jinx is a Goddess!', 'success')
  });
}

const AlertWindow = {
  init(){
    document.body.addEventListener("click", e =>{
      if(e.target.classList.contains("alert__close")){
        this.closeAlert(e.target);
      }
    });
  },

  getHtmlTemplate(alertOptions){
    return `
    <div class="alert__overlay">
    <div class="alert__window">
        <div class="alert__titlebar">
        <span class="alert__titlebar">${alertOptions.title}</span>
        <button class="alert__close material-icons">close</button>
    </div>
    <div class="alert__content">
       ${alertOptions.content}
    </div>
   </div>
 </div>
    `;
  },

  openAlert(alertOptions = {}){
      alertOptions = Object.assign({
        title: 'Alert Title',
        content: 'Alert Content'
      }, alertOptions);

      const alertTemplate = this.getHtmlTemplate(alertOptions);
      document.body.insertAdjacentHTML('afterbegin',alertTemplate);

  },
    closeAlert(closeButton){
      const alertOverlay = closeButton.parentElement.parentElement.parentElement;
      document.body.removeChild(alertOverlay);
    }

};


document.addEventListener('DOMContentLoaded', () => AlertWindow.init());
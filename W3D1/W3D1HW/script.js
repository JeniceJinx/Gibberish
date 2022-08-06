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


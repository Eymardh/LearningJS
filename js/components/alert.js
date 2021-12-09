export default class Alert {
    constructor(alertId) {
        this.alert = document.getElementById(alertId);
    }

    show(message) {
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }
    hide() {
        this.alert.classList.add('d-none','btn','btn-danger','mb-1','ml-1');
        this.alert.innerHTML = '<i class= "fa fa-trash"></i>';
    }
}
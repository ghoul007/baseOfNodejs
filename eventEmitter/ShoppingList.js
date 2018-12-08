const EventEmitter = require('events').EventEmitter;

class ShoppingList extends EventEmitter {
    constructor() {
        super();
        this.list = [];
    }
    add(item) {
        if (item.includes('tabac')) {
            this.emit('error', new Error('dont adding in the list'));
            return;
        }

        this.list = [...this.list, item];
        this.emit('added', this.list)
        if (item.includes('orange')) {
            this.emit('orange', 'bla bla bla')
        }

      
    }
}

module.exports = ShoppingList;

//exports
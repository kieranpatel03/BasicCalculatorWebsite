Vue.createApp({
    data(){
        return {
            current_store: '',
            last_operation: '',
            last_store: '',
            characters: [[7, 8, 9, 'x'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, 'Clear', '=', '/']]
        }
    },
    methods: {
        buttonClicked(data){
            console.log(data)
            if (data === '='){
                if (this.last_operation == 'x') {
                    this.current_store = String(parseInt(this.last_store) * parseInt(this.current_store))
                    this.last_operation = ''
                    this.last_store = ''
                } else if (this.last_operation == '-'){
                    this.current_store = String(parseInt(this.last_store) - parseInt(this.current_store))
                    this.last_operation = ''
                    this.last_store = ''
                } else if (this.last_operation == '+'){
                    this.current_store = String(parseInt(this.last_store) + parseInt(this.current_store))
                    this.last_operation = ''
                    this.last_store = ''
                } else if (this.last_operation == '/'){
                    this.current_store = String(parseInt(this.last_store) / parseInt(this.current_store))
                    this.last_operation = ''
                    this.last_store = ''
                } else {
                    //pass
                }
            } else if (['-', 'x', '/', '+'].includes(data)){
                if (this.current_store){
                    this.last_operation = data
                    this.last_store = this.current_store
                    this.current_store = ''
                } else {
                    this.last_operation = data
                }
            } else if (data=='Clear') {
                this.last_operation = ''
                this.last_store = ''
                this.current_store = ''
            } else {
                if (this.current_store.length > 8){
                    alert("You cannot add any more characters!")
                } else if (String(parseInt(this.last_store) * (parseInt(this.current_store) ? parseInt(this.current_store) : 1)).length > 15){
                    alert("A larger number cannot be stored, please press clear.")
                } else {
                    this.current_store += data
                }
            }
       }
    }
}).mount("#app")
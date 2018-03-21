let list = [
    // {
    //     title:'吃串串',
    //     isChecked:true
    // }
]

let vm = new Vue({
    el: '.main',
    data: {
        list: list,
        todoItem: ''
    },
    methods: {
        addTodoItem(){
            this.list.push({
                title: this.todoItem,
                isChecked: false,
                editing:false
            })
            this.todoItem = ''
        },
        deleteTodo(item){
            let index = this.list.indexOf(item);
            this.list.splice(index,1);
        },
        editTodoItem(item){
            item.editing = true;
        }
    },
    computed: {
        noCheckedItemLength(){
            return this.list.filter(function (item) {
                return !item.isChecked
            }).length
        }
    }
})
let list = [
    {
        title:'吃串串',
        isChecked:true,
        editing:false
    }
]

let vm = new Vue({
    el: '.main',
    data: {
        list: list,
        todoItem: '',
        beforeEdit:''
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
            this.beforeEdit = item.title;
        },
        editFinished(item){
            item.editing = false;
        },
        cancelEditItem(item){
            item.title = this.beforeEdit;
            item.editing = false;
        }
    },
    computed: {
        noCheckedItemLength(){
            return this.list.filter(function (item) {
                return !item.isChecked
            }).length
        }
    },
    directives:{
        "foucs":{
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
})
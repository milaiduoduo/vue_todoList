let list=[
    {
        title:'吃串串',

    }
]

let vm = new Vue({
    el:'.main',
    data:{
        list:list,
        todoItem:''
    },
    methods:{
        addTodoItem(){
            this.list.push({title:this.todoItem})
        }
    }
})
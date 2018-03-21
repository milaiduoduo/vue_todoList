let list=[
    // {
    //     title:'吃串串',
    //     isChecked:true
    // }
]

let vm = new Vue({
    el:'.main',
    data:{
        list:list,
        todoItem:''
    },
    methods:{
        addTodoItem(){
            this.list.push({
                title:this.todoItem,
                isChecked:false
            })
            this.todoItem = ''
        }
    }
})
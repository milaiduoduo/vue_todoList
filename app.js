let store = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}

// let list = [
//     {
//         title:'吃串串',
//         isChecked:true,
//         editing:false
//     }
// ];


let list = store.fetch("vue-todolist1");

let filteredList = {
    all:function(list){
        return list;
    },
    finished:function(list){
        return list.filter(item=>{
            return item.isChecked;
        })
    },
    unfinished:function(list) {
      return list.filter(item=>{
          return !item.isChecked;
      })
    }
}



let vm = new Vue({
    el: '.main',
    data: {
        list: list,
        todoItem: '',
        beforeEdit:'',
        optionHash:'all'
    },
    watch:{
        list:{
            handler:function(){
                store.save("vue-todolist1",this.list)
            },
            deep:true
        }
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
            }).length;
        },
        cFilteredList(){
            console.log('this.optionHash: ',this.optionHash);
            let list1 = filteredList[this.optionHash](list);
            console.log('filtered list: ',list1);
            return list1;
            // return filteredList[this.optionHash] ? filteredList[this.optionHash](list) : list;
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
});


window.addEventListener("hashchange",watchHashChange);

function watchHashChange(){
    let hash = window.location.hash.slice(1) ? window.location.hash.slice(1):'all';
    vm.optionHash = hash;
}

this.watchHashChange();
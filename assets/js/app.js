const app = new Vue({
    el:'#app',
    data:{
        newTask:'',
        tasks:[
            {
                todo:'Portare il cane fuori',
                done: false
            },
            {
                todo:'Andare a preparare il pranzo del cane',
                done: true
            },
            {
                todo:'Lavare la macchina',
                done: false
            },
            {
                todo:'Studiare Vuejs',
                done: false
            },
            {
                todo:'Giocare con la bestia di satana (cane)',
                done: true
            }
           
        ]
    },
    methods:{
        addTask(){
            let newObject = {
                todo : this.newTask,
                done: false,
            }
            if(newObject.todo.length > 0){
                this.tasks.push(newObject)
            }
            this.newTask = ''
        },
        removeTask(index){
            this.tasks.splice(index,1)
        },
        changeS(index){
            if(this.tasks[index].done != true){
                this.tasks[index].done = true
            }else{
                this.task[index].done = false
            }
        }
    }
})
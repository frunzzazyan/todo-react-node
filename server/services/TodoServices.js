class TodoServices{
    constructor(models){
        this.models = models
    }
    async getTodo(){
        const data = await this.models.todos.find()
        return data
    }
    async deleteTodo(id){
        const delId = await this.models.todos.findByIdAndDelete(id)
        return delId    
    }
    async patchTodo(id,completed){
        const updateId = await this.models.todos.findByIdAndUpdate(id, {completed : completed})
        return updateId
    }
}

module.exports = TodoServices
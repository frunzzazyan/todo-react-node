class TodoControllers{
    async getTodo(req,res){
        try {
            const todos = await req.app.locals.services.todos.getTodo()
            res.status(200).json(todos)
        } catch (error) {
            res.status(404).json(error)
        }
    }

    async deleteTodo(req,res){
        try {
            const todo = await req.app.locals.services.todos.deleteTodo(req.params.id)
            res.status(200).json(todo)
        } catch (error) {
            res.status(404).json(error)
        }
    }
    async patchTodo(req,res){
        try {
            const todo = await req.app.locals.services.todos.patchTodo(req.params.id, req.body.checked)
            res.status(200).json(todo)
        } catch (error) {
            res.status(404).json(error)
        }
    }
}

module.exports = TodoControllers
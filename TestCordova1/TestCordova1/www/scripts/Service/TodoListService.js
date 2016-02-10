var TodoListService = function () {

    var json = "TodoList4.json";

    this.Save = function (todos) {
        var jdata = todos;
        if (jdata === null) {
            jdata = [];
        }
        localStorage.setItem(json, JSON.stringify(jdata));
    }

    this.Get = function () {
        var jdata = localStorage.getItem(json);
        var todos = [];
        if (jdata !== null) {
            var datalist = JSON.parse(jdata);
            angular.forEach(datalist, function (data) {
                todos.push(new Todo(data["text"], data["done"], data["time"], data["state"]));
            });
            return todos;
        } else {
            return [];
        }
    }

    this.Delete = function () {
        localStorage.removeItem(json);
    }
}
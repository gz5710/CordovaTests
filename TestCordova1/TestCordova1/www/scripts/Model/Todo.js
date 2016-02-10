var StatePool = Object.freeze({
    'UNDO': 0,
    'DONE': 1
});

var Todo = function (text, done, time, state) {
    this.text = text;
    this.done = done;
    this.state = typeof state === 'undefined' ? StatePool.UNDO : state;
    this.time = time;
}
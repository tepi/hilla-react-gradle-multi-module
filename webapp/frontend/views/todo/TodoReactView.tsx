import {VerticalLayout} from "@hilla/react-components/VerticalLayout.js";
import {TextField} from "@hilla/react-components/TextField.js";
import {Button} from "@hilla/react-components/Button.js";
import * as React from "react";
import {useState} from "react";
import {TextFieldElement} from "@hilla/react-components/TextField.js";
import {TodoEndpoint} from "Frontend/generated/endpoints";
import Todo from "Frontend/generated/com/example/backend/data/Todo";
import {Checkbox} from "@hilla/react-components/Checkbox.js";
import {Scroller} from "@hilla/react-components/Scroller.js";


export function TodoReactView() {
    const [task, setTask] = useState('');
    const [done, setDone] = useState(false);
    const [todos, setTodos] = useState(Array<Todo>())

    useState(async () => {
        setTodos(await TodoEndpoint.findAll());
    })

    function handleTaskFieldKeyPress(e: React.KeyboardEvent<TextFieldElement>) {
        if (e.code === 'Enter' || e.code === 'NumpadEnter')
            saveTodo();
    }

    function saveTodo() {
        TodoEndpoint.save(
            {
                task: task,
                done: done
            }
        ).then(savedTodo => {
            setTodos([...todos, savedTodo!])
            setTask('')
            setDone(false)
        })

    }

    type TodoRowProps = {
        todo: Todo
    }

    function TodoRow({ todo }: TodoRowProps) {
        return <Checkbox label={todo.task} checked={todo.done}/>
    }

    type TodoListProps = {
        todoList: Array<Todo>
    }

    function TodoList({ todoList }: TodoListProps) {
        return (
            <Scroller>
                <VerticalLayout className="flex p-s gap-s">
                    { todoList.map(todo => <TodoRow key={todo.id} todo={todo}/>) }
                </VerticalLayout>
            </Scroller>
        )
    }

    return (
        <VerticalLayout className="flex p-m gap-m">
            <section className="flex p-m gap-m items-end">
                <TextField label="What's on your mind?" value={task}
                           onValueChanged={(e) => setTask(e.detail.value)}
                           onKeyPress={handleTaskFieldKeyPress} />
                <Checkbox label="Is done?" checked={done} onCheckedChanged={(e) => setDone(e.detail.value)}/>
                <Button onClick = {saveTodo}> Add </Button>
            </section>
            <TodoList todoList={todos}/>
        </VerticalLayout>
    );
}
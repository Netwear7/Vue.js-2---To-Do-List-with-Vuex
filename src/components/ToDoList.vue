<template>
  <section class="todoapp">

    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Ajouter une tâche" v-model="newTodo" @keyup.enter="addTodo">
    </header>

    <div class="main">
      <ul class="todo-list">
        <li class="todo" v-for="todo in filteredTodos" :key="todo.task" :class="{completed: todo.completed}">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label>{{ todo.task }}</label>
          </div>
        </li>
      </ul>
    </div>

    <footer class="footer">
      <span class="todo-count">Tâche à faire : {{ count }}</span>
      <ul class="filters">
        <li>
          <a href="#" :class="{selected: filter === all}" @click.prevent="filter = 'all'">Toutes</a>
        </li>

        <li>
          <a href="#" :class="{selected: filter === active}" @click.prevent="filter = 'active'">A faire</a>
        </li>

        <li>
          <a href="#" :class="{selected: filter === completed}" @click.prevent="filter = 'completed'">Fini</a>
        </li>

      </ul>
      <button class="clear-completed"></button>
    </footer>

  </section>
</template>

<script>

export default {
  name: 'to-do-list',
  data () {
    return {
      todos: [
        {
          task: 'task1',
          completed: false
        },
        {
          task: 'task2',
          completed: false
        },
        {
          task: 'task3',
          completed: false
        }
      ],
      newTodo: '',
      filter: 'all'
    }
  },
  methods: {
    addTodo () {
      this.todos.push({
        task: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    }
  },
  computed: {
    count () {
      return this.todos.filter(todo => !todo.completed).length
    },
    filteredTodos () {
      if (this.filter === 'active') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  }
}
</script>

<style src="..\assets\app.css">

</style>

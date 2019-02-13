<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-menu">
        <div class="navbar-start">
          <a @click="emitFilter('all')"
            class="navbar-item is-active"
          >
            All
          </a>
          <a @click="emitFilter('inprogress')"
            class="navbar-item"
          >
            In Progress
          </a>
          <a @click="emitFilter('finished')"
            class="navbar-item"
          >
            Finished
          </a>
          <a @click="emitFilter('notstarted')"
            class="navbar-item"
          >
            Not Started
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      emitFilter (filterOption) {
        this.$emit('filterSelected', filterOption)
      }
    }
  }
</script>








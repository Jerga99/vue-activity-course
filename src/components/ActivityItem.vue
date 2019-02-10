<template>
  <article class="post">
    <h4>{{ activity.title }}</h4>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> updated {{ activity.updatedAt }} minutes ago &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- <span>Progress: <span :class="'color-' + activityProgress">{{activity.progress}} %</span></span> -->
        <span>Progress: <span :style="{'color': activityProgress}">{{activity.progress}} %</span></span>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      activity: {
        type: Object,
        required: true
      }
    },
    computed: {
      activityProgress () {
        const progress = this.activity.progress

        if (progress <= 0) {
          return 'red'
        }
        else if (progress <= 50) {
          return 'orange'
        }
        else {
          return 'green'
        }
      }
    }
  }
</script>

<style scoped>

/*.color-red {
  color: red;
}

.color-orange {
  color: orange;
}

.color-green {
  color: green;
}
*/



</style>

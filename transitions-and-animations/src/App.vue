<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show = !show">
          Show Alert
        </button>
        <button class="btn btn-primary" @click="slide = !slide">
          Slide Alert
        </button>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
          <!-- <div class="alert alert-info" v-else>And this is more info</div> -->
        </transition>
        <transition name="slide" type="animation" mode="out-in">
          <div class="alert alert-info" v-if="slide" key="info1">
            This is some info
          </div>
          <div class="alert alert-info" v-else key="info2">
            And this is more info
          </div>
        </transition>
        <hr />

        <button class="btn btn-primary" @click="load = !load">
          Load / Remove Element
        </button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div
            style="width: 100px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      slide: false,
      load: false,
    };
  },
  methods: {
    beforeEnter(el) {},
    enter(el, done) {
      done();
    },
    afterEnter(el) {},
    enterCancelled(el) {},
    beforeLeave(el) {},
    leave(el, done) {
      done();
    },
    afterLeave(el) {},
    leaveCancelled(el) {},
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: 1s;
}
.fade-leave {
  /* No need to specify opacity 1 as it is default */
  /* opacity: 1 */
}
.fade-leave-active {
  transition: 1s;
  opacity: 0;
}

.slide-enter {
  animation: slide-in 1s ease-out forwards;
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>

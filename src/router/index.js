import Vue from 'vue'
import VueRouter from 'vue-router'
import createWebHistory from 'vue-router'

import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  history: createWebHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { requiresAuth: true, showHeader: true, }
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import(/* webpackChunkName: "about" */ '@/views/CoursesView.vue'),
      props: true,
      meta: {
        showHeader: true,
        requiresAuth: true
      }
    },
    {
      path: '/courses/:id',
      name: 'course-details',
      component: () => import('@/components/courses/CourseDetails.vue'),
      props: true,
      meta: {
        showHeader: true,
        requiresAuth: true
      }
    },
    {
      path: '/progress',
      name: 'courses-progress',
      component: () => import('@/components/courses/CourseProgress.vue'),
      meta: {
        showHeader: true,
        requiresAuth: true
      }
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: () => import('@/components/courses/lesson/SingleLesson.vue'),
      props: true,
      meta: {
        showHeader: true,
        requireAuth: true
      }
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/components/auth/sign_in/SignIn.vue'),
      meta: {
        showHeader: false,
        requiresAuth: false
      }
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/components/auth/sign_up/SignUp.vue'),
      meta: {
        showHeader: false,
        requiresAuth: false
      }
    },
    {
      path: '/404',
      component: () => import('@/components/404/NotFound.vue'),
      name: 'not-found',
      meta: {
        showHeader: false,
      }
    },
    { path: '*',
      redirect: { name: 'not-found'}
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.auth.isAuthenticated) {
    next({ name: 'sign-in' });
  } else {
    next();
  }
});

export default router

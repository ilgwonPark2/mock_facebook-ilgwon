/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Post
  {
    path: '/post',
    name: 'PostIndex',
    component: () => import('@/views/Post/Index.vue'),
  },
  {
    path: '/',
    redirect: '/post',
  },

  {
    path: '/*',
    redirect: '/post',
  },
];

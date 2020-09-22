// types: 1 -> Public routes || 2 -> Auth routes || 3 -> Protected routes
export const routes = [
  {
    path: '/',
    type: 1
  },
  {
    path: '/pet/[id]',
    type: 1
  },
  {
    path: '/category/[id]',
    type: 1
  },
  {
    path: '/404',
    type: 1
  },
  {
    path: '/signin',
    type: 2
  },
  {
    path: '/signup',
    type: 2
  },
  {
    path: '/favs',
    type: 3
  },
  {
    path: '/user',
    type: 3
  }
];

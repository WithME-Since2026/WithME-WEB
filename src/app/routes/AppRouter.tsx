import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { EmptyView } from '@/common/components/EmptyView';

// 각 도메인의 pages를 여기에 route로 등록
const router = createBrowserRouter([
  {
    path: '*',
    element: <EmptyView message="페이지를 찾을 수 없습니다." />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { EmptyView } from '@/common/components/EmptyView';

import { InviteLoginPage } from '@/domain/invite/pages/InviteLoginPage';
import { InviteResponsePage } from '@/domain/invite/pages/InviteResponsePage';
import { InviteResultPage } from '@/domain/invite/pages/InviteResultPage';
import { LandingPage } from '@/domain/landing/pages/LandingPage';

// 각 도메인의 pages를 여기에 route로 등록
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/invite/:inviteCode',
    element: <InviteLoginPage />,
  },
  {
    path: '/invite/:inviteCode/respond',
    element: <InviteResponsePage />,
  },
  {
    path: '/invite/:inviteCode/result',
    element: <InviteResultPage />,
  },
  {
    path: '*',
    element: <EmptyView message="페이지를 찾을 수 없습니다." />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

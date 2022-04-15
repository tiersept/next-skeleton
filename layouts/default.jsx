import { TheHeader } from '@/components/TheHeader';

export const Layout = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen">
    <TheHeader />
    <main className="grow">{children}</main>
  </div>
);

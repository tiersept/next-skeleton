export const Layout = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen">
    <main className="grow">{children}</main>
  </div>
);

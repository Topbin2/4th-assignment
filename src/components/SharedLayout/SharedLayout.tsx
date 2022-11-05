import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <aside>사이드바</aside>
      <main>
        <header>헤더</header>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default SharedLayout;

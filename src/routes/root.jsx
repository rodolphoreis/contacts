import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Rodolpho Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Pesquisar"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">Novo</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Seu Nome</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Seu Amigo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

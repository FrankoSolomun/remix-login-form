import { Form } from "@remix-run/react";

interface HeaderProps {
  isAuthenticated: boolean;
}

export function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header>
      <nav className="flex justify-between items-center w-full px-8 py-4 bg-blue-400 absolute">
        <a href="/" className="text-blue-700 text-[30px] font-bold">
          Frenki
        </a>
        {isAuthenticated && (
          <Form action="/logout" method="post">
            <button
              type="submit"
              name="action"
              value="logout"
              className="bg-blue-700 text-white py-2 px-5 rounded-full"
            >
              Sign Out
            </button>
          </Form>
        )}
      </nav>
    </header>
  );
}

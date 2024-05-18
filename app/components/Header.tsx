import { Form } from "@remix-run/react";

interface HeaderProps {
  isAuthenticated: boolean;
}

export function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header>
      <nav className="flex justify-between items-center w-full px-8 py-4 bg-blue-700 absolute">
        <a href="/" className="text-white text-[30px] font-bold">
          Frenki
        </a>
        {isAuthenticated && (
          <Form action="/logout" method="post">
            <button
              type="submit"
              name="action"
              value="logout"
              className="bg-white text-gray-800 py-2 px-5 rounded-full font-semibold"
            >
              Sign Out
            </button>
          </Form>
        )}
      </nav>
    </header>
  );
}

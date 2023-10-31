import "@styles/globals.css";
import "@components/Nav";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "promptopia",
  description: "Discover and share AI prompts",
};

export default function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Panel } from "../components/Panel";

type PanelLayout = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: PanelLayout) => (
  <main className="grid w-full h-full">
    <div className="hidden sm:flex"></div>
    <div className="max-w-md w-full mx-auto">
      <Panel>
        <Link href="/" className="block">
          <Logo className="mb-4" />
        </Link>
        {children}
      </Panel>
    </div>
  </main>
);

export { PanelLayout };

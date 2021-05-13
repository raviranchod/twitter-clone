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
        <Logo className="mb-4" />
        {children}
      </Panel>
    </div>
  </main>
);

export { PanelLayout };

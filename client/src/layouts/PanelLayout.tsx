import { Panel } from "../components/Panel";

type PanelLayout = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: PanelLayout) => (
  <div className="grid w-full h-full">
    <div className="hidden sm:flex"></div>
    <div className="max-w-md w-full mx-auto">
      <Panel>{children}</Panel>
    </div>
  </div>
);

export { PanelLayout };

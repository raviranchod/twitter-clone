import { Link } from "../features/Link";
import { Logo } from "../features/Logo";
import { FormPanel } from "../features/FormPanel";

type PanelLayout = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: PanelLayout) => (
  <main className="grid w-full h-full">
    <div className="hidden sm:flex"></div>
    <div className="max-w-md w-full mx-auto">
      <FormPanel>
        <Link href="/" className="inline-block mb-4">
          <Logo />
        </Link>
        {children}
      </FormPanel>
    </div>
  </main>
);

export { PanelLayout };

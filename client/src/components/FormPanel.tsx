type PanelProps = {
  children: React.ReactNode;
};

const FormPanel = ({ children }: PanelProps) => (
  <div className="p-8 bg-primary-lightest rounded-2xl w-full">{children}</div>
);

export { FormPanel };

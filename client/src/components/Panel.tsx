type PanelProps = {
  children: React.ReactNode;
};

const Panel = ({ children }: PanelProps) => (
  <div className="p-8 bg-primary-lightest rounded-2xl w-full">{children}</div>
);

export { Panel };

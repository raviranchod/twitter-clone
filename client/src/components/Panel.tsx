type PanelProps = {
  children: React.ReactNode;
};

const Panel = ({ children }: PanelProps) => (
  <div className="p-8 bg-cloudy rounded-2xl w-full">{children}</div>
);

export { Panel };

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

const Panel = ({ children, className }: PanelProps) => (
  <div className={`bg-white rounded-lg p-4 lg:p-8 ${className}`}>
    {children}
  </div>
);

export { Panel };

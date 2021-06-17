type PanelProps = {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "normal";
};

const Panel = ({ children, className, padding = "normal" }: PanelProps) => (
  <div
    className={`bg-white rounded-lg ${
      padding == "normal" && `p-4 lg:p-8`
    } ${className}`}
  >
    {children}
  </div>
);

export { Panel };

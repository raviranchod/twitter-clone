type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className="container mx-auto px-4">{children}</div>
);

export { Container };

import { Logo } from "../../features/Logo";

const LoadingScreen = () => (
  <div className="bg-primary h-full flex justify-center items-center">
    <Logo stroke="white" className="h-16" />
  </div>
);

export { LoadingScreen };

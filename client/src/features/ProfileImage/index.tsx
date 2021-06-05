type ProfileImageProps = {
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  src: string;
};

const ProfileImage = ({
  alt,
  className,
  src,
  size = "md",
}: ProfileImageProps) => {
  const sizeClassName = {
    sm: "w-6",
    md: "w-14",
    lg: "w-28",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-lg ${sizeClassName[size]} ${className}`}
    />
  );
};

export { ProfileImage };

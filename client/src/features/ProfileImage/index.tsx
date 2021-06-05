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
    sm: "w-6 rounded-md",
    md: "w-14 rounded-lg",
    lg: "w-28 rounded-lg",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClassName[size]} ${className}`}
    />
  );
};

export { ProfileImage };

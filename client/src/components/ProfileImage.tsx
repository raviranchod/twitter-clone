import Image from "next/image";

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
  const classNames = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-lg",
  };

  const sizes = {
    sm: 20,
    md: 56,
    lg: 112,
  };

  return (
    <Image
      src={src}
      alt={alt}
      height={sizes[size]}
      width={sizes[size]}
      className={`${classNames[size]} ${className}`}
    />
  );
};

export { ProfileImage };

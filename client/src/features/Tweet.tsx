import LikeSvg from "../assets/like.svg";
import { ProfileImage } from "./ProfileImage";
import ReplySvg from "../assets/reply.svg";
import RetweetSvg from "../assets/retweet.svg";
import { Text } from "./Text";
import { Link } from "./Link";

type TweetProps = {
  className?: string;
  createdAt: string;
  name: string;
  profileImageAlt: string;
  profileImageSrc: string;
  tweet: string;
  username: string;
};

const Tweet = ({
  className,
  createdAt,
  name,
  profileImageAlt,
  profileImageSrc,
  tweet,
  username,
}: TweetProps) => (
  <div className={`flex space-x-4 p-6 lg:p-8 ${className}`}>
    <ProfileImage
      src={profileImageSrc}
      alt={profileImageAlt}
      className="self-start"
    />
    <div className="w-full overflow-hidden">
      <div className="flex space-x-2">
        <Link
          href={`/${username}`}
          className="flex flex-shrink space-x-2 overflow-hidden"
        >
          <Text
            as="span"
            className="font-bold whitespace-nowrap hover:underline"
          >
            {name}
          </Text>
          <Text as="span" className="text-grey whitespace-nowrap">
            @{username}
          </Text>
        </Link>
        <div className="space-x-2 flex flex-shrink-0">
          <Text as="span" className="text-grey">
            ·
          </Text>
          <Text className="text-grey">{createdAt}</Text>
        </div>
      </div>
      <Text className="mb-4">{tweet}</Text>
      <div className="flex justify-between md:mr-16">
        <ReplySvg className="w-6 text-current text-grey hover:text-primary-light transition-colors cursor-not-allowed" />
        <RetweetSvg className="w-6 text-current text-grey hover:text-primary-light transition-colors cursor-not-allowed" />
        <LikeSvg className="w-6 text-current text-grey hover:text-red transition-colors cursor-not-allowed" />
      </div>
    </div>
  </div>
);

export { Tweet };

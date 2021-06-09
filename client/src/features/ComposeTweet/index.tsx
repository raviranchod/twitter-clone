import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { Button } from "../Button";
import { Panel } from "../Panel";
import { ProfileImage } from "../ProfileImage";

import {
  ComposeTweetDto,
  useComposeTweetMutation,
} from "../../generated/graphql";
import { RootState } from "../../redux/store";

type ComposeTweetProps = {
  className?: string;
  profileImageAlt: string;
  profileImageSrc: string;
};

const ComposeTweet = ({
  className,
  profileImageAlt,
  profileImageSrc,
}: ComposeTweetProps) => {
  const [length, setLength] = useState(0);
  const composeRef = useRef<HTMLDivElement>(null);
  const [, composeTweet] = useComposeTweetMutation();

  const userId = useSelector((state: RootState) => state.user.id);

  const { register, handleSubmit, setValue } = useForm<
    Pick<ComposeTweetDto, "tweet">
  >({
    mode: "onSubmit",
  });

  const handleComposeChange = (event: ChangeEvent<HTMLDivElement>) => {
    setLength(event.target.textContent?.length ?? 0);

    event.currentTarget.textContent &&
      setValue("tweet", event.currentTarget.textContent, {
        shouldValidate: true,
      });
  };

  useEffect(() => {
    register("tweet");
  }, [register]);

  const handleOnSubmit = handleSubmit(async ({ tweet }) => {
    await composeTweet({ userId, tweet });
  });

  return (
    <Panel className={`flex space-x-2 ${className}`}>
      <ProfileImage
        src={profileImageSrc}
        alt={profileImageAlt}
        className="self-start"
      />

      <div className="flex flex-col w-full relative">
        {!length && (
          <div className="absolute text-xl text-grey">What's happening?</div>
        )}
        <form onSubmit={handleOnSubmit} className="z-10">
          <div
            contentEditable="true"
            className="text-xl resize-none h-auto"
            ref={composeRef}
            onInput={handleComposeChange}
          ></div>
          <div className="flex justify-end border-t border-cloudy mt-4 pt-4">
            <Button isDisabled={!length} type="submit">
              Tweet
            </Button>
          </div>
        </form>
      </div>
    </Panel>
  );
};

export { ComposeTweet };

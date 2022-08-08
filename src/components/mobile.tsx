import React from "react";
import Avatar from "@/assets/avatar.jpg";
import Dog1 from "@/assets/dog-image-1.jpg";
import Dog2 from "@/assets/dog-image-2.jpg";
import Dog3 from "@/assets/dog-image-3.jpg";

const Comment: React.FC<{ type: "sent" | "received"; children: React.ReactNode }> = (
  props
) => {
  return (
    <div
      className={`max-w-[8rem] px-2 py-1.5 body-xs ${
        props.type === "sent"
          ? " text-primary bg-primary-100 rounded-[10px_10px_10px_4px]"
          : "text-[#6E5D7E] bg-neutral rounded-[10px_10px_4px_10px] justify-self-end shadow-sm"
      }`}
    >
      {props.children}
    </div>
  );
};

const ServiceOffer: React.FC<{ price: string; children: React.ReactNode }> = (props) => {
  return (
    <div
      className="w-[10rem] h-8 bg-gradient flex items-center justify-between 
      rounded-[10px_10px_10px_4px] pl-2 pr-4 gap-2"
    >
      <div className="w-3 h-3 rounded-full border border-primary-200"></div>
      <div className="body-xs text-neutral grow ">{props.children}</div>
      <div className="font-bold text-[0.75rem] text-neutral">${props.price}</div>
    </div>
  );
};

export const MobileIllustration: React.FC = () => {
  return (
    <figure
      className="relative w-[15.4375rem] h-[31.5625rem] mx-auto px-[0.5938rem] py-[0.6875rem] 
      rounded-[1.875rem] bg-neutral shadow-xl"
    >
      <div className="absolute top-0 left-0 right-0 mx-auto w-[8.0625rem] h-[1.8125rem] rounded-b-[0.875rem] bg-neutral"></div>
      <div className="w-full h-[4.125rem] bg-gradient shadow-md rounded-b-md rounded-t-[1.25rem] pt-[1.875rem] px-4">
        <div className="flex items-center justify-between h-6 gap-2">
          <svg
            width="4"
            height="10"
            viewBox="0 0 4 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.10557 0.552792C2.35256 0.0588133 2.95324 -0.141411 3.44721 0.105578C3.90591 0.334925 4.11131 0.869235 3.94056 1.3399L3.89443 1.44722L2.118 5.00001L3.89443 8.55279C4.12377 9.01149 3.96751 9.56218 3.54851 9.83626L3.44721 9.89443C2.98852 10.1238 2.43783 9.96752 2.16374 9.54852L2.10557 9.44722L0.105573 5.44722C-0.0150818 5.20591 -0.0323182 4.92798 0.0538637 4.67621L0.105573 4.55279L2.10557 0.552792Z"
              fill="white"
            />
          </svg>
          <div className="grow flex items-center gap-2">
            <img
              src={Avatar}
              alt="Samuel Green"
              className="rounded-full border border-neutral w-6 h-6"
            />
            <div className="flex flex-col h-6">
              <span className="text-neutral font-medium text-[0.6875rem] leading-[0.8125rem]">
                Samuel Green
              </span>
              <span className="body-xs text-primary-300">Available to Walk</span>
            </div>
          </div>
          <div className="flex h-2 gap-[0.0625rem] flex-col items-center">
            <span className="h-0.5 w-0.5 rounded-full bg-neutral"></span>
            <span className="h-0.5 w-0.5 rounded-full bg-neutral"></span>
            <span className="h-0.5 w-0.5 rounded-full bg-neutral"></span>
          </div>
        </div>
      </div>
      <div
        className="bg-neutral-100 px-[0.4688rem] pb-[0.625rem] pt-[0.6875rem] grid grid-cols-1 gap-2
      rounded-b-[1.25rem]"
      >
        <Comment type="sent">That sounds great. I'd be happy to discuss more.</Comment>
        <Comment type="sent">
          Could you send over some pictures of your dog, please?
        </Comment>
        <span></span>
        <div className="justify-self-end w-[8.5rem] h-10 grid grid-cols-3 gap-2">
          <img src={Dog1} alt="Bella" className="rounded-[0.625rem] shadow-sm" />
          <img src={Dog2} alt="Bella" className="rounded-[0.625rem] shadow-sm" />
          <img src={Dog3} alt="Bella" className="rounded-[0.625rem] shadow-sm" />
        </div>
        <Comment type="received">Here are a few pictures. She's a happy girl!</Comment>
        <Comment type="received">Can you make it?</Comment>
        <span></span>
        <Comment type="sent">
          She looks so happy! The time we discussed works. How long shall I take her out
          for?
        </Comment>
        <ServiceOffer price="29">30 minute walk</ServiceOffer>
        <ServiceOffer price="49">1 hour walk</ServiceOffer>
        <span></span>
        <div className="bg-neutral flex items-center justify-between w-full h-[2.125rem] rounded-full pl-5 pr-1">
          <span className="text-[0.5625rem] text-neutral-300">Type a message...</span>
          <div className="w-[1.5625rem] h-[1.5625rem] grid place-items-center rounded-full bg-neutral-800">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.06419 0.465024C1.50167 0.0284666 2.19006 -0.00511479 2.66614 0.36428L2.78047 0.465024L6.42125 4.09812C6.85873 4.53467 6.89238 5.22161 6.52221 5.69669L6.42125 5.81077L2.78047 9.44387C2.30653 9.9168 1.53813 9.9168 1.06419 9.44387C0.626713 9.00731 0.59306 8.32038 0.963236 7.8453L1.06419 7.73121L3.84588 4.95445L1.06419 2.17768C0.626713 1.74112 0.59306 1.05419 0.963236 0.579112L1.06419 0.465024Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </figure>
  );
};

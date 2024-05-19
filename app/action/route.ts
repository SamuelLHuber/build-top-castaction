/* eslint-disable react/jsx-key */
import { ActionMetadata } from "frames.js";
import { NextRequest } from "next/server";
import { frames } from "../frames/frames";
  
export const GET = async (req: NextRequest) => {
  const actionMetadata: ActionMetadata = {
    action: {
      type: "post",
    },
    icon: "ruby",
    name: "Build.top Nominate",
    aboutUrl: `https://dtech.vision`,
    description: "Open a Frame to nominate for build.top",
  };

  return Response.json(actionMetadata);
};

export const POST = frames(async (ctx) => {
  let wallet = '0x09CEdb7bb69f9F6DF646dBa107D2bAACda93D6C9';

  return Response.json({
    type: "frame",
    frameUrl: `https://build.top/nominate/${wallet}`
  });
});
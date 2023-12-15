/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/lucia").Auth;
  type DatabaseUserAttributes = {
    address: string;
    username: string | null;
    image: string | null;
    image_cover: string | null;
  };
  type DatabaseSessionAttributes = {};
}
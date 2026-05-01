import activity from "@/assets/images/icons/activity.png";
import add from "@/assets/images/icons/add.png";
import adobe from "@/assets/images/icons/adobe.png";
import back from "@/assets/images/icons/back.png";
import canva from "@/assets/images/icons/canva.png";
import claude from "@/assets/images/icons/claude.png";
import dropbox from "@/assets/images/icons/dropbox.png";
import figma from "@/assets/images/icons/figma.png";
import github from "@/assets/images/icons/github.png";
import home from "@/assets/images/icons/home.png";
import medium from "@/assets/images/icons/medium.png";
import menu from "@/assets/images/icons/menu.png";
import notion from "@/assets/images/icons/notion.png";
import openai from "@/assets/images/icons/openai.png";
import plus from "@/assets/images/icons/plus.png";
import setting from "@/assets/images/icons/setting.png";
import spotify from "@/assets/images/icons/spotify.png";
import wallet from "@/assets/images/icons/wallet.png";

export const icons = {
  home,
  wallet,
  setting,
  activity,
  add,
  back,
  menu,
  plus,
  notion,
  dropbox,
  openai,
  adobe,
  medium,
  figma,
  spotify,
  github,
  claude,
  canva,
} as const;

export type IconKey = keyof typeof icons;
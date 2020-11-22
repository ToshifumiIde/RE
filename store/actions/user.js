//reduxで使うactionの追加

import { ADD_CLIP , DELETE_CLIP } from "./action";

export const addClip = ({clip}) =>{
  return {
    type:ADD_CLIP,
    clip,
  };
};

export const deleteClip = ({clip}) =>{
  return {
    type:DELETE_CLIP,
    clip,
  };
};
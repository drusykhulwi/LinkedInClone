import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption.js";
import {
  ShareOutlined,
  ChatOutlined,
  ThumbUpAltOutlined,
  SendOutlined,
} from "@mui/icons-material";

export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
}

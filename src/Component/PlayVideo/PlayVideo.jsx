import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [dataAPI, setDataAPI] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoData = async () => {
    // fetching videos data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setDataAPI(data.items[0]));
  };

  const fetchOtherData = async () => {
    // fetching other data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${dataAPI.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [dataAPI]);
  return (
    <div className="play-video">
      {/* <video src={video1} autoPlay controls muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{dataAPI ? dataAPI.snippet.title : "Title"}</h3>
      <div className="play-video-info">
        <p>
          {dataAPI
            ? value_converter(dataAPI.statistics.viewCount)
            : "Number of view"}
          &bull;{" "}
          {dataAPI
            ? moment(dataAPI.snippet.publishedAt).fromNow()
            : "upload date"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {dataAPI ? value_converter(dataAPI.statistics.likeCount) : "123"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{dataAPI ? dataAPI.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subsriberCount)
              : "1M"}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {dataAPI
            ? dataAPI.snippet.description.slice(0, 250) + " " + "see more..."
            : "this is about video description"}
        </p>
        <hr />
        <h4>
          {dataAPI
            ? value_converter(dataAPI.statistics.commentCount)
            : "number of comments"}{" "}
          comments
        </h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson<span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>123</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson<span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>123</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson<span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>123</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson<span>1 day ago</span>
            </h3>
            <p>
              you are amazing i remember when you used to make small projects
              videos now your making clones for big apps this 10x more amazing
              keep posting we want series for big apps like this long videos
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>123</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;

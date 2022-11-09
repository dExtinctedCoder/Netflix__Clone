
const Video = ({src}) => {

  return (
    <div className="video__control">
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";
import Message from "./Message";

function Tweet(props) {
  return (
    <div>
      {props.tweet.map((tweet, index) => {
        return (
          <div className="tweet" key={index}>
            <ProfileImage image={tweet.user.image} />

            <div className="body">
              <div className="top">
                <User userData={tweet.user} />
                <Timestamp timestamp={tweet.timestamp} />
              </div>

              <Message message={tweet.message} />
              <Actions />
            </div>

            <i className="fas fa-ellipsis-h"></i>
          </div>
        );
      })}
    </div>
  );
}

export default Tweet;

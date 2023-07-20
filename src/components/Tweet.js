import { v4 as uuidv4 } from 'uuid'
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";
import Message from "./Message";

function Tweet(props) {
  const { tweets } = props;

  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div className="tweet" key={uuidv4()}>
            <ProfileImage image={tweet.user.image} />

            <div className="body">
              <div className="top">
                <User userData={tweet.user} />
                <Timestamp timeStamp={tweet.timestamp} />
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

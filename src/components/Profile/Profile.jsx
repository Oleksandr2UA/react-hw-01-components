import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Image,
  Item,
  Label,
  Location,
  Name,
  Quantity,
  Stats,
  Tag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container className="profile">
      <Description className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <Item>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </Item>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

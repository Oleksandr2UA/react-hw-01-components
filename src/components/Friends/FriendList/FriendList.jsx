import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Item } from '../FriendListItem/FriendListItem.styled';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item className="item" key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

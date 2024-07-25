import PropTypes from 'prop-types';
import {
  Item,
  Label,
  List,
  Percentage,
  Section,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <Section className="statistics">
      {title && <Title className="title">Upload stats</Title>}

      <List className="stat-list">
        {stats.map(({ id, lable, percentage }) => (
          <Item
            key={id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}
          >
            <Label className="label">{lable}</Label>
            <Percentage className="percentage">{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

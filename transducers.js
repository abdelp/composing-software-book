const friends = [
  { id: 1, name: 'Sting', nearMe: true },
  { id: 2, name: 'Radiohead', nearMe: false }
];

const isNearMe = ({ nearMe }) => nearMe;

const getName = ({ name }) => name;

const getFriendsNearMe = compose(
  filter(isNearMe),
  map(getName)
);

const results2 = toArray(getFriendsNearMe, friends);
import React, {useCallback} from 'react';
import WithCheckConnection from '../../HOC/withCheckConnection';
import OtherUserView from './otherUserProfile.view';

const OtherUserContainer = ({navigation, route}) => {
  const [routes] = React.useState([
    {key: 'first', title: 'Recipes', number: 10},
    {key: 'second', title: 'Following', number: 10},
  ]);
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const user = route?.params?.user;

  return (
    <OtherUserView user={user} onPressBack={onPressBack} routes={routes} />
  );
};

export default WithCheckConnection(OtherUserContainer);

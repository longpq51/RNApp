import {faRefresh} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import useStateRedux from '../../hooks/useStateRedux';
import {setRepeat} from '../../store/actions';
import {repeatSelector} from '../../store/selectors';

const LoopBtn = () => {
  const {select, dispatch} = useStateRedux(repeatSelector, setRepeat);
  // const [color, setColor] = useState(colors.rgbTextColorPrimary);

  // useEffect(() => {
  //   // setColor(select === false ? colors.rgbTextColorPrimary : colors.rgbPrimary);
  //   console.log('a');
  // }, [select]);

  return (
    <TouchableOpacity
      style={tw`mr-3 p-3 rounded-full bg-${
        select === false ? colors.textColorPrimary : colors.primary
      }`}
      onPress={async () => {
        await TrackPlayer.setRepeatMode(
          select === false ? RepeatMode.Queue : RepeatMode.Off,
        );
        dispatch(!select);
        console.log(select);
      }}>
      {/* <Text>{select.toString()}</Text> */}
      <FontAwesomeIcon icon={faRefresh} size={25} color={colors.textColor} />
    </TouchableOpacity>
  );
};

export default LoopBtn;

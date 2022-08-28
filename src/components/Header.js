import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Header = props => {
  const {title, icon} = props;
  console.log(icon)

  return (
    <SafeAreaView
      style={tw`p-4 bg-${colors.primary} rounded-full m-2 flex flex-row justify-between items-center`}>
      <Text style={tw`font-bold text-xl text-${colors.textColor}`}>
        {title}
      </Text>
      <FlatList contentContainerStyle={[tw`items-end self-end`]} data={icon} keyExtractor={item => item.iconName} renderItem={item => <TouchableOpacity>
        <FontAwesomeIcon icon={item.item} style={tw`text-${colors.textColor}`} />
      </TouchableOpacity>}/>
    </SafeAreaView>
  );
};

export default Header;

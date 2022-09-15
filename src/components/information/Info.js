import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import {userInfoSelector} from '../../store/selectors';
import InputItem from '../InputItem';

const Info = props => {
  const userInfo = useSelector(userInfoSelector);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setDob(userInfo.dob);
    setPhone(userInfo.phone);
  }, []);

  return (
    <View style={tw`mx-2`}>
      <Text style={tw`font-bold text-${colors.primary}`}>
        Thông tin tài khoản
      </Text>
      <InputItem value={name} setValue={setName} />
      <InputItem value={email} setValue={setEmail} />
      <InputItem value={phone} setValue={setPhone} placeholder="phone" />
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={tw`px-3 p-4 bg-${colors.background} mt-3 rounded-md`}>
        <Text>{dob}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDob(date.toLocaleDateString('vi-VN'));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default Info;

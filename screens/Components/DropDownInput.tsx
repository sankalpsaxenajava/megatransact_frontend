import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import InputField from './InputField';
import ItemsListModal, {ListItem} from './ItemsListModal';

interface DropDownInputProps {
  label: string;
  placeholder: string;
  options: ListItem;
  value: string;
  onChangeValue: (text: string) => void;
}

const DropDownInput: React.FC<DropDownInputProps> = ({
  label,
  placeholder,
  options,
  value,
  onChangeValue,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <Text style={{padding: 10, color: '#000000', fontSize: 14}}>{label}</Text>
      <TouchableOpacity
        onPress={() => {
          setOpenModal(true);
        }}>
        <InputField
          iconName={require('../../assets/icons/arrow_icon.png')}
          placeholder={placeholder}
          secureTextEntry={false}
          value={value}
          onChangeText={onChangeValue}
          editable={false}
          // onBlur={() => setEmailError('')}
          //error={emailError}
        />
      </TouchableOpacity>
      {openModal && (
        <ItemsListModal
          // onTryAgainClick={selectItem}
          onDismiss={() => {
            setOpenModal(false);
          }}
          type={type}
          itemsList={options}
        />
      )}
    </View>
  );
};

export default DropDownInput;

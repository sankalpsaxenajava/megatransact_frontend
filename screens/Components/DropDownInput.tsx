import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import InputField from './InputField';
import ItemsListModal, {ListItem} from './ItemsListModal';

interface DropDownInputProps {
  label: string;
  placeholder: string;
  options: ListItem[];
  value: string;
  type: string;
  onChangeValue: (text: string) => void;
}

const DropDownInput: React.FC<DropDownInputProps> = ({
  label,
  placeholder,
  options,
  value,
  type,
  onChangeValue,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(
    options.filter(option => option.label == value)[0],
  );

  const handleModalInput = (val: ListItem) => {
    onChangeValue(val.label);
    setSelectedItem(val);
    setOpenModal(false);
  };

  return (
    <View>
      <Text style={{color: '#000000', fontSize: 14, paddingVertical: 10}}>
        {label}
      </Text>
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
          labelIcon={selectedItem?.icon}
          // onBlur={() => setEmailError('')}
          //error={emailError}
        />
      </TouchableOpacity>

      <ItemsListModal
        // onTryAgainClick={selectItem}
        onDismiss={() => {
          setOpenModal(false);
        }}
        type={type}
        itemsList={options}
        handleModalInput={handleModalInput}
        selectedItemId={selectedItem?.id}
        isModalOpen={openModal}
      />
    </View>
  );
};

export default DropDownInput;

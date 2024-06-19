import {View, Text} from 'react-native';

export const BalanceComponent = ({
  desc,
  balance,
  customClassName,
  textColor,
  titleSize,
}: {
  desc: string;
  balance: number;
  customClassName?: string;
  textColor?: string;
  titleSize?: number;
}) => {
  const balance_int = Math.floor(balance);
  const balance_frac = (balance - balance_int) * 100;
  let balance_frac_str = balance_frac.toFixed(0);
  if (balance_frac < 10) {
    // requires a zero in front
    balance_frac_str = '0'.concat(balance_frac_str);
  }

  return (
    <View className={`px-2 gap-1 ${customClassName}`}>
      <Text
        className={`text-white text-[${
          titleSize ? titleSize : 18
        }px] ${textColor}`}>
        {desc}
      </Text>
      <View className="flex-row items-end">
        <Text className={`font-manrope text-[30px] text-white ${textColor}`}>
          ${balance_int}.
        </Text>
        <Text className={`font-manrope text-white pb-1 ${textColor}`}>
          {balance_frac_str}
        </Text>
      </View>
    </View>
  );
};

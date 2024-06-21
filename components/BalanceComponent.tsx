import {View, Text} from 'react-native';
import {cn} from '../utils/cn';

export const BalanceComponent = ({
  desc,
  balance,
  componentClassName,
  textColor,
  titleClassName,
  varient,
}: {
  desc: string;
  balance: number;
  componentClassName?: string;
  textColor?: string;
  titleClassName?: string;
  varient: 'straight' | 'uneven';
}) => {
  const balance_int = Math.floor(balance);
  const balance_frac = (balance - balance_int) * 100;
  let balance_frac_str = balance_frac.toFixed(0);
  if (balance_frac < 10) {
    // requires a zero in front
    balance_frac_str = '0'.concat(balance_frac_str);
  }

  return (
    <View className={`px-2 gap-1 ${componentClassName}`}>
      <Text className={cn(`text-white text-lg`, titleClassName, textColor)}>
        {desc}
      </Text>
      <View className="flex-row items-end">
        <Text className={cn(`font-manrope text-3xl text-white`, textColor)}>
          ${balance_int}.
        </Text>
        <Text
          className={cn(
            `font-manrope text-white pb-1`,
            textColor,
            varient == 'straight' && 'pb-0 text-3xl',
          )}>
          {balance_frac_str}
        </Text>
      </View>
    </View>
  );
};

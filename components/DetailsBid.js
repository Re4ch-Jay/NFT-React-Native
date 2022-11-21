import React from "react";
import { View, Text, Image } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }} key={bid.id}>
      <Image 
      source={bid.image} 
      resizeMode='contain'
      style={{
        height: 48,
        width: 48,
      }}
      />
      <View>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}>Bid placed by {bid.name}</Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.secondary,
        }}>{bid.date}</Text>
      </View>

      <EthPrice price={4.25}/>

    </View>
  );
};

export default DetailsBid;

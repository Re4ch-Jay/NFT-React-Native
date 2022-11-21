import React, { useState } from "react";
import { View, Text } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)
  return (
    <View style={{ padding: SIZES.font}}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
      }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator} 
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font} />
        <EthPrice price={4.15} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{fontFamily: FONTS.bold}}>Description</Text>
        <Text>
          {text}
          {!readMore && '....'}
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.bold,
            color: COLORS.primary
          }}
          onPress={() => {
            if(!readMore) {
              setText(data.description)
              setReadMore(true)
            }else {
              setText(data.description.slice(0, 100))
              setReadMore(false)
            }
          }}
          >{readMore ? ' Show less' : 'Read More'}</Text>
        </Text>
        
      </View>

    </View>
  );
};

export default DetailsDesc;

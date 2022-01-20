import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder-2';
import { scaleWidth } from '~core/themes/mixins';

const ArticlePlaceholder = () => {
  return (
    <SkeletonPlaceholder>
      <View>
        <View
          style={{
            width: scaleWidth(108),
            height: 20,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
        {new Array(15).fill(0).map((_, index) => (
          <View
            key={index}
            style={{
              width: scaleWidth(335),
              height: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
          />
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};

export default ArticlePlaceholder;

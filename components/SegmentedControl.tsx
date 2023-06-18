import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text } from "native-base";

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

const width = Dimensions.get("screen").width - 32;

const SegmentedControl = (props) => {
  const translateValue = (width - 4) / props?.tabs?.length;
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0));

  const memoizedTabPressCallback = React.useCallback((index) => {
    props?.onChange(index);
  }, []);

  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: props?.currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [props?.currentIndex]);

  return (
    <Animated.View style={[styles.segmentedControlWrapper]}>
      <Animated.View
        style={[
          {
            ...(StyleSheet.absoluteFill as Object),
            position: "absolute",
            width: (width - 4) / props?.tabs?.length,
            top: 0,
            marginVertical: 4,
            marginHorizontal: 4,
            backgroundColor: "black",
            borderRadius: 16,

            ...shadow,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      ></Animated.View>
      {props?.tabs.map((tab, index) => {
        const isCurrentIndex = props?.currentIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={styles.textWrapper}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}
          >
            <Text
              fontSize={14}
              textAlign="center"
              fontFamily="NunitoBold"
              color={isCurrentIndex ? "muted.100" : "muted.900"}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    width: width,
    marginVertical: 20,
    backgroundColor: "#e6ebf2",
    paddingVertical: 18,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
  textStyles: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});

SegmentedControl.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  segmentedControlBackgroundColor: PropTypes.string,
  activeSegmentBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number,
};

SegmentedControl.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: "#E5E5EA",
  activeSegmentBackgroundColor: "white",
  textColor: "black",
  activeTextColor: "black",
  paddingVertical: 12,
};

export default SegmentedControl;

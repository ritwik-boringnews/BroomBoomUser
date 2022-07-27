import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 380;
const guidelineBaseHeight = 815;

const metrics = {
  horizontalScale: (size) => (width / guidelineBaseWidth) * size,
  verticalScale: (size) => (height / guidelineBaseHeight) * size,
  moderateScale: (size, factor = 0.25) =>
    size + (metrics.scale(size) - size) * factor,
};
export default metrics;

import metrics from "../../Utility/metrics";
import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container: {
    paddingRight: metrics.scale(20),
    paddingLeft: metrics.scale(20),
    paddingTop: metrics.verticalScale(5),
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
    width: "100%",
  },
  textP: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    marginTop: metrics.verticalScale(10),
    marginBottom: metrics.verticalScale(10),
  },
  btn: {
    width: "100%",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop: metrics.verticalScale(10),
    marginBottom: metrics.verticalScale(10),
    backgroundColor: "#F5C001",
    marginTop: "68%",
  },
  centerText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    // paddingVertical: metrics.verticalScale(2),
    paddingHorizontal: metrics.scale(10),
    marginBottom: metrics.verticalScale(25),
    marginTop: metrics.verticalScale(20),
  },
  input: {width: "80%", fontSize: 16},
  inputbtn: {fontSize: 16, fontWeight: "500", color: "#347EEA"},
  box: {
    height: 130,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
    marginTop: 15,
  },
});

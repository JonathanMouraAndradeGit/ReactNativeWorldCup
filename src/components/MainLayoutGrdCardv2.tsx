import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function MainLayoutGrdCardv2(props:any) {
  const {
    mainTitle,
    mainImage,
    mainDescription,
    mainDate,

    sideTitle1,
    sideImage1,
    sideDescription1,
    sideDate1,

    sideTitle2,
    sideImage2,
    sideDescription2,
    sideDate2,
  } = props;

  return (
    <View style={styles.ContentCon}>
      
      {/* MAIN CARD */}
      <TouchableOpacity style={styles.ItemCCON}>
        <View style={styles.MainContentBox}>
          
          <View style={styles.tagTxt}>
            <Text style={styles.tagTxtText}>
              WORLD CUP 2026
            </Text>
          </View>

          <Text style={styles.mainTitle}>
            {mainTitle}
          </Text>

          <View style={styles.imgCon2}>
            <Image
              source={{ uri: mainImage }}
              style={styles.mainImage}
            />
          </View>

          <Text style={styles.mainDescription}>
            {mainDescription}
          </Text>

          <Text style={styles.dateTxt}>
            {mainDate}
          </Text>
        </View>
      </TouchableOpacity>

      {/* SIDE CARD 1 */}
      <TouchableOpacity style={styles.ItemCCON}>
        <View style={styles.ContentBox1}>
          
          <View style={styles.ImgCon}>
            <Image
              source={{ uri: sideImage1 }}
              style={styles.sideImage}
            />
          </View>

          <View style={styles.TextCon}>
            <Text style={styles.sideTitle}>
              {sideTitle1}
            </Text>

            <Text style={styles.sideDescription}>
              {sideDescription1}
            </Text>

            <Text style={styles.dateTxt}>
              {sideDate1}
            </Text>
          </View>

        </View>
      </TouchableOpacity>

      {/* SIDE CARD 2 */}
      <TouchableOpacity style={styles.ItemCCON}>
        <View style={styles.ContentBox1}>
          
          <View style={styles.ImgCon}>
            <Image
              source={{ uri: sideImage2 }}
              style={styles.sideImage}
            />
          </View>

          <View style={styles.TextCon}>
            <Text style={styles.sideTitle}>
              {sideTitle2}
            </Text>

            <Text style={styles.sideDescription}>
              {sideDescription2}
            </Text>

            <Text style={styles.dateTxt}>
              {sideDate2}
            </Text>
          </View>

        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  /* CONTAINER */
  ContentCon: {
    width: "100%",
    gap: 20,
  },

  /* CARD BASE */
  ItemCCON: {
    width: "100%",

    backgroundColor: "#101b2d",

    borderRadius: 20,

    overflow: "hidden",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },

  /* MAIN CARD */
  MainContentBox: {
    width: "100%",

    padding: 20,

    gap: 15,
  },

  tagTxt: {
    alignSelf: "flex-start",

    paddingVertical: 8,
    paddingHorizontal: 14,

    borderRadius: 999,

    backgroundColor: "#ffb703",
  },

  tagTxtText: {
    color: "#000",

    fontSize: 12,
    fontWeight: "bold",
  },

  mainTitle: {
    color: "#fff",

    fontSize: width * 0.08,
    fontWeight: "bold",

    lineHeight: width * 0.09,
  },

  mainDescription: {
    color: "#d1d1d1",

    lineHeight: 24,

    fontSize: 15,
  },

  dateTxt: {
    color: "#8d99ae",

    fontSize: 12,
  },

  /* MAIN IMAGE */
  imgCon2: {
    width: "100%",

    height: 220,

    borderRadius: 15,

    overflow: "hidden",
  },

  mainImage: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  /* SIDE CARD */
  ContentBox1: {
    width: "100%",

    flexDirection: "row",

    gap: 15,

    padding: 15,
  },

  /* SIDE IMAGE */
  ImgCon: {
    width: "40%",

    height: 120,

    borderRadius: 15,

    overflow: "hidden",
  },

  sideImage: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  /* TEXT */
  TextCon: {
    flex: 1,

    justifyContent: "space-between",
  },

  sideTitle: {
    color: "#fff",

    fontSize: 18,
    fontWeight: "bold",

    lineHeight: 24,
  },

  sideDescription: {
    color: "#cfcfcf",

    lineHeight: 20,

    fontSize: 14,
  },
});
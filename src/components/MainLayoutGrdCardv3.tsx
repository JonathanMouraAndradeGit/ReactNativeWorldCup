import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const { width } = Dimensions.get("window");

export default function MainLayoutGrdCardv3(props:any) {
  const {
    sectionTitle,

    mainTitle1,
    mainImage1,
    mainDescription1,
    mainDate1,

    mainTitle2,
    mainImage2,
    mainDescription2,
    mainDate2,

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
    <View style={styles.UpperContent}>
      
      {/* HEADER */}
      <View style={styles.headerSection}>
        <View style={styles.liveTag}>
          <Text style={styles.liveTagText}>
            WORLD CUP 2026
          </Text>
        </View>

        <Text style={styles.titleTxt}>
          {sectionTitle}
        </Text>
      </View>

      {/* GRID */}
      <View style={styles.ContentCon}>
        
        {/* MAIN CARD 1 */}
        <TouchableOpacity style={styles.ItemCCON}>
          <View style={styles.MainContentBox}>
            <View style={styles.imgCon2}>
              <Image
                source={{ uri: mainImage1 }}
                style={styles.mainImage}
              />
            </View>

            <Text style={styles.mainTitle}>
              {mainTitle1}
            </Text>

            <Text style={styles.mainDescription}>
              {mainDescription1}
            </Text>

            <Text style={styles.dateTxt}>
              {mainDate1}
            </Text>
          </View>
        </TouchableOpacity>

        {/* MAIN CARD 2 */}
        <TouchableOpacity style={styles.ItemCCON}>
          <View style={styles.MainContentBox}>
            <View style={styles.imgCon2}>
              <Image
                source={{ uri: mainImage2 }}
                style={styles.mainImage}
              />
            </View>

            <Text style={styles.mainTitle}>
              {mainTitle2}
            </Text>

            <Text style={styles.mainDescription}>
              {mainDescription2}
            </Text>

            <Text style={styles.dateTxt}>
              {mainDate2}
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
    </View>
  );
}

const styles = StyleSheet.create({
  UpperContent: {
    width: "100%",
    padding: 25,

    borderRadius: 25,

    backgroundColor: "#111827",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",

    gap: 25,
  },

  /* HEADER */
  headerSection: {
    gap: 10,
  },

  liveTag: {
    alignSelf: "flex-start",

    paddingVertical: 8,
    paddingHorizontal: 15,

    borderRadius: 999,

    backgroundColor: "#ffb703",
  },

  liveTagText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },

  titleTxt: {
    color: "#fff",

    fontSize: width * 0.08,
    fontWeight: "900",

    textTransform: "uppercase",

    lineHeight: width * 0.08,
  },

  /* GRID */
  ContentCon: {
    gap: 20,
  },

  /* CARD BASE */
  ItemCCON: {
    width: "100%",

    backgroundColor: "#1e293b",

    borderRadius: 20,

    overflow: "hidden",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
  },

  /* MAIN CARD */
  MainContentBox: {
    padding: 18,
    gap: 15,
  },

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

  mainTitle: {
    color: "#fff",

    fontSize: 26,
    fontWeight: "bold",

    lineHeight: 32,
  },

  mainDescription: {
    color: "#cbd5e1",

    fontSize: 15,

    lineHeight: 24,
  },

  /* SIDE CARD */
  ContentBox1: {
    flexDirection: "row",

    gap: 15,

    padding: 15,
  },

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

  TextCon: {
    flex: 1,

    justifyContent: "space-between",
  },

  sideTitle: {
    color: "#fff",

    fontSize: 16,
    fontWeight: "bold",

    lineHeight: 22,
  },

  sideDescription: {
    color: "#cbd5e1",

    fontSize: 14,

    lineHeight: 20,
  },

  dateTxt: {
    color: "#94a3b8",

    fontSize: 12,
  },
});
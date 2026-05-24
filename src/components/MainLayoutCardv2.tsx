import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from 'expo-router';


export default function MainLayoutCardv2(props: any) {

  const router = useRouter();

  const {
    country,
    image,
    title,
    description,
    group,
    stadium,
    path
  } = props;

  function goTo() {
    router.push(path);
  }

  return (
    <View style={styles.MainLayoutCardContainer}>
      
      {/* IMAGE */}
      <View style={styles.CardimgCon}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        {/* Overlay */}
        <View style={styles.overlay} />

        {/* Country Tag */}
        <View style={styles.countryTag}>
          <Text style={styles.countryTagText}>
            {country}
          </Text>
        </View>

        {/* Bottom Info */}
        <View style={styles.bottomInfo}>
          <Text style={styles.bottomInfoText}>
            {group}
          </Text>

          <Text style={styles.bottomInfoText}>
            {stadium}
          </Text>
        </View>
      </View>

      {/* INFO */}
      <View style={styles.CardInfo}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={goTo}
        >
          <Text style={styles.buttonText}>
            VER MAIS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainLayoutCardContainer: {
    width: "100%",
    backgroundColor: "#1e293b",

    borderRadius: 25,
    overflow: "hidden",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",

    marginBottom: 25,
  },

  /* IMAGE */
  CardimgCon: {
    width: "100%",
    height: 320,
    position: "relative",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  /* COUNTRY TAG */
  countryTag: {
    position: "absolute",
    top: 15,
    left: 15,

    paddingVertical: 8,
    paddingHorizontal: 15,

    borderRadius: 999,

    backgroundColor: "rgba(255,255,255,0.15)",
  },

  countryTagText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  /* BOTTOM INFO */
  bottomInfo: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 15,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  bottomInfoText: {
    color: "#fff",
    fontSize: 12,
  },

  /* INFO */
  CardInfo: {
    padding: 25,
    gap: 15,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
  },

  description: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 24,
  },

  /* BUTTON */
  button: {
    width: "100%",

    paddingVertical: 14,

    borderRadius: 12,

    backgroundColor: "#0077b6",

    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    title: "USA",
    subtitle: "New York",
    img: require("../../assets/img/ny.jpg"),
  },
  {
    id: "2",
    title: "Canada",
    subtitle: "Toronto",
    img: require("../../assets/img/Toronto-1.jpg"),
  },
  {
    id: "3",
    title: "Mexico",
    subtitle: "Cidade do México",
    img: require("../../assets/img/mex.jpg"),
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0 && viewableItems[0].index != null) {
      setIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 80,
  }).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let next = prev + 1;
        if (next >= DATA.length) next = 0;

        flatListRef.current?.scrollToIndex({
          index: next,
          animated: true,
        });

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.img} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        initialScrollIndex={0}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <View style={styles.dots}>
        {DATA.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: "#000", }, 
  slide: { width, height: 500, justifyContent: "center", alignItems: "center", }, 
  image: { width: "100%", height: "100%", resizeMode: "cover",objectFit:"cover" }, 
  overlay: { position: "absolute", bottom: 20, left: 20, }, 
  title: { fontSize: 28, color: "#fff", fontWeight: "bold", }, 
  subtitle: { fontSize: 16, color: "#ddd", }, 
  dots: { flexDirection: "row", 
  justifyContent: "center", marginTop: 10, }, 
  dot: { width: 8, height: 8, borderRadius: 4, 
    backgroundColor: "#555", marginHorizontal: 4, }, 
    activeDot: { backgroundColor: "#fff", width: 10, height: 10, }, });
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MainLayoutCardv2 from "@/components/MainLayoutCardv2";
import MainLayoutGrdCardv2 from "@/components/MainLayoutGrdCardv2";
import MainLayoutGrdCardv3 from "@/components/MainLayoutGrdCardv3";

import Quiz from "@/components/quiz";

import Slider from "@/components/SliderFF2";

const { width, height } = Dimensions.get("window");

export default function MainHome() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
          }}
          style={styles.heroImage}
        />

        <View style={styles.overlay} />

        <View style={styles.heroContent}>
          <View style={styles.heroTag}>
            <Text style={styles.heroTagText}>
              FIFA WORLD CUP 2026
            </Text>
          </View>

          <Text style={styles.heroTitle}>
            A maior Copa do Mundo da história começa em 2026
          </Text>

          <Text style={styles.heroDescription}>
            Estados Unidos, México e Canadá serão palco de uma
            competição histórica com 48 seleções.
          </Text>

          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>
              VER TABELA
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Slider></Slider>

      <Quiz></Quiz>

      {/* STADIUM SECTION */}
      <View style={styles.mainCardContainer}>
        <View style={styles.mainCardContainersub}>

          <View style={styles.headerArea}>
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>
                FIFA WORLD CUP 2026
              </Text>
            </View>

            <Text style={styles.titleTxt}>
              ESTÁDIOS DA COPA
            </Text>
          </View>

          <View style={styles.CardContainer}>

            <MainLayoutCardv2
              country="USA"
              image="https://paises.ibge.gov.br/img/bandeiras/US.gif"
              title="MetLife Stadium"
              description="O estádio receberá a grande final da Copa do Mundo 2026."
              group="Grupo A"
              stadium="Nova York"
              path="/uspage"
            />

            <MainLayoutCardv2
              country="CANADA"
              image="https://paises.ibge.gov.br/img/bandeiras/CA.gif"
              title="Toronto Stadium"
              description="O Canadá terá partidas importantes durante a competição."
              group="Grupo B"
              stadium="Toronto"
              path="/capage"
            />

            <MainLayoutCardv2
              country="MEXICO"
              image="https://paises.ibge.gov.br/img/bandeiras/MX.gif"
              title="Azteca Stadium"
              description="O lendário estádio receberá novamente jogos históricos."
              group="Grupo C"
              stadium="Cidade do México"
              path="/mepage"
            />
          </View>
        </View>
      </View>

      {/* NEWS GRID V3 */}
      <View style={styles.CardItemCls}>
        <MainLayoutGrdCardv3
          sectionTitle="ÚLTIMAS NOTÍCIAS"

          mainTitle1="Brasil confirma convocação oficial"
          mainImage1="https://paises.ibge.gov.br/img/bandeiras/BR.gif"
          mainDescription1="Dorival Jr divulga lista final da seleção."
          mainDate1="19/05/2026"

          mainTitle2="Argentina quer defender o título"
          mainImage2="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop"
          mainDescription2="Messi pode disputar sua última Copa."
          mainDate2="18/05/2026"

          sideTitle1="França chega forte"
          sideImage1="https://paises.ibge.gov.br/img/bandeiras/FR.gif"
          sideDescription1="Mbappé lidera elenco recheado de estrelas."
          sideDate1="17/05/2026"

          sideTitle2="Canadá prepara festa histórica"
          sideImage2="https://paises.ibge.gov.br/img/bandeiras/CA.gif"
          sideDescription2="O país terá grandes jogos durante a competição."
          sideDate2="16/05/2026"
        />
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.conL}>

        {/* LEFT */}
        <View style={styles.mainCLst}>

          {/* MAIN NEWS */}
          <View style={styles.mainNews}>

            <View style={styles.newsImage}>
              <Image
                source={
                  require('../../assets/img/ny.jpg')
                  //uri: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop",
                }
                style={styles.newsImg}
              />
            </View>

            <View style={styles.newsContent}>
              <Text style={styles.newsTag}>
                ABERTURA
              </Text>

              <Text style={styles.newsTitle}>
                Final da Copa de 2026 será em Nova York
              </Text>

              <Text style={styles.newsDescription}>
                O torneio contará com estádios modernos,
                tecnologia avançada e uma experiência inédita.
              </Text>

              <Text style={styles.newsDate}>
                19/05/2026
              </Text>
            </View>
          </View>

          {/* GRID V2 */}
          <MainLayoutGrdCardv2
            mainTitle="Brasil chega como favorito para a Copa 2026"
            mainImage="https://paises.ibge.gov.br/img/bandeiras/BR.gif"
            mainDescription="A seleção brasileira aposta em uma nova geração."
            mainDate="19/05/2026"

            sideTitle1="Mbappé lidera França"
            sideImage1="https://paises.ibge.gov.br/img/bandeiras/FR.gif"
            sideDescription1="A França chega entre as favoritas."
            sideDate1="18/05/2026"

            sideTitle2="Estados Unidos preparados"
            sideImage2="https://paises.ibge.gov.br/img/bandeiras/US.gif"
            sideDescription2="O país-sede investe pesado em estrutura."
            sideDate2="17/05/2026"
          />

          {/* NEWS GRID 
          <View style={styles.CardLst}>
            {Array.from(Array(8).keys()).map((el, i) => (
              <TouchableOpacity
                style={styles.ItemCard}
                key={i}
              >
                <View style={styles.imgConCard}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
                    }}
                    style={styles.cardImage}
                  />
                </View>

                <Text style={styles.cardTitle}>
                  Seleção destaque {i + 1}
                </Text>

                <Text style={styles.cardDescription}>
                  Veja as novidades das equipes favoritas.
                </Text>

                <Text style={styles.cardDate}>
                  18/05/2026
                </Text>
              </TouchableOpacity>
            ))}
          </View>*/}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ⚽ Viva a experiência da Copa do Mundo
          </Text>
        </View>
        {/* RIGHT 
        <View style={styles.sideInfo}>
          
          <Text style={styles.sideTitleSection}>
            GRUPOS
          </Text>

          {["Brasil", "Argentina", "França", "Portugal"].map(
            (el, i) => (
              <View style={styles.teamCard} key={i}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
                  }}
                  style={styles.teamImage}
                />

                <View>
                  <Text style={styles.teamName}>
                    {el}
                  </Text>

                  <Text style={styles.teamDesc}>
                    Favorita ao título
                  </Text>
                </View>
              </View>
            )
          )}

          <Text style={styles.sideTitleSection}>
            ARTILHEIROS
          </Text>

          {["Mbappé", "Vini Jr", "Haaland", "Bellingham"].map(
            (el, i) => (
              <View style={styles.lstItem} key={i}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
                  }}
                  style={styles.playerImage}
                />

                <Text style={styles.playerName}>
                  {el}
                </Text>
              </View>
            )
          )}
        </View>*/}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07111f",
  },

  /* HERO */
  heroSection: {
    width: "100%",
    height: height * 0.8,

    position: "relative",
  },

  heroImage: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(7,17,31,0.6)",
  },

  heroContent: {
    position: "absolute",

    bottom: "10%",
    left: 20,
    right: 20,

    gap: 15,
  },

  heroTag: {
    alignSelf: "flex-start",

    paddingVertical: 8,
    paddingHorizontal: 15,

    borderRadius: 999,

    backgroundColor: "#ffb703",
  },

  heroTagText: {
    color: "#000",
    fontWeight: "bold",
  },

  heroTitle: {
    color: "#fff",

    fontSize: width * 0.11,
    fontWeight: "bold",

    lineHeight: width * 0.12,
  },

  heroDescription: {
    color: "#d6d6d6",

    fontSize: 16,

    lineHeight: 24,
  },

  heroButton: {
    alignSelf: "flex-start",

    paddingVertical: 15,
    paddingHorizontal: 25,

    borderRadius: 10,

    backgroundColor: "#00b4d8",
  },

  heroButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  /* SECTION */
  mainCardContainer: {
    padding: 20,
  },

  mainCardContainersub: {
    gap: 25,
  },

  headerArea: {
    gap: 10,
  },

  liveBadge: {
    alignSelf: "flex-start",

    paddingVertical: 8,
    paddingHorizontal: 15,

    borderRadius: 999,

    backgroundColor: "#ffb703",
  },

  liveBadgeText: {
    color: "#000",
    fontWeight: "bold",
  },

  titleTxt: {
    color: "#fff",

    fontSize: width * 0.08,
    fontWeight: "900",
  },

  CardContainer: {
    gap: 25,
  },

  CardItemCls: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },

  /* MAIN LAYOUT */
  conL: {
    paddingHorizontal: 20,
    gap: 25,
  },

  mainCLst: {
    gap: 25,
  },

  /* MAIN NEWS */
  mainNews: {
    backgroundColor: "#101b2d",

    borderRadius: 20,

    overflow: "hidden",
  },

  newsImage: {
    width: "100%",
    height: 220,
  },

  newsImg: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  newsContent: {
    padding: 25,

    gap: 15,
  },

  newsTag: {
    color: "#ffb703",
    fontWeight: "bold",
  },

  newsTitle: {
    color: "#fff",

    fontSize: width * 0.07,
    fontWeight: "bold",

    lineHeight: width * 0.08,
  },

  newsDescription: {
    color: "#cfcfcf",

    lineHeight: 24,
  },

  newsDate: {
    color: "#999",
  },

  /* GRID CARDS */
  CardLst: {
    gap: 20,
  },

  ItemCard: {
    backgroundColor: "#101b2d",

    borderRadius: 15,

    overflow: "hidden",
  },

  imgConCard: {
    width: "100%",
    height: 180,
  },

  cardImage: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  cardTitle: {
    color: "#fff",

    fontSize: 18,
    fontWeight: "bold",

    padding: 15,
    paddingBottom: 5,
  },

  cardDescription: {
    color: "#cfcfcf",

    paddingHorizontal: 15,

    lineHeight: 22,
  },

  cardDate: {
    color: "#999",

    padding: 15,
  },

  /* SIDE */
  sideInfo: {
    gap: 20,
    marginTop: 25,
  },

  sideTitleSection: {
    color: "#ffb703",

    fontSize: 22,
    fontWeight: "bold",

    borderLeftWidth: 4,
    borderLeftColor: "#00b4d8",

    paddingLeft: 10,
  },

  teamCard: {
    flexDirection: "row",
    alignItems: "center",

    gap: 15,

    backgroundColor: "#101b2d",

    padding: 10,

    borderRadius: 12,
  },

  teamImage: {
    width: 60,
    height: 60,

    borderRadius: 999,
  },

  teamName: {
    color: "#fff",
    fontWeight: "bold",
  },

  teamDesc: {
    color: "#999",
  },

  lstItem: {
    flexDirection: "row",
    alignItems: "center",

    gap: 10,

    backgroundColor: "#101b2d",

    padding: 10,

    borderRadius: 10,
  },

  playerImage: {
    width: 50,
    height: 50,

    borderRadius: 999,
  },

  playerName: {
    color: "#fff",
    fontWeight: "bold",
  },

  footer: {
    paddingVertical: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#6ea8ff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
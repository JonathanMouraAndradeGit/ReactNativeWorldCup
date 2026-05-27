import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

export default function CopaUSA() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.heroSection}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1600&auto=format&fit=crop",
            }}
            style={styles.heroImage}
          >
            <View style={styles.overlay} />

            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Copa do Mundo{"\n"}nos Estados Unidos
              </Text>

              <Text style={styles.heroSubtitle}>
                Futebol, cultura e espetáculo em um dos maiores eventos esportivos do planeta.
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>

          {/* HISTÓRIA */}
          <View style={styles.card}>
            <View style={styles.contentRow}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: "https://paises.ibge.gov.br/img/bandeiras/US.gif",
                }}
              />

              <View style={styles.contentTextBox}>
                <Text style={styles.sectionTitle}>História</Text>
                <Text style={styles.sectionText}>
                  A história dos Estados Unidos começa com as 13 colônias britânicas na costa leste da América do Norte, que buscavam maior autonomia diante dos impostos e regras impostas pela Inglaterra. Esse conflito levou à Guerra de Independência (1775–1783), quando os colonos, liderados por figuras como George Washington, derrotaram os britânicos e declararam independência em 1776.

                  Após a independência, o país cresceu rapidamente para o oeste, por meio de expansão territorial, imigração e industrialização. No século XIX, os EUA passaram por conflitos internos como a Guerra Civil (1861–1865), que aboliu a escravidão e fortaleceu o governo federal.

                  No século XX, os Estados Unidos se tornaram uma potência global após vencer a Primeira e a Segunda Guerra Mundial. Durante a Guerra Fria, disputaram influência com a União Soviética, consolidando-se como líder econômico, tecnológico e militar.

                  Hoje, os Estados Unidos são considerados uma potência global, com forte influência na economia, cultura, tecnologia e política mundial.
                </Text>
              </View>
            </View>
          </View>

          {/* CULTURA */}
          <View style={styles.card}>
            <View style={styles.contentRow}>
              <View style={styles.contentTextBox}>
                <Text style={styles.sectionTitle}>Cultura</Text>
                <Text style={styles.sectionText}>
                  A cultura dos Estados Unidos é marcada pela diversidade, resultado da mistura de povos indígenas, colonizadores europeus e milhões de imigrantes de diferentes partes do mundo. Essa combinação criou uma sociedade multicultural com grande variedade de costumes, idiomas e tradições.

                  O país é conhecido por influenciar fortemente a cultura global por meio do cinema (Hollywood), da música (como jazz, rock, hip-hop e pop), da moda e da televisão. Além disso, esportes como futebol americano, basquete, baseball e hockey fazem parte da identidade cultural americana.

                  A cultura também valoriza muito a liberdade individual, o empreendedorismo e a inovação, refletidos no estilo de vida urbano e tecnológico do país. Ao mesmo tempo, há grande diversidade regional, com diferenças marcantes entre estados e comunidades.

                  Hoje, a cultura dos Estados Unidos é uma das mais influentes do mundo, ajudando a moldar tendências globais em entretenimento, tecnologia e comportamento.
                </Text>
              </View>
              <Image
                style={styles.contentImage}
                source={
                  require('../../assets/img/ny.jpg')
                  //uri: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop",
                }
              />
            </View>
          </View>

          {/* TRAJETÓRIA */}
          <View style={styles.card}>
            <View style={styles.contentRow}>
              <Image
                style={styles.contentImage}
                source={
                  require('../../assets/img/stad.jpg')
                }
              />

              <View style={styles.contentTextBox}>
                <Text style={styles.sectionTitle}>Trajetória</Text>
                <Text style={styles.sectionText}>
                  A trajetória dos Estados Unidos no esporte, especialmente no futebol, é marcada por crescimento gradual e evolução recente. Por muito tempo, o futebol teve pouca popularidade no país, que priorizava esportes como futebol americano, basquete e baseball.

                  Um grande ponto de virada aconteceu com a Copa do Mundo de 1994, sediada nos EUA, que aumentou o interesse nacional pelo esporte e impulsionou a criação e expansão da liga profissional, a Major League Soccer (MLS). A partir daí, o país passou a investir mais em infraestrutura e formação de atletas.

                  A seleção dos Estados Unidos evoluiu ao longo das décadas, passando de participações modestas na Copa do Mundo para uma equipe mais competitiva, com presença mais constante no torneio e melhores resultados internacionais.

                  Nos últimos anos, uma nova geração de jogadores que atua em grandes clubes europeus tem fortalecido ainda mais a equipe, colocando os EUA como uma seleção em ascensão no cenário mundial do futebol.
                </Text>
              </View>
            </View>
          </View>

          {/* ESTATÍSTICAS */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Desempenho Histórico</Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>115</Text>
                <Text style={styles.statLabel}>Vitórias</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>80</Text>
                <Text style={styles.statLabel}>Derrotas</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>340</Text>
                <Text style={styles.statLabel}>Jogos</Text>
              </View>
            </View>
          </View>

          {/* JOGADORES 
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Jogadores em Destaque</Text>

            <View style={styles.player}>
              <Image
                style={styles.playerImg}
                source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
              />
              <View>
                <Text style={styles.playerName}>Christian Pulisic</Text>
                <Text style={styles.sectionText}>
                  Principal referência ofensiva da seleção, atua na Europa e é
                  destaque pela velocidade e técnica.
                </Text>
              </View>
            </View>

            <View style={styles.player}>
              <Image
                style={styles.playerImg}
                source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
              />
              <View>
                <Text style={styles.playerName}>Weston McKennie</Text>
                <Text style={styles.sectionText}>
                  Meio-campista versátil, forte fisicamente e importante na marcação
                  e transição de jogo.
                </Text>
              </View>
            </View>

            <View style={styles.player}>
              <Image
                style={styles.playerImg}
                source={{ uri: "https://randomuser.me/api/portraits/men/50.jpg" }}
              />
              <View>
                <Text style={styles.playerName}>Giovanni Reyna</Text>
                <Text style={styles.sectionText}>
                  Jovem talento criativo, conhecido pela visão de jogo e dribles
                  rápidos.
                </Text>
              </View>
            </View>
          </View>*/}

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              ⚽ Viva a experiência da Copa do Mundo nos Estados Unidos
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07111f",
  },

  heroSection: {
    height: height * 0.78,
  },

  heroImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  heroContent: {
    padding: 25,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "800",
    lineHeight: 46,
  },

  heroSubtitle: {
    color: "#cfe3ff",
    fontSize: 16,
    marginTop: 12,
    lineHeight: 24,
  },

  content: {
    padding: 18,
    marginTop: -30,
  },

  card: {
    backgroundColor: "#0d1b2d",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },

  sectionTitle: {
    color: "#4da3ff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  sectionText: {
    color: "#c7d2e1",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify"
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  statBox: {
    alignItems: "center",
    flex: 1,
  },

  statNumber: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  statLabel: {
    color: "#9bb4d1",
    fontSize: 12,
    marginTop: 4,
  },

  player: {
    flexDirection: "row",
    marginTop: 14,
    gap: 12,
  },

  playerImg: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },

  playerName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  contentImage: {
    width: 290,
    height: 290,
    borderRadius: 14,
    backgroundColor: "#1b2a41",
  },

  contentTextBox: {
    flex: 1,
  },
});
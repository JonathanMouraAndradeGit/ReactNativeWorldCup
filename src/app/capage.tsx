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

export default function caPage(props: any) {
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
                                Copa do Mundo{"\n"}no Canada
                            </Text>

                            <Text style={styles.heroSubtitle}>
                                Futebol, cultura e espetáculo em um dos maiores eventos esportivos do planeta.
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                {/* HISTÓRIA CANADÁ */}
                <View style={styles.card}>
                    <View style={styles.contentRow}>
                        <Image
                            style={styles.contentImage}
                            source={{
                                uri: "https://paises.ibge.gov.br/img/bandeiras/CA.gif",
                            }}
                        />

                        <View style={styles.contentTextBox}>
                            <Text style={styles.sectionTitle}>História</Text>
                            <Text style={styles.sectionText}>
                                A história do Canadá começa com povos indígenas que habitavam o território
                                há milhares de anos. A colonização europeia teve início no século XVI, com
                                franceses e britânicos disputando o controle da região.

                                Em 1867, o Canadá se tornou oficialmente um país independente dentro do
                                Império Britânico, iniciando seu processo de autonomia política gradual.
                                Ao longo do século XX, o país consolidou sua soberania e se tornou uma
                                nação estável, democrática e altamente desenvolvida.

                                Hoje, o Canadá é reconhecido por sua qualidade de vida, diversidade cultural
                                e forte presença global em diplomacia, economia e meio ambiente.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* CULTURA CANADÁ */}
                <View style={styles.card}>
                    <View style={styles.contentRow}>
                        <View style={styles.contentTextBox}>
                            <Text style={styles.sectionTitle}>Cultura</Text>
                            <Text style={styles.sectionText}>
                                A cultura canadense é marcada pela diversidade, sendo influenciada por
                                tradições indígenas, britânicas, francesas e de imigrantes do mundo inteiro.

                                O país valoriza a multiculturalidade, o respeito às diferenças e a
                                convivência harmoniosa entre culturas. O bilinguismo (inglês e francês)
                                é uma característica importante, especialmente em regiões como Quebec.

                                Além disso, o Canadá é forte no esporte, especialmente no hóquei no gelo,
                                considerado parte essencial da identidade nacional.
                            </Text>
                        </View>

                        <Image
                            style={styles.contentImage}
                            source={
                                require('../../assets/img/Toronto-1.jpg')
                            }
                        />
                    </View>
                </View>

                {/* TRAJETÓRIA CANADÁ */}
                <View style={styles.card}>
                    <View style={styles.contentRow}>
                        <Image
                            style={styles.contentImage}
                            source={
                                require('../../assets/img/stad.jpg')
                            }
                        />

                        <View style={styles.contentTextBox}>
                            <Text style={styles.sectionTitle}>Trajetória no Futebol</Text>
                            <Text style={styles.sectionText}>
                                O futebol no Canadá cresceu lentamente por décadas, ofuscado por esportes
                                como hóquei e basquete. No entanto, o país começou a investir mais no esporte
                                a partir dos anos 2000.

                                A seleção canadense teve poucas participações em Copas do Mundo, mas voltou
                                a se destacar recentemente após a classificação para a Copa de 2022.

                                Com uma nova geração de jogadores atuando em grandes ligas europeias, o
                                Canadá vive seu melhor momento no futebol e busca consolidação internacional.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* ESTATÍSTICAS CANADÁ */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Desempenho Histórico</Text>

                    <View style={styles.statsRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>70</Text>
                            <Text style={styles.statLabel}>Vitórias</Text>
                        </View>

                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>90</Text>
                            <Text style={styles.statLabel}>Derrotas</Text>
                        </View>

                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>220</Text>
                            <Text style={styles.statLabel}>Jogos</Text>
                        </View>
                    </View>
                </View>

                {/* JOGADORES CANADÁ 
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Jogadores em Destaque</Text>

                    <View style={styles.player}>
                        <Image
                            style={styles.playerImg}
                            source={{ uri: "https://randomuser.me/api/portraits/men/11.jpg" }}
                        />
                        <View>
                            <Text style={styles.playerName}>Alphonso Davies</Text>
                            <Text style={styles.sectionText}>
                                Um dos maiores talentos da história do Canadá, conhecido pela velocidade
                                e atuação no futebol europeu.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.player}>
                        <Image
                            style={styles.playerImg}
                            source={{ uri: "https://randomuser.me/api/portraits/men/22.jpg" }}
                        />
                        <View>
                            <Text style={styles.playerName}>Jonathan David</Text>
                            <Text style={styles.sectionText}>
                                Atacante decisivo, destaque pela precisão nas finalizações e regularidade
                                em alto nível.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.player}>
                        <Image
                            style={styles.playerImg}
                            source={{ uri: "https://randomuser.me/api/portraits/men/33.jpg" }}
                        />
                        <View>
                            <Text style={styles.playerName}>Cyle Larin</Text>
                            <Text style={styles.sectionText}>
                                Centroavante forte fisicamente, importante na história recente da seleção.
                            </Text>
                        </View>
                    </View>
                </View>*/}
                {/* FOOTER */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        ⚽ Viva a experiência da Copa do Mundo no Canada
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
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
import React from "react";
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";

const { height } = Dimensions.get("window");

export default function mePage() {
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
                                Copa do Mundo{"\n"}no Mexico
                            </Text>

                            <Text style={styles.heroSubtitle}>
                                Futebol, cultura e espetáculo em um dos maiores eventos esportivos do planeta.
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                {/* HISTÓRIA CANADÁ */}
                {/* HISTÓRIA MÉXICO */}
                <View style={styles.card}>
                    <View style={styles.contentRow}>
                        <Image
                            style={styles.contentImage}
                            source={{
                                uri: "https://paises.ibge.gov.br/img/bandeiras/MX.gif",
                            }}
                        />

                        <View style={styles.contentTextBox}>
                            <Text style={styles.sectionTitle}>História</Text>
                            <Text style={styles.sectionText}>
                                O México tem uma das histórias mais ricas da América Latina, com civilizações
                                antigas como os astecas e maias. Após a colonização espanhola no século XVI,
                                o país passou por lutas pela independência, conquistada em 1821.

                                Ao longo do tempo, o México se desenvolveu como uma nação culturalmente
                                forte e politicamente influente na região, mantendo viva sua herança indígena
                                e colonial.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* CULTURA MÉXICO */}
                <View style={styles.card}>
                    <View style={styles.contentRow}>
                        <View style={styles.contentTextBox}>
                            <Text style={styles.sectionTitle}>Cultura</Text>
                            <Text style={styles.sectionText}>
                                A cultura mexicana é vibrante e reconhecida mundialmente por suas tradições,
                                música mariachi, gastronomia e festividades como o Día de los Muertos.

                                O país tem forte identidade cultural, misturando heranças indígenas e
                                espanholas. No esporte, o futebol é uma verdadeira paixão nacional,
                                com estádios lotados e grande envolvimento da torcida.
                            </Text>
                        </View>

                        <Image
                            style={styles.contentImage}
                            source={ 
                                require('../../assets/img/mex.jpg')
                            }
                        />
                    </View>
                </View>

                {/* TRAJETÓRIA MÉXICO */}
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
                                O México é uma das seleções mais fortes da CONCACAF, com presença constante
                                em Copas do Mundo desde 1994.

                                Apesar de ainda não ter alcançado uma semifinal de Copa, o país é conhecido
                                por sua consistência e por revelar grandes talentos que atuam na Europa e
                                na liga local, a Liga MX.

                                O México também é famoso por sua torcida apaixonada e por sempre levar
                                milhares de fãs aos estádios.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* ESTATÍSTICAS MÉXICO */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Desempenho Histórico</Text>

                    <View style={styles.statsRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>130</Text>
                            <Text style={styles.statLabel}>Vitórias</Text>
                        </View>

                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>95</Text>
                            <Text style={styles.statLabel}>Derrotas</Text>
                        </View>

                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>380</Text>
                            <Text style={styles.statLabel}>Jogos</Text>
                        </View>
                    </View>
                </View>

                {/* JOGADORES MÉXICO */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Jogadores em Destaque</Text>

                    <View style={styles.player}>
                        <Image
                            style={styles.playerImg}
                            source={{ uri: "https://randomuser.me/api/portraits/men/60.jpg" }}
                        />
                        <View>
                            <Text style={styles.playerName}>Hirving Lozano</Text>
                            <Text style={styles.sectionText}>
                                Atacante rápido e habilidoso, destaque em clubes europeus e peça-chave da seleção.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.player}>
                        <Image
                            style={styles.playerImg}
                            source={{ uri: "https://randomuser.me/api/portraits/men/61.jpg" }}
                        />
                        <View>
                            <Text style={styles.playerName}>Raúl Jiménez</Text>
                            <Text style={styles.sectionText}>
                                Centroavante forte e experiente, conhecido por sua presença ofensiva e finalização.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.player}>
                        <Image
                            style={styles.playerImg}
                            source={{ uri: "https://randomuser.me/api/portraits/men/62.jpg" }}
                        />
                        <View>
                            <Text style={styles.playerName}>Edson Álvarez</Text>
                            <Text style={styles.sectionText}>
                                Volante moderno, forte na marcação e importante na construção defensiva do time.
                            </Text>
                        </View>
                    </View>
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
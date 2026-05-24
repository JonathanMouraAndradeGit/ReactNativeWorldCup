import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from "react-native";

export default function Datacop() {
    const { width, height } = useWindowDimensions();
    const boxWidth = width * 0.3; 
    const boxHeight = height * 0.5;

    const [grupos, setGrupos] = useState<any | null>(null);
    const [paisDetalhe, setPaisDetalhe] = useState<any | null>(null);
    const [jogadores, setJogadores] = useState<any | null>(null);

    const gruposCopa = [
        {
            id: 1,
            nome: "Grupo A",
            paises: ["Brasil", "Argentina", "Franca", "Alemanha"],
        },
        {
            id: 2,
            nome: "Grupo B",
            paises: ["Espanha", "Portugal", "Inglaterra", "Itália"],
        },
        {
            id: 3,
            nome: "Grupo C",
            paises: ["Holanda", "Bélgica", "Uruguai", "Croácia"],
        },
    ];

    async function getPlayersByCountry(country: string) {
        try {
            const result = await fetch("http://localhost:3000/copa_2026")
                .then((res) => res.json());

            const val = result.filter((el: any) => el.pais === country);

            if (val.length === 1) {
                setPaisDetalhe({ img: val[0].imagem_pais });
                setJogadores(val[0].jogadores);
            }

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <ScrollView style={styles.container}>

            {/* GRUPOS */}
            <View style={styles.groupsContainer}>
                {gruposCopa.map((el) => (
                    <TouchableOpacity
                        key={el.id}
                        style={styles.groupButton}
                        onPress={() => setGrupos(el)}
                    >
                        <Text style={styles.groupText}>{el.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* GRUPO SELECIONADO */}
            {grupos && (
                <Text style={styles.title}>
                    {grupos.nome}
                </Text>
            )}

            {/* PAÍSES */}
            <View style={styles.countriesContainer}>
                {grupos &&
                    grupos.paises.map((el: string, i: number) => (
                        <TouchableOpacity
                            key={i}
                            style={styles.countryButton}
                            onPress={() => getPlayersByCountry(el)}
                        >
                            <Text style={styles.countryText}>{el}</Text>
                        </TouchableOpacity>
                    ))}
            </View>

            {/* CONTAINER PRINCIPAL (Bandeira + Jogadores) */}
            <View style={[styles.mainRow,{height:boxWidth}]} >

                {/* BANDEIRA ESQUERDA */}
                {paisDetalhe?.img && (
                    <View style={styles.flagContainer}>
                        <Image
                            source={{ uri: paisDetalhe.img }}
                            style={styles.flag}
                        />
                    </View>
                )}

                {/* JOGADORES DIREITA <View style={styles.playersContainer}>*/}
                <ScrollView style={styles.playersContainer} horizontal={false}>

                    {jogadores && jogadores.map((el: any, i: number) => (
                        <View key={i} style={styles.playerCardRow}>

                            {/* IMAGEM JOGADOR (ESQUERDA DO CARD) */}
                            <Image
                                source={{ uri: el.imagem }}
                                style={styles.playerImageSmall}
                            />

                            {/* INFO (DIREITA DO CARD) */}
                            <View style={styles.playerInfoCol}>

                                <Text style={styles.playerName}>
                                    {el.nome}
                                </Text>

                                <Text style={styles.playerText}>
                                    <Text style={styles.label}>Função: </Text>
                                    {el.funcao}
                                </Text>

                                <Text style={styles.playerText}>
                                    <Text style={styles.label}>Destaque: </Text>
                                    {el.destaque}
                                </Text>

                            </View>

                        </View>
                    ))}

                </ScrollView>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainRow: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 10,
        gap: 10,
        alignItems: "flex-start",
        overflow: "hidden"
    },

    flagContainer: {
        width: "30%",
        aspectRatio:1/1,
        alignItems: "center",
        justifyContent: "flex-start",
    },

    flag: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#00b4d8",
    },

    playersContainer: {
        width: "70%",
        gap: 12,
        height: "100%",
        
    },

    playerCardRow: {
        flexDirection: "row",
        backgroundColor: "rgba(7,17,31,0.6)",
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: "#00b4d8",
        alignItems: "center",
        gap: 10,
    },

    playerImageSmall: {
        width: 70,
        height: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#00b4d8",
    },

    playerInfoCol: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },

    playerText: {
        color: "#fff",
        fontSize: 12,
        marginTop: 2,
    },

    playerName: {
        color: "#00b4d8",
        fontSize: 14,
        fontWeight: "bold",
    },

    label: {
        color: "#aaa",
    },

    container: {
        flex: 1,
        backgroundColor: "#07111f",
        paddingTop: 60,
    },

    groupsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgba(7,17,31,0.6)",
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 12,
    },

    groupButton: {
        backgroundColor: "#00b4d8",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },

    groupText: {
        color: "#fff",
        fontWeight: "bold",
    },

    title: {
        color: "#00b4d8",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },

    countriesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginHorizontal: 10,
        gap: 8,
        marginBottom: 10,
    },

    countryButton: {
        backgroundColor: "rgba(0,180,216,0.15)",
        borderWidth: 1,
        borderColor: "#00b4d8",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
    },

    countryText: {
        color: "#fff",
        fontWeight: "600",
    },


    playerCard: {
        backgroundColor: "rgba(7,17,31,0.6)",
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: "#00b4d8",
    },

    playerImage: {
        width: "100%",
        height: 180,
        borderRadius: 12,
        marginBottom: 10,
    },


    playerInfo: {
        color: "#fff",
        fontSize: 13,
        marginTop: 2,
    },
});
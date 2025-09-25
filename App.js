import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Button,
    Image,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
//import { NativeModules } from 'react-native';

const { height, width } = Dimensions.get("window");

export default function App() {
    const inputRef = useRef(null);
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (password != "smart") {
            ToastAndroid.show("Login fail", ToastAndroid.LONG);
            return;
        }
        ToastAndroid.show("Login Success", ToastAndroid.LONG);
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: width,
                    alignItems: "center",
                    flexDirection: "column"
                }}
            >
                <View style={styles.form}>
                    <Image
                        style={{
                            height: 100,
                            width: 100,
                            textAlign: "center",
                            borderRadius: 100
                        }}
                        source={require("./assets/profile_avatar.png")}
                    />
                </View>
                <View
                    style={{
                        marginBottom: 40
                    }}
                >
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={{ textAlign: "center", color: "#f7bc28" }}>
                        Enter your password
                    </Text>
                </View>
                {/** <TextInput style={styles.input} placeholder="Username" /> **/}
                <TextInput
                    onChangeText={text => setPassword(text)}
                    ref={inputRef}
                    style={styles.inputps}
                    placeholder="Password"
                />

                <TouchableOpacity
                    style={{ alignSelf: "left", marginLeft: 15, marginTop: 10 }}
                >
                    <Text style={{ color: "black" }}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleLogin()}
                    style={styles.button}
                >
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }}>
                    <Text style={{ color: "black" }}>Switch Account</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "centcer",
        justifyContent: "flex-start",
        marginTop: height / 4
    },
    input: {
        height: 50,
        borderColor: "#f7bc28",
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 25,
        width: width - 30,
        paddingLeft: 10
    },
    inputps: {
        height: 50,
        borderColor: "#f7bc28",
        borderWidth: 1,
        borderRadius: 6,

        paddingLeft: 10,
        width: width - 30
    },
    form: {
        paddingHorizontal: 15
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#f7bc28"
    },
    button: {
        height: 40,
        width: width / 1.5,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f7bc28",
        justifyContent: "center",
        borderRadius: 6,
        marginTop: 25
    }
});

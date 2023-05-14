import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity, 
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
    ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import * as ScreenOrientation from "expo-screen-orientation";
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';



const initialState = {
    login: '',
    email: '',
    password: '',
}

export const RegistrationScreen = () => {
    // console.log(Platform.OS);
    const [state, setState] = useState(initialState)
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    const [isSecureText, setIsSecureText] = useState(true);
    const [isActiveLogin, setIsActiveLogin] = useState(false);
    const [isActiveMail, setIsActiveMail] = useState(false);
    const [isActivePass, setIsActivePass] = useState(false);
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(ScreenOrientation);

    // const statusBarHeight = Constants.statusBarHeight;

    // const [heightDimensions, setHeightDimensions] = useState(
    //     Dimensions.get('window').height + statusBarHeight
    // )
    const [widthDimensions, setWidthDimensions] = useState(
        Dimensions.get('window').width - 20 * 2,
    )   

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setIsKeyboardShown(false);
        });

        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setIsKeyboardShown(true);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const handleSubmit = () => {
        console.log(`login: ${login}; email: ${email}; password: ${password}`);
        setIsKeyboardShown(false);
        Keyboard.dismiss();
        console.log(state);
        // dispatch(authSignUpUser(state));
        setState(initialState);
    };

    const keyboardHide = () => {
        setIsKeyboardShown(false);        
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
    }
     
    // const [orientation, setOrientation] = useState(null);

//   useEffect(() => {
//     checkOrientation();
//     const subscription = ScreenOrientation.addOrientationChangeListener(
//       handleOrientationChange
//     );
//     return () => {
//       ScreenOrientation.removeOrientationChangeListeners(subscription);
//     };
//   }, []);
//   const checkOrientation = async () => {
//     const orientation = await ScreenOrientation.getOrientationAsync();
//     setOrientation(orientation);
//   };
//   const handleOrientationChange = (o) => {
//     setOrientation(o.orientationInfo.orientation);
//   };
//   console.log(orientation);
    
    // useEffect(() => {
    //     const onChange = () => {
    //         const width = Dimensions.get("window").width;
    //         // console.log("width", width);
    //     };
    //     Dimensions.addEventListener("change", onChange);
    //     return () => {
    //         Dimensions.removeEventListener("change", onChange);
    //     }
    // }, [])

    return (   
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            setIsKeyboardShown(false);
        }}>
            {/* <ScrollView style={styles.wrapper}> */}
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../assets/background.jpg")}
                        style={{
                            ...styles.background,                             
                            // height: Platform.OS === 'ios'
                            //     ? heightDimensions - statusBarHeight
                            //     : heightDimensions,                            
                        }}
                    >
                        <KeyboardAvoidingView
                            behavior={Platform.OS === 'ios' ? 'padding' : ''}
                        >
                            {/* main form */}
                            <View
                                style={{
                                    ...styles.form,
                                    paddingBottom: isKeyboardShown ? 32 : 45,
                                    // marginBottom: isKeyboardShown ? -120 : 0,
                                    width: widthDimensions,
                            }}>
                            
                                {/* avatar */}
                                <View style={styles.avatar}>
                                    <AntDesign name="pluscircleo" style={styles.avatarBtn} size={25}/>
                                </View>
                                {/* button add/delete avatar */}

                                {/* titles & inputs */}

                                <Text style={styles.title}>Registration</Text>
                                <TextInput
                                    keyboardType="default"
                                    autoComplete="name"
                                    style={{
                                        ...styles.input,
                                        borderColor: isActiveLogin ? "#FF6C00" : "#E8E8E8",
                                        backgroundColor: isActiveLogin ? "#FFFFFF" : "#F6F6F6",
                                    }}
                                    onFocus={() => {
                                        setIsKeyboardShown(true);
                                        setIsActiveLogin(true);
                                    }}
                                    onBlur={() => {
                                        setIsActiveLogin(false);
                                        // setIsKeyboardShown(false);
                                    }}
                                    placeholder='Login'
                                    placeholderTextColor='#BDBDBD'
                                    value={state.login}
                                    onChangeText={(value) => setState((prevState) => ({...prevState, login: value}))}
                                />
                                <TextInput
                                    keyboardType="email-address"
                                    autoComplete="email"
                                    style={{
                                        ...styles.input,
                                        borderColor: isActiveMail ? "#FF6C00" : "#E8E8E8",
                                        backgroundColor: isActiveMail ? "#FFFFFF" : "#F6F6F6",
                                    }}
                                    onFocus={() => {
                                        setIsKeyboardShown(true);
                                        setIsActiveMail(true);
                                    }}
                                    onBlur={() => setIsActiveMail(false)}
                                    placeholder='Email'
                                    placeholderTextColor='#BDBDBD'
                                    value={state.email}
                                    onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                                />
                                
                                {/* show / hide password */}
                                <View style={{position: 'relative'}}>
                                    <TextInput  
                                        keyboardType="default"  
                                        style={{
                                        ...styles.input,
                                        borderColor: isActivePass ? "#FF6C00" : "#E8E8E8",
                                        backgroundColor: isActivePass ? "#FFFFFF" : "#F6F6F6",
                                        }} 
                                        onFocus={() => {
                                            setIsKeyboardShown(true);
                                            setIsActivePass(true);
                                        }}
                                        onBlur={() => {
                                            setIsActivePass(false);
                                            // setIsKeyboardShown(false);
                                        }}
                                        placeholder='Password'
                                        placeholderTextColor='#BDBDBD'
                                        value={state.password}
                                        onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                                        secureTextEntry={isSecureText}
                                    />
                                    <Pressable 
                                        onPress={() => setIsSecureText(prevState => !prevState)}
                                        style={styles.showPass} 
                                    >
                                        <Text style={styles.showPassText} >
                                            {isSecureText ? 'Show' : 'Hide'}
                                        </Text>                                        
                                    </Pressable>
                                </View>
                                    
                            {/* registration button    link to LoginPage*/}
                          
                            {isKeyboardShown === false ? (
                                <>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.submitBtn}
                                        onPress={keyboardHide}
                                    >
                                            <Text style={styles.submitBtnText}>SIGN UP</Text>
                                    </TouchableOpacity>
                                    
                                    <Pressable style={styles.linkToLoginPage} 
                                    // onPress={() => navigation.navigate('Login')}
                                    >
                                        <Text style={styles.linkToLoginPageText}>Already have an account, log in</Text>
                                    </Pressable> 
                                    <View style={styles.homeIndicator} /> 
                                </>    ) : null} 
                              
                                {/* <View style={{marginTop: 5}}>
                                    <Text style={styles.inputTitle}>Password</Text>
                                    <TextInput
                                        style={styles.input}
                                        secureTextEntry={true}
                                        textAlign='center'
                                        onFocus={() => setIsKeyboardShown(true)}
                                        value={state.password}
                                        onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                                    />
                                </View> */}
                                {/* <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btn}
                                    onPress={keyboardHide}
                                >
                                    <Text style={styles.btnTitle}>SIGN IN</Text>
                                </TouchableOpacity> */}
                            </View>
                        </KeyboardAvoidingView>                
                
                    </ImageBackground>  
                                   
                </View>
            {/* </ScrollView> */}
        </TouchableWithoutFeedback>          
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        backgroundColor: "#97c6f1",
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-end",        
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    form: {   
        position: 'relative',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,        
    },
    avatar: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        marginTop: -60,
        alignSelf: 'center',
    },
    avatarBtn: {
        position: 'absolute',
        color: "#FF6C00",
        right: -12,
        bottom: 14,
    },
    homeIndicator: {
        position: 'absolute',
        height: 5,
        width: 134,
        alignSelf: 'center',
        bottom: 8,

        backgroundColor: '#212121',
        borderRadius: 100,
    },
    title: {
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.72,
        marginTop: 92,
        marginBottom: 32,
        textAlign: 'center',
        color: '#212121',
        fontFamily: 'Roboto-Medium',
    },
    input: {
        marginBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: '#F6F6F6',
        width: '100%',
        height: 50,
        borderRadius: 8,
        color: "#212121",
        borderWidth: 1,
        borderColor: '#E8E8E8',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: "Roboto-Regular",
    },   
    showPass: {
        position: "absolute",
        top: 50 / 2 / 2,
        right: 16,
    },
    showPassText: {        
        fontSize: 16,
        color: '#1B4371',
        lineHeight: 19,
        fontFamily: "Roboto-Regular",
    },
    submitBtn: {
        marginTop: 43,
        marginBottom: 16,
        height: 51,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtnText: {
        fontSize: 16,
        color: '#FFFFFF',
        lineHeight: 19,
        fontFamily: "Roboto-Regular",
    },
    linkToLoginPage: {
        alignSelf: 'center',
    },
    linkToLoginPageText: {
        fontSize: 16,
        color: '#1B4371',
        lineHeight: 19,
        fontFamily: "Roboto-Regular",
    },
    btn: {
        height: 40,
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        ...Platform.select({
            ios: {
                backgroundColor: 'transparent',
                borderColor: '#f0f8ff'
            },
            android: {
                backgroundColor: '#4169e1',
                borderColor: 'transparent',
            },
            default: {
                // other platforms, web for example
                backgroundColor: '#4169e1',
            }
        }),
        // backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#4169e1',
        // borderColor: Platform.OS === 'ios' ? '#f0f8ff' : 'transparent',
    },
    btnTitle: {
        color: Platform.OS === 'ios' ? '#4169e1' : '#fafafa',
        // color: '#f0f8ff',
        fontSize: 18,
    },    
})
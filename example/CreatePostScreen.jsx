import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text,  TouchableOpacity,  View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

const CreateScreen = () => {
    const [camera, setCamera] = useState(true);
    const [type, setType] = useState(CameraType.back);
    // const [granted, setGranted] = useState(false);
    // const [permission, requestPermission] = Camera.useCameraPermissions(true);

    
    //  const [cameraPermission, setCameraPermission] = useState(null);
    const [permission, requestPermission] = Camera.useCameraPermissions(null);
   
    // const [hasPermission, setHasPermission] = useState(null);    

    // const permisionFunction = async () => {
    // // here is how you can get the camera permission
    // const cameraPermission = await Camera.requestCameraPermissionsAsync();

    // setCameraPermission(cameraPermission.status === 'granted');
    // // Camera.useCameraPermissions(true);
    // console.log('Permission:', cameraPermission.status);

    // // const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    // // console.log(imagePermission.status);

    // // setGalleryPermission(imagePermission.status === 'granted');

    // if (
    // //   imagePermission.status !== 'granted' &&
    //   cameraPermission.status !== 'granted'
    // ) {
    //     alert('Permission for media access needed.');
    //     return (
    //     <View style={styles.containerPermission}>
    //         <Text style={{ textAlign: "center" }}>
    //         We need your permission to show the camera
    //         </Text>
    //         <Button onPress={{requestPermission, setGranted}} title="grant permission" />
    //     </View>
    //     );
    // }
    // };
    
    // useEffect(() => {
    //     permisionFunction();
    // }, []);   

        if (!permission) {
            // Camera permissions are still loading
            return <View />;
        }

        if (!permission.granted) {
            // Camera permissions are not granted yet
            return (
            <View style={styles.containerPermission}>
                <Text style={{ textAlign: "center" }}>
                We need your permission to show the camera
                </Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={requestPermission}
                >
                        <Text style={styles.btnTitle}>grant permission</Text>
                </TouchableOpacity>
                <Button onPress={requestPermission} title="grant permission" />
            </View>            
            ); 
        } 
    

    const takePhoto = async () => {
        // const photo = await camera.takePictureAsync()
        console.log('Camera----->', camera.takePictureAsync());
    }



    return (
    <>
        {/* {permission && */}
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera} type={type}>
                <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
                    <Text style={styles.snap}>SNAP</Text>
                </TouchableOpacity>
            </Camera>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#cfcfcf8f',
    },
    containerPermission: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#cfcfcf8f',
    },
    camera: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        margin: 10,
    },
    snap: {        
        color: '#fff',
    },
    snapContainer: {
        marginTop:200,
        borderWidth: 1,
        borderColor: '#ff0000',
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        height: 40,
        width: 180,
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: '#4169e1',
        borderColor: '#f0f8ff',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
        // ...Platform.select({
        //     ios: {
        //         backgroundColor: 'transparent',
        //         borderColor: '#f0f8ff'
        //     },
        //     android: {
        //         backgroundColor: '#4169e1',
        //         borderColor: 'transparent',
        //     },
        //     default: {
        //         // other platforms, web for example
        //         backgroundColor: '#4169e1',
        //     }
        // }),

        // backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#4169e1',
        // borderColor: Platform.OS === 'ios' ? '#f0f8ff' : 'transparent',
    },
    btnTitle: {
        // color: Platform.OS === 'ios' ? '#4169e1' : '#fafafa',
        color: '#f0f8ff',
        fontSize: 18,
    },    
})

export default CreateScreen;
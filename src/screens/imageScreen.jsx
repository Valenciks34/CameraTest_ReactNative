// import React, { useEffect, useRef, useState } from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-paper';
// import * as ImagePicker from 'expo-image-picker';
// import { Camera, CameraType } from 'expo-camera';
// import * as MediaLibrary from "expo-media-library"
// import ButtonC from '../components/Button'

// const ImageScreen = () => {

//     const [image, setImage] = useState(null);
//     const [hasCameraPermission, setHasCameraPermisison] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//     const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

//     const cameraRef = useRef(null);

//     useEffect(() => {
//         (async () => {
//             MediaLibrary.requestPermissionsAsync();
//             const cameraStatus = await Camera.requestCameraPermissionsAsync();
//             setHasCameraPermisison(cameraStatus.status === "granted");
//         })();
//     }, [])



//     //ACTIVE CAMERA FUNCTION
//     function toggleCameraType() {
//         setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//     }

//     //PICKIMAGE FUNCTION

//     const pickImage = async () => {
//         // No permissions request is necessary for launching the image library
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.canceled) {
//             setImage(result.assets[0].uri);
//         }
//     };

//     return (
//         <>
//             <Button
//                 icon="camera"
//                 mode="contained"
//                 onPress={pickImage}
//                 buttonColor='green'
//             >Select a image!
//             </Button>

//             {image && <Image source={{ uri: image }} style={{ borderRadius: 100, width: 200, height: 200, marginTop: 15 }} />}

//             <View style={styles.container}>
//                 <Camera
//                     style={styles.camera}
//                     type={type}
//                     flashMode={flash}
//                     ref={cameraRef}
//                 >
//                 </Camera>
//                 <View style={styles.buttonContainer}>
//                     <ButtonC/>
//                 </View>
//             </View>
//         </>

//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent:"center",
//         alignItems: "center"
//     },
//     camera: {
//         flex: 1,
//         borderRadius: 20
//     },
//     buttonContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         margin: 64,
//     },
//     button: {
//         flex: 1,
//         alignSelf: 'flex-end',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'white',
//     },
// });

// export default ImageScreen;

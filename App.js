import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import {Camera, CameraType, FlashMode} from 'expo-camera';
import * as MediaLibrary from "expo-media-library";
import Button from './src/components/Button.jsx'

const App = () => {
//PERMISOS DE UTILIZAR LA CAMARA
  const [hasCameraPermisiion, setHasCameraPermisiion] = useState(null)
//ESTADO DE LA IMAGEN INICIAL, PARA GUARDAR O RESETEAR LA IMAGEN
  const [image, setImage] = useState(null)
//TIPO DE CAMARA PROPIA DE LA LIBRERIA
  const [type, setType] = useState(Camera.Constants.Type.back);
//FLASH ESTADO
const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
//REFERENCIA DE LA CAMARA
const cameraRef = useRef(null);

//NECESITAMOS PERMISOS PARA CUANDO ABRA SEA UNA VEZ O SIEMPRE QUE SE ABRA
useEffect(() => {
  (async() =>{
    MediaLibrary.requestPermissionsAsync();
//Se define cameraStatus como variable el await
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
//Cambia el camera permisiion a granted
    setHasCameraPermisiion(cameraStatus.status === "granted");
  })();
}, [])


//FUNCION PARA TOMAR UNA FOTO
const takePicture = async () => {
  if (cameraRef.current) {
  const options = { quality: 0.5, base64: true, skipProcessing: true };
  const data = await cameraRef.current.takePictureAsync(options);
  const source = data.uri;
  setImage(source);
  console.log(source);
  }
}

//GUARDAR IMAGEN
const saveImage = async() =>{
  if(image){
    try{
      await MediaLibrary.createAssetAsync(image);
      alert("Por fin sirvio esta monda :D")
      setImage(null)
    }catch(e){
      console.log(e)
    }
  }
}

//PERMISOS, CHEQUEO
if(hasCameraPermisiion === false){
  return <Text>No acces to the camera</Text>
}



  return (
    <View style={styles.container}>
      {!image ?
      <Camera
      style={styles.camera}
      type={type}
      flashMode={flash}
      ref={cameraRef}
      ratio='16:9'
      
      >
        <View style={{flexDirection:"row", justifyContent:"space-between", padding:35}}>
          <Button icon={"retweet"} onPress={() =>{
            setType(type === CameraType.back ? CameraType.front : CameraType.back)
          }}>

          </Button>
          <Button icon={"flash"} onPress={() =>{
            setFlash(flash === Camera.Constants.FlashMode.off 
              ? Camera.Constants.FlashMode.torch
              : Camera.Constants.FlashMode.off )
          }}></Button>

        </View>
      </Camera>
      : <Image source={{uri: image}} style={styles.camera}/>
      }
      <View>
        {image ?
        <View style={styles.BottomButtons}>
          <Button 
          title={"Re-take"} 
          icon={"retweet"}
          onPress={() => setImage(null)}>
          </Button>
          <Button
          title={"Save"}
          icon="check"
          onPress={saveImage}>
          </Button>
        </View>
        :
        <Button
          title={"Take a picture"}
          icon="camera"
          onPress={takePicture}>
        </Button>
        }
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000",
    justifyContent: "center",
    paddingBottom:20,
  },
  camera: {
    flex:1,
    borderRadius:30
  },
  BottomButtons: {
    flexDirection:"row", 
    justifyContent:"space-between",
    paddingHorizontal:50
  }
});

export default App;

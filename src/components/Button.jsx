import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import {Entypo} from "@expo/vector-icons"

const Button = ({title,onPress, icon, color}) => {
    return (
        <TouchableOpacity onPress={onPress} style = {styles.button}>
            <Entypo name={icon} size={28} color={color ? color: "#f1f1f1"}/>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height:40,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        
    },
    text: {
        fontWeight:"bold",
        fontSize: 25,
        color:"#f1f1f1",
        alignSelf:"center",
        marginLeft:10
    }
})

export default Button;

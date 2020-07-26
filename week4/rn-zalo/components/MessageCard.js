import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"; 

const MessageCard = props => {
    return (
    <TouchableOpacity style={styles.messageCardStyle} onPress={() => props.onPress(props.message)}>
        <Image style={styles.image} source={{uri: props.message.avatar_url}}></Image>
        <View style={styles.cardTextContainer}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>{props.message.first_name}</Text>
                <Text>{props.message.last_message_date}</Text>
            </View>
            <Text style={{flex: 2, height: 50}}>{props.message.last_message_content}</Text>
        </View>
    </TouchableOpacity>
    )
}

export default MessageCard; 

const styles = StyleSheet.create({
    messageCardStyle: { 
        margin: 5,
        padding: 5, 
        width: "100%", 
        shadowRadius: 5, 
        shadowOpacity: 0.9, 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "white", 
        justifyContent: "space-around", 
        shadowColor: "rgba(0,0,0,0.2)", 
        shadowOffset: { height: 5, width: 5 } 
    },
    image: {
        width: 75, 
        height: 75, 
        borderWidth: 1, 
        borderRadius: 37, 
        borderColor: "grey" ,
    }, 
    cardTextContainer: { 
        flex: 1, 
        marginLeft: 10,
    }, 
    cardText: { 
        flex: 1, 
        width: "100%", 
        flexDirection: "row", 
        justifyContent: "space-between" 
    }
}); 
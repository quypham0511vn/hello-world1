
import React from 'react';

import {  Text,View,TextInput,StyleSheet,Image } from 'react-native';
export default function App() {
return (
  <View style={styles.container}>
    <Text style={styles.content}> Hello World</Text>
    <View>
          <Image style={styles.image}   source= {require('./images/anh_22.png')}>
            </Image>
  </View>
</View>

)}
const styles=StyleSheet.create({
            image:{
                              width:300,
                              height:280,
                              marginBottom:122,
                              justifyContent:'center',
                              backgroundColor:'#FFCC',
                              borderRadius:60,
                         },
            container:{ flex:1,
                               backgroundColor:'#99FFCC',
                               marginTop:100,
                               width:300,
                               marginBottom:30,
                              marginLeft:30,
                               justifyContent:'center',
                              
                             
                            },
             content:{ flex:4,
                             color:'#99FF',
                              marginTop:30,
                              
                              height:90,
                            
                              justifyContent:'center',
                             fontWeight:'bold',
                             fontSize:30,
                             textAlign:'center'
                           }               
})



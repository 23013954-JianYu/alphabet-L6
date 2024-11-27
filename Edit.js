import React, {useState} from 'react';
import {datasource} from "./Data";
import {Alert, TextInput, View, Text, Button} from 'react-native';

const Edit = ({navigation, route}) => {
    const [letter,setLetter] = useState(route.params.key);
    return(
        <View style={{padding:10}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Letter:</Text>
                <TextInput
                    style={{borderWidth:1}}
                    maxLength={1}
                    value={letter}
                    onChangeText={setLetter}
                    placeholder="Enter a letter"
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between',padding: 10}}>
                <View style={{flex: 1, margin: 10}}>
                    <Button title="Save"
                            onPress={() => {
                                let indexnum = 1
                                if(route.params.type=="Vowels") {
                                    indexnum = 0;
                                }
                                datasource[indexnum].data[route.params.index].key=letter;
                                navigation.navigate("Home");
                            }}
                    />
                </View>
                <View style={{flex: 1, margin: 10}}>
                    <Button title="Delete"
                            onPress={()=>{
                                let indexnum = 1
                                if (route.params.type=="Vowels") {
                                    indexnum = 0;
                                }
                                Alert.alert("Are you sure?",'',
                                    [{text:'Yes', onPress:() => {
                                            datasource[indexnum].data.splice(route.params.index,1);
                                            navigation.navigate("Home")
                                        }},
                                        {text:'No'}])
                            }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Edit;

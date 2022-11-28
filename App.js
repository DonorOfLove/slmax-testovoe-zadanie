import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View, ImageBackground,} from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';
import Todo from "./src/Components/Todo";
import TodoSkelet from "./src/Components/TodoSkelet";

const App = () => {

    const [todos, setTodos] = useState([])

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <ScrollView style={backgroundStyle}>
            <ImageBackground source={require('./src/assets/img/back.png')} resizeMod='cover' style={styles.header}>
                <Text style={styles.text}>
                    Заметки
                </Text>
            </ImageBackground>
            <TodoSkelet todos={todos} setTodos={setTodos}/>
            <View>{todos.length ? (todos.map((todo) => {
                return <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
            })) : null}</View>
        </ScrollView>
    )

};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 200,
        color: '#fff',
        textAlign: "center",
        textAlignVertical: "center",
    },
    text: {
        color: '#fff',
        height: 200,
        textAlign: 'center',
        fontSize: 30,
        textAlignVertical: 'center'
    },
});

export default App;

import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity} from "react-native";

const TodoSkelet = ({todos, setTodos}) => {

    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');

    const addTodo = () => {
        setTodos(todos.concat([{id: new Date(), title: title, descr: descr,}]))
        setTitle('')
        setDescr('')
    }

    return (
        <View style={s.todo}>
            <TextInput placeholder={'Название'} style={s.title} onChangeText={text => setTitle(text)} value={title}/>
            <View style={s.wrap}>
                <TextInput placeholder={'Текст описание'} onChangeText={text => setDescr(text)} value={descr}/>
                <TouchableOpacity onPress={addTodo} style={s.add}><Text style={s.add}>></Text></TouchableOpacity>
            </View>
        </View>
    );
};
const s = StyleSheet.create({
    title: {
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
    },
    todo: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 25,
        width: "85%",
        alignSelf: "center"
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    add: {

        alignSelf: 'center'
    }

})

export default TodoSkelet;

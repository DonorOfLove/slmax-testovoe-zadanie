import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image} from "react-native";

const Todo = ({todo, setTodos, todos}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [isDelete, setIsDelete] = useState(false);

    const [deleteStatus, setDeleteStatus] = useState(false);
    const [timer, setTimer] = useState(5);

    React.useEffect(() => {
        let counterId;
        if (deleteStatus) {
            counterId = setTimeout(() => setTimer(timer - 1), 1000
            );
            if (timer === 0) {
                setTodos(todos.filter((cTodo) => cTodo.id !== todo.id))
            }
        }
        return () => {
            clearTimeout(counterId);
        };
    }, [timer, deleteStatus]);

    const cancelRemove = () => {
        setDeleteStatus(false)
        setIsDelete(false)
        setTimer(5)
    }

    const removeTodo = () => {
        setDeleteStatus(true)
    }

    return (
        <ScrollView style={s.todoWrap}
                    onTouchStart={e => this.touchX = e.nativeEvent.pageX}
                    onTouchEnd={e => {
                        if (this.touchX - e.nativeEvent.pageX > 20) {
                            setIsDelete(true)
                        }
                    }}>
            <View style={s.todo}>
                <TextInput style={s.title}>{todo.title}</TextInput>
                <Text style={s.divider}>|</Text>
                {isVisible ? (<View style={s.descr}>
                    <Text>{todo.descr} </Text>
                    <Text style={s.date}>{Date(todo.id)}</Text>
                </View>) : (<Text style={s.descr} maxLength={20} numberOfLines={1}>{todo.descr.substring(0, 20)}</Text>)}
                {isDelete ? (deleteStatus ? (<TouchableOpacity onPress={cancelRemove} style={s.undo}>
                        <Image style={s.undoImg} source={require('../assets/img/undo.png')}/>
                        <Text style={s.timerSeconds}>{timer}</Text>
                    </TouchableOpacity>) : (
                        <TouchableOpacity onPress={removeTodo} style={s.remove}><Text
                            style={s.trashIcon}>Удалить</Text></TouchableOpacity>)) :
                    (isVisible ? (<TouchableOpacity style={s.dropDown} onPress={() => setIsVisible(false)}>
                            <Text style={s.dropDownIcon}>^</Text>
                        </TouchableOpacity>) : (
                            <TouchableOpacity style={s.dropDown} onPress={() => setIsVisible(true)}>
                                <Text style={s.dropDownIcon}>˅</Text>
                            </TouchableOpacity>)
                    )}
                {isVisible ? (<View>
                    <Text style={s.dropDownIcon}>DropDown</Text></View>) : null}
            </View>
        </ScrollView>
    );
};

const s = StyleSheet.create({
    date: {
        marginTop:20
    },
    remove: {
        backgroundColor: '#da2d2d',
        borderRadius: 10,
        width: '34%',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    timerSeconds: {
        color: '#fff',
        position: "absolute",
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        paddingTop: 15,
        paddingLeft: 3
    },
    undo: {
        backgroundColor: '#da2d2d',
        borderRadius: 10,
        width: '34%',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    undoImg: {
        width: 34,
        height: 30,
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginTop: 10
    },
    trashIcon: {
        textAlign: "center",
        color: '#fff',
        fontSize: 15,
        textAlignVertical: "center",
        height: '100%'
    },
    todoWrap: {
        width: "85%",
        alignSelf: "center",
    },
    todo: {
        flex: 1,
        flexDirection: "row",
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingRight: 0,
        textAlign: "center",
        marginTop: 10,
        width: "100%",
        alignSelf: "center",
        height: "auto"
    },
    dropDownIcon: {
        paddingTop: 5,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        paddingLeft: 40
    },
    dropDown: {
        backgroundColor: 'rgba(255,255,255,0)',
        paddingTop: 3,
        width: "33%",
        fontWeight: 'bold',
        fontSize: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        width: "23%"
    },
    descr: {
        textAlignVertical: 'center',
        fontSize: 15,
        width: "41%"
    },
    divider: {
        fontSize: 30
    }
})

export default Todo;

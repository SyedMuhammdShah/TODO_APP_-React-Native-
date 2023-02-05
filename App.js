import { StatusBar,push, map } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function App() {

  const [printTask, userPrintTask]  = useState([]);
  const [task, useTask] = useState("");

  const addTask = () => {
    // console.log(task);
 if(task.length !== 0){
  var taskCopy = printTask;
  // taskCopy.push(task);
  taskCopy.push(task);
  userPrintTask(taskCopy);

  console.log(printTask);
  useTask("");
 }
 else{
  console.log('empty array');
 }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B6EADA" style="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headingText}>ToDo App</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
        value={task}
          onChangeText={useTask}
          style={styles.InputStyles}
          placeholder="Input Task"
        />
        <TouchableOpacity
          onPress={addTask}
          style={{
            borderWidth: 1,
            borderColor: "#F2921D",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            backgroundColor: "#fff",
            borderRadius: 50,
            marginTop: 10,
            backgroundColor: "#301E67",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              bottom: 2,
            }}
          >
            +
          </Text>
          
        </TouchableOpacity>
      </View>
      <Text>Total Task: {printTask.length}</Text>
      <ScrollView>
      {printTask.length === 0 ? (
        <Text style={{fontSize: 20, marginTop: 15, textAlign: 'center'}}>
          No Task added.. 
        </Text>
      ) : (
        <View>
          {printTask.map((note, index) => (
            <Text key={index} style={{ margin: 10, borderRadius: 40, padding: 10, fontSize: 22, elevation: 4, backgroundColor: 'white'}}>
              {index + " " +note}
            </Text>
          ))}
        </View>
      )}
      </ScrollView>





      {/* <View>
        {
          (printTask.length === 0) ? <Text>No task Added</Text> : <Text>Total Task: {printTask.length}</Text>
        }
      </View>
      <View>
        {
          <Text style={{width: '100%'}}>
            {
            printTask.map((task, index) => (
              <View style={{display: 'flex', width:'100%', backgroundColor: '#F2921D',
              flexDirection: 'column', }}>
                <Text key={index} style={{fontSize: 22, width: '100%',margin: 10}}>
                  {task}</Text>
              </View>
            ))
            }
          </Text>
        }
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  statusbar: {
    backgroundColor: "#301E67",
  },
  header: {
    backgroundColor: "#301E67",
    height: "25%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  },
  headingText: {
    fontSize: 34,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  InputContainer: {
    height: 50,
    width: "100%",
    justifyContent: "space-evenly",
    paddingRight: 40,
    paddingLeft: 20,
    alignContent: "center",
    // backgroundColor: "#B6EADA",
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  InputStyles: {
    width: 200,
    borderColor: "#674188",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    fontSize: 15,
    backgroundColor: "#eee",
  },
});

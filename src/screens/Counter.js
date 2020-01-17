import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCount} from '../redux/actions';

const Counter = props => {
  console.log(props);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // margin: 40,
        marginVertical: 200,
        marginHorizontal: 20,
        borderRadius: 5,
        //Shadow
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,

        elevation: 2,
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{margin: 20, fontSize: 24}}>React Native with Redux</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: '#00cf3f'}}
          onPress={() => {
            props.setCount({count: props.count + 1});
          }}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <View style={styles.btn}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{props.count}</Text>
        </View>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: '#ff0358'}}
          onPress={() => {
            props.count > 0 && props.setCount({count: props.count - 1});
          }}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
  },
});
const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({setCount}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

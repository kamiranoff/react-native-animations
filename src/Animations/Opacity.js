import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  }
});

class Opacity extends Component {

  state = {
    animation: new Animated.Value(1),
  };

  renderAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  }

  componentDidMount() {
    this.renderAnimation();
  }

  startAnimation = () => {
    this.renderAnimation();
  };

  render() {

    const animatedStyles = {
      opacity: this.state.animation,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Opacity;

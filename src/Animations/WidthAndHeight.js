import React, { Component } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

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

class WidthAndHeight extends Component {

  state = {
    animation: new Animated.Value(150),
  };

  renderAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 250,
      duration: 500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 150,
        duration: 500,
      }).start();
    });
  };

  componentDidMount() {
    this.renderAnimation();

  }

  startAnimation = () => {
    this.renderAnimation();
  };


  render() {

    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation,
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

export default WidthAndHeight;

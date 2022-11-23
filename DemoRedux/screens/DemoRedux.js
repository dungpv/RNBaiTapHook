import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {giamCount, tangCount} from './Action';

class DemoRedux extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>
          {this.props.biencount}
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.uiTangCount();
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Tăng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.uiGiamCount();
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Giảm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {biencount: state.count};
};

const mapDispatchToProp = dispatch => {
  return {
    uiTangCount: () => {
      dispatch(tangCount());
    },
    uiGiamCount: () => {
      dispatch(giamCount());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(DemoRedux);

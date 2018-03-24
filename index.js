import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class TextWith extends React.Component {
  getObjectMargin(){
    const { objectPosition, objectMargin } = this.props;

    const objectMarginOptions = {
      'left' : { marginLeft: objectMargin },
      'right' : { marginRight: objectMargin },
      'top' : { marginTop: objectMargin },
      'bottom' : { marginBottom: objectMargin },
    };
    const objectMarginSelection = objectMarginOptions[objectPosition];

    return objectMargin ? objectMarginSelection : {};
  }

  renderText(){
    const {
      children,
      object,
      objectPosition,
      objectMargin,
      style,
      ...restProps
    } = this.props;

    const objectMarginStyle = this.getObjectMargin();

    return <Text key='text' { ...restProps } style={[ objectMarginStyle, style ]}>{ children }</Text>;
  }

  render(){
    const { containerStyle } = styles;
    const { object, objectPosition } = this.props;

    const stackDirection = (
      objectPosition == 'left' || objectPosition == 'right'
    ) ? 'row' : 'column';

    let components = [];
    if(object){ components.push(React.cloneElement(object, {key: 'object'})); }
    components.push(this.renderText());

    if(objectPosition == 'right'
    || objectPosition == 'bottom'){
      components.reverse(); }

    return (
      <View style={[containerStyle, { flexDirection: stackDirection }]}>
        { components }
      </View>
    );
  }
}

TextWith.defaultProps = {
  objectPosition: 'left',
  objectMargin: 4,
};

TextWith.propTypes = {
  children: PropTypes.any,
  object: PropTypes.object,
  objectPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  objectMargin: PropTypes.number,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  containerStyle : {
    alignItems: 'center',
  },
});

export default TextWith;

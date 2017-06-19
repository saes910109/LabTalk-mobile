import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import {Content} from 'native-base';
import NavigationContainer from './NavigationContainer';

import {connect} from 'react-redux';

class CalendarScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='Calendar'>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Calendar</Text>
                </View>
            </NavigationContainer>
        );
    }
}

export default connect(state => ({
  ...state.chatroom,
  ...state.calendar,
  ...state.activity,
  ...state.calendar,
  ...state.newactivity
}))(CalendarScreen);

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
import ProfileScreen from './ProfileScreen';
import GroupScreen from './GroupScreen';
var ScrollableTabView = require('react-native-scrollable-tab-view');
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
          <ScrollableTabView>
            <ProfileScreen tabLabel="React" />
            <GroupScreen tabLabel="Flow" />
          </ScrollableTabView>
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

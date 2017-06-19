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

class GroupItem extends React.Component {
      static propTypes = {
          id: PropTypes.string,
          name: PropTypes.string,
          usernames: PropTypes.array,
          username_login: PropTypes.string,
          Toggle_id: PropTypes.string,
          dispatch: PropTypes.func
      };


    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (

            <Text style={{textAlign: 'center'}}>{this.props.name}</Text>

        );
    }
}

export default connect(state => ({
  ...state.chatlist,
  ...state.logIn
}))(GroupItem);

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

class ProfileScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <NavigationContainer navigate={navigate} title='個人資料'>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>{this.props.username_login}</Text>
                </View>
            </NavigationContainer>
        );
    }
}

export default connect(state => ({
  ...state.chatlist,
  ...state.logIn
}))(ProfileScreen);

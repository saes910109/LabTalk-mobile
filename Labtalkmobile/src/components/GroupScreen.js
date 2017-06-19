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
import {listGroups} from '../states/group-actions.js';
import GroupItem from './GroupItem.js';
import {connect} from 'react-redux';

class GroupScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        groups: PropTypes.array,
        username_login: PropTypes.string,
        groupLoading: PropTypes.bool,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);

    }

  /*  componentDidMount() {
        this.props.dispatch(listGroups('',this.props.username_login));
    }
*/
    render() {
        const {navigate} = this.props.navigation;
        const {dispatch, addgroup_modal_Toggle, groups, groupLoading} = this.props;
        var items = <Text>''</Text>;
        if(groups.length > 0){
          items = groups.map(p=>(
            <ListItem key={p.id}><GroupItem {...p} /></ListItem>
          ));
        }
        return (
            <NavigationContainer navigate={navigate} title='群組列表'>

            </NavigationContainer>
        );
    }
}

export default connect(state => ({
  ...state.grouplist,
  ...state.chatlist
}))(GroupScreen);

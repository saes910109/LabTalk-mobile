import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    Button
} from 'react-native';

import {Content} from 'native-base';

import {connect} from 'react-redux';
import {changeChatroom} from '../states/group-actions.js';
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
        this.handleGroupClick = this.handleGroupClick.bind(this);
    }
    render() {
        return (
            <Text style={{textAlign: 'center',alignSelf: 'stretch', fontSize:20}}>{this.props.name}</Text>
        );
    }

    handleGroupClick(){
        let obj={
          id: this.props.id,
          name: this.props.name,
          usernames: this.props.usernames
        };
        this.props.dispatch(changeChatroom(obj, ''));
    }
}

export default connect(state => ({
  ...state.chatlist,
  ...state.groupitem,
  ...state.grouplist,
  ...state.chatroom,
  ...state.chatlist
}))(GroupItem);

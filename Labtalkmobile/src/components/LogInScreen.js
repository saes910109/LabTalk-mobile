import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, ListView, Modal, ToastAndroid, TouchableHighlight} from 'react-native';

import {Content, Form, Item, Input, Button} from 'native-base';
import NavigationContainer from './NavigationContainer';

import {connect} from 'react-redux';

//redux action
import {
  changeLogInName,
  changeLogInPassword,
  submitLogIn,
  toggle
} from '../states/logIn-action.js';
import{
  changeAccountName,
  changeAccountPassword,
  changeAccountEmail,
  submitAccount
} from '../states/newAccount-action.js';
import {resetItem} from '../states/logIn-action.js';


class LogInScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
          showToast: false
        }
        this.toggle = this.toggle.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.goToLog=this.goToLog.bind(this);
        this.NameChange=this.NameChange.bind(this);
        this.PasswordChange=this.PasswordChange.bind(this);
        this.EmailChange=this.EmailChange.bind(this);
        this.buildAccount=this.buildAccount.bind(this);

    }
    componentWillReceiveProps(nextProps){
      if(nextProps.login_success){
          const {navigate} = this.props.navigation;
          navigate('Profile');
      }
    }

    render() {
        return (
          <View style={{flex:1, backgroundColor: 'black'}}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 3}}>
                    <Text style={{textAlign: 'center' ,fontWeight: 'bold', fontSize: 50, color: 'white' }}>
                      LABTALK
                    </Text>
                    <Form>
                       <Item underline>
                           <Input value={this.props.name} onChangeText={this.handleNameChange} placeholder="使用者名稱" style={{color: 'white'}}/>
                       </Item>
                       <Item underline>
                           <Input value={this.props.password} onChangeText={this.handlePasswordChange} placeholder="密碼" style={{color: 'white'}}/>
                       </Item>
                   </Form>
                      <Text> </Text>
                     <Button block warning onPress={this.goToLog}>
                       <Text style={{ color: 'white'}}>登入</Text>
                     </Button>
                       <Text> </Text>
                     <TouchableHighlight onPress={this.toggle}>
                       <Text style={{textAlign: 'center', fontSize: 28, color: 'white'}}>註冊</Text>
                     </TouchableHighlight>
                </View>
                <View style={{marginTop: 22, backgroundColor: 'black'}} >
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.modal}
          onRequestClose={this.toggle}
          >
         <View style={{marginTop: 22}}>
        <Form >
          <Item underline>
              <Input value ={this.props.newname} onChangeText={this.NameChange} placeholder='註冊用戶名稱'/>
          </Item>
          <Item underline>
             <Input value ={this.props.newpassword} onChangeText={this.PasswordChange} placeholder='請設定密碼'/>
           </Item>
           <Item underline>
               <Input value ={this.props.email} onChangeText={this.EmailChange} placeholder='請輸入信箱'/>
            </Item>
        </Form>
        <Button block danger onPress={this.buildAccount}>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize: 24, color: 'white'}}>註冊</Text>
        </Button>
         </View>
        </Modal>
      </View>
      </View>
        );
    }

    toggle() {
        this.props.dispatch(toggle(this.props.modal));
    }

    handleNameChange(text){
        this.props.dispatch(changeLogInName(text));
    }

    handlePasswordChange(text){
        this.props.dispatch(changeLogInPassword(text));
    }
    goToLog(e){
      if(!this.props.name){
        ToastAndroid.show('請輸入用戶名稱', ToastAndroid.SHORT);
      }
      else if(!this.props.password){
        ToastAndroid.show('請輸入用戶密碼', ToastAndroid.SHORT);
      }
      else{
          this.props.dispatch(submitLogIn(this.props.name,this.props.password));

      }
    }
    NameChange(text){

        this.props.dispatch(changeAccountName(text));
    }
    PasswordChange(text){

        this.props.dispatch(changeAccountPassword(text));
    }
    EmailChange(text){

        this.props.dispatch(changeAccountEmail(text));
    }
    buildAccount(){
        if(!this.props.newname){
            ToastAndroid.show('請輸入用戶名稱', ToastAndroid.SHORT);
        }
        else if(!this.props.newpassword){
          ToastAndroid.show('請輸入用戶密碼', ToastAndroid.SHORT);
        }
        else if(!this.props.email){
          ToastAndroid.show('請輸入信箱', ToastAndroid.SHORT);
        }
        else{
        this.props.dispatch(submitAccount(
            this.props.newname,
            this.props.newpassword,
            this.props.email
        ));
        }
    }
}

export default connect(state => ({
  ...state.logIn,
  ...state.newAccount
}))(LogInScreen);

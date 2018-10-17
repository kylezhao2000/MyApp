import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
import Realm, * as schema from "./db/realm";

realm = new Realm({schema: [schema.MemberSchema]});

init({
  size: 100,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

const client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'uname54365463453453');
client.onConnectionLost = this._onConnectionLost;
client.onMessageArrived = this._onMessageArrived;
client.connect({ onSuccess: this._onConnect, useSSL: true });

_onConnect = () => {
  const { client } = this.state;
  client.subscribe('/117iotswitch/light');
};

_onConnectionLost = responseObject => {
  if (responseObject.errorCode !== 0) {
    alert("disconnect!!!");
    //reconnect
    // client.connect({ onSuccess: this.onConnect, useSSL: true });
  }
};

//msg格式：{"topic":"xxx","sender":"xxx","date":"2006-07-02 08:09:04.423","content":"xxx"}
_onMessageArrived = message => {
  messageJson = JSON.parse(message);
  realm.write(()=>{
    realm.create('Message',{
      topic: messageJson.topic,
      sender: messageJson.sender,
      date: messageJson.date,
      content: messageJson.content,
    });
  });
};
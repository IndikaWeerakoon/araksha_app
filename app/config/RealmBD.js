import Realm from 'realm';

const Local = {
    name: 'Local',
    properties:{
        type:'string'
    }
}

const realm = Realm.open({ schema : [Local]});

export default realm;
import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props)  {
    
    const renderItem = ({item, index}) => {
        <ListItem 
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            leftAvatar={{ source: require('./images/uthappizza.png') }}
        />
    }
    return(
        <FlatList 
            data={props.dishes}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Menu;
import React, {useState, useEffect} from 'react';
import {View, Image, Text, Linking} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from "react-redux";

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {removeFavourite, addFavourite, isFavourite} from "../../services/FavoriteService";
import {FavoritesReducerState} from "../../store/favorites/favoritesReducer";

import api from "../../services/api";
import styles from "./styles";
import favoriteActions from "../../store/favorites/favoriteActions";
import {User} from "../../models/User";

interface TeacherItemProps {
  teacher: User;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  const favorites = useSelector((state: FavoritesReducerState) => state.favorites.data);

  const dispatch = useDispatch();

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
    handleLinkToWhatsapp();
  }

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {

    if(favorites.includes(teacher)){
      removeFavourite(teacher)
      dispatch(favoriteActions.removeFavorite(teacher));
    } else {
      addFavourite(teacher)
      dispatch(favoriteActions.addFavorite(teacher));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: teacher.avatar}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Proco/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>
          <View style={styles.buttonsContainer}>
            <RectButton
              onPress={handleToggleFavorite}
              style={[
              styles.favoriteButton,
                (favorites.includes(teacher)) ? styles.favorited : {}
              ]}>
              { (favorites.includes(teacher))
                ? <Image source={unfavoriteIcon}/>
                : <Image source={heartOutlineIcon}/>
              }
            </RectButton>

            <RectButton style={styles.contactButton} onPress={createNewConnection}>
              <Image source={whatsappIcon}/>
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>
      </View>

    </View>
  )
}

export default TeacherItem;

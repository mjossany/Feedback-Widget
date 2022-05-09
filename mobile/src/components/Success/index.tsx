import React from 'react';
import { 
  View,
  Image,
  Text,
  TouchableOpacity } from 'react-native';

  import successImage from '../../assets/success.png';
import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImage}
        style={styles.image}
      />
      <Text style={styles.title}>
        Thank you for your feedback!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          I want to send another feedback!
        </Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import firebase from 'firebase';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';

// styles
import styles from './ShareStoryScreenStyles';

// translations
import en from '../../i18n/languages/english';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

const AWS_ACCESS_KEY_ID='AKIAJLHEKA2FQXGV6YVA';
const AWS_SECRET_ACCESS_KEY='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';
const AWS_BUCKET='iiif-orpheus';
const AWS_REGION='us-east-1';

class ShareStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: firebase.auth().currentUser,
      content: '',
      photoURL: '',
    };

    this.post = this.post.bind(this);
  }

  post() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response: ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        const AWSoptions = {
          keyPrefix: "uploads/",
          bucket: AWS_BUCKET,
          region: AWS_REGION,
          accessKey: AWS_ACCESS_KEY_ID,
          secretKey: AWS_SECRET_ACCESS_KEY,
          successActionStatus: 201,
        };

        const file = {
          uri: source,
          type: "image/png",
          name: "image.png",
        }

        RNS3.put(file, AWSoptions).then(response => {
          if (response.status !== 201)
            throw new Error("Failed to upload image to S3");
          console.log(response.body);
          /**
           * {
           *   postResponse: {
           *     bucket: "your-bucket",
           *     etag : "9f620878e06d28774406017480a59fd4",
           *     key: "uploads/image.png",
           *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
           *   }
           * }
           */
        }).catch(error => console.log(error));
      }
    });




  }

  render() {
    const { content } = this.state;
    return (
      <View>
        <View>
          <TextInput
            placeholder="Share your story."
            onChangeText={content => this.setState({ content })}
            autoFocus
            multiline
            keyboardType="default"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={this.post}
          >
            <Text>Inlcude an image</Text>
            <Icon name="photo" style={styles.submitIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ShareStory;

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
import Config from 'react-native-config';

// styles
import styles from './ShareStoryScreenStyles';

// translations
import en from '../../i18n/languages/english';
import fr from '../../i18n/languages/fr.json';

I18n.translations = {
  en,
  fr,
};

class ShareStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: firebase.auth().currentUser,
      content: '',
      photoURL: '',
    };

    this.post = this.post.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  uploadPhoto() {
    const { currentUser } = this.state;

    // Options for image picker
    const imagePickerOptions = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    // Image picker functions. Returns uri for image taken or selected from library
    ImagePicker.showImagePicker(imagePickerOptions, (imagePickerResponse) => {
      console.log('Image Picker Response: ', imagePickerResponse);
      if (imagePickerResponse.didCancel) {
        console.log('User cancelled photo picker');
      } else if (imagePickerResponse.error) {
        console.log('ImagePicker Error: ', imagePickerResponse.error);
      } else if (imagePickerResponse.customButton) {
        console.log('User tapped custom button: ', imagePickerResponse.customButton);
      } else {
        const source = { uri: imagePickerResponse.uri };

        // AWS Options for S3 upload
        const awsOptions = {
          keyPrefix: 'uploads/',
          bucket: Config.AWS_BUCKET,
          region: Config.AWS_REGION,
          accessKey: Config.AWS_ACCESS_KEY_ID,
          secretKey: Config.AWS_SECRET_ACCESS_KEY,
          successActionStatus: 201,
        };

        // File to upload
        const file = {
          uri: source,
          type: 'image/png',
          name: `${currentUser.uid}${new Date()}.png`,
        };

        // Upload to S3
        RNS3.put(file, awsOptions).then((s3Response) => {
          if (s3Response.status !== 201) {
            throw new Error('Failed to upload image to S3');
          }
          console.log('S3 Response: ', s3Response);
          this.setState({ photoURL: s3Response.body.postResponse.location });
        }).catch(error => console.log('S3 Upload Error: ', error));
      }
    });
  }

  post() {
    const { mutate, navigation: { navigate } } = this.props;
    const { currentUser, content, photoURL } = this.state;

    alert(I18n.t('publicStories'));

    mutate({
      variables: {
        content,
        userDisplayName: currentUser.displayName,
        userProfilePhotoURL: currentUser.photoURL,
        photoURL,
      },
    }).then(({ data }) => console.log('Successfully submitted story', data))
      .catch(error => console.log('Error submitting story: ', error));
    navigate('Stories');
  }

  render() {
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
          <TouchableOpacity onPress={this.post}>
            <Text>Submit Story</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.uploadPhoto}
          >
            <Text>Inlcude an image</Text>
            <Icon name="photo" style={styles.submitIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const submitStory = gql`
mutation submitStory($content: String!, $userDisplayName: String!, $userProfilePhotoURL: String!, $photoURL: String!) {
  storyCreate(content: $content, userDisplayName: $userDisplayName, userProfilePhotoURL: $userProfilePhotoURL, photoURL: $photoURL) {
    content,
    userDisplayName,
    userProfilePhotoURL,
    photoURL,
    createdAt
  }
}
`;

export default graphql(submitStory)(ShareStory);

import React from 'react';
import {showMessage} from 'react-native-flash-message';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const onSubmit = () => {
    showMessage({
      message: 'Pesan berhasil dikirim',
      type: 'success',
      duration: 4000,
    });
    Alert.alert('Pesan Terkirim', 'Pesan Anda telah berhasil dikirim.', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portofolio Saya</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image1} source={require('./assets/Moty.jpg')} />
        <Text style={styles.title1}>Nama: Pongantung, Thimothy Reymar</Text>
        <Text style={styles.title1}>Umur: 19 Tahun</Text>
        <Text style={styles.title1}>Fakultas: Fakultas Ilmu Komputer</Text>
        <Text style={styles.title1}>Jurusan: Informatika</Text>
        <Text style={styles.title1}>Hobi: Adventure</Text>

        <View style={styles.experienceContainer}>
          <Text style={styles.experienceTitle}>Pengalaman:</Text>
          <Text style={styles.experience}>
            • Pernah Menjadi Programer Di Google
          </Text>
          <Text style={styles.experience}>
            • Mengembangkan aplikasi mobile menggunakan React Native
          </Text>
          <Text style={styles.experience}>
            • Berpartisipasi dalam Pembuatan Program Space-X
          </Text>
        </View>

        <View style={styles.skillsContainer}>
          <Text style={styles.skillsTitle}>Keahlian:</Text>
          <Text style={styles.skills}>• React Native</Text>
          <Text style={styles.skills}>• JavaScript</Text>
          <Text style={styles.skills}>• FrontEnd Development</Text>
        </View>

        <View style={styles.educationContainer}>
          <Text style={styles.educationTitle}>Pendidikan:</Text>
          <Text style={styles.education}>
            • Universitas Klabat, 2022 - Sekarang
          </Text>
          <Text style={styles.education}>
            • SMA Negeri 3 Merauke, 2019 - 2022
          </Text>
          <Text style={styles.education}>
            • SMP Negeri 1 Merauke, 2016 - 2019
          </Text>
          <Text style={styles.education}>
            • SD YPPK Bampel Merauke, 2010 - 2016
          </Text>
        </View>

        <View style={styles.projectsContainer}>
          <Text style={styles.projectsTitle}>Project:</Text>
          <Text style={styles.projects}>• Aplikasi Pembuatan Portofolio</Text>
          <Text style={styles.projects}>
            • Pengembangan Robotik Menggunakan Arduino
          </Text>
          <Text style={styles.projects}>• Game FPS Dengan Unity</Text>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Kontak:</Text>
          <Text style={styles.contact}>
            • Email: s22210097@student.unklab.ac.id
          </Text>
          <Text style={styles.contact}>• Telepon: +62 812-3456-7890</Text>
          <Text style={styles.contact}>
            • LinkedIn: linkedin.com/in/thimothy
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tinggalkan pesan..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    flex: 1,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image1: {
    height: 500,
    width: 400,
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 20,
    margin: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  title1: {
    fontSize: 18,
    borderRadius: 10,
    fontWeight: 'bold',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  experienceContainer: {
    borderWidth: 1,
    borderColor: '#b2ebf2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  experienceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 16,
    marginVertical: 5,
    padding: 5,
  },
  skillsContainer: {
    borderWidth: 1,
    borderColor: '#b2ebf2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  skills: {
    fontSize: 16,
    marginVertical: 5,
  },
  educationContainer: {
    borderWidth: 1,
    borderColor: '#b2ebf2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  educationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  education: {
    fontSize: 16,
    marginVertical: 5,
  },
  projectsContainer: {
    borderWidth: 1,
    borderColor: '#b2ebf2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  projectsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projects: {
    fontSize: 16,
    marginVertical: 5,
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: '#b2ebf2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default App;

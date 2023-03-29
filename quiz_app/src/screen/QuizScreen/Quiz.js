/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import firestore from '@react-native-firebase/firestore';
import {COLORS, SIZES} from '../../contains';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RenderProgressBar from '../../components/QuizComponents/RenderProgressBar';
import RenderOptions from '../../components/QuizComponents/RenderOptions';
import RenderNextButton from '../../components/QuizComponents/RenderNextButton';
import ModalResult from '../../components/QuizComponents/ModalResult';
import AppContext from '../../navigator/AppContext';
import {data} from '../../assets/data/data';
import {Image} from 'react-native';
import Sound from 'react-native-sound';

const audio = {
  success: require('../../assets/audio/success-sound.wav'),
  error: require('../../assets/audio/error-sound.wav'),
};

export default function Quiz({route, navigation}) {
  const {oldPoint, oldScore} = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {user} = React.useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(data);
  const [typeQuestion, setTypeQuestion] = useState();
  const [indexQues, setIndexQues] = useState(0);
  const [option, setOption] = useState([]);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);
  const [point, setPoint] = useState(0);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = length => {
    const progresss = progress.interpolate({
      inputRange: [0, length - 1],
      outputRange: ['0%', '100%'],
    });
    return progresss;
  };

  const getQuiz = async () => {
    // const url = 'https://opentdb.com/api.php?amount=10';
    // const res = await fetch(url);
    // const data = await res.json();
    setQuestions(data);
    setOption(getAnswers(data[0]));
    setTypeQuestion(data[0].type);
    // console.log('type' + typeQuestion);
    setLoading(false);
    // console.log(questions);
    // console.log(data.results[0].incorrect_answers);
  };
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  function getAnswers(_questionn) {
    const optionss = [..._questionn.incorrect_answers];
    optionss.push(_questionn.correct_answer);
    shuffleArray(optionss);
    return optionss;
  }
  function handlePressDone() {
    updateRank(user.uid);
    setShowScoreModal(true);
  }
  function handlePressNext() {
    setIndexQues(indexQues + 1);
    setOption(getAnswers(questions[indexQues + 1]));
    setTypeQuestion(questions[indexQues + 1].type);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);

    Animated.timing(progress, {
      toValue: indexQues + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  useEffect(() => {
    getQuiz();
  }, []);

  const updateRank = async uid => {
    await firestore()
      .collection('users')
      .doc(uid)
      .update({
        point: point + oldPoint,
        score: score * 10 + oldScore,
      })
      .then(() => {
        console.log(point);
      });
  };
  function playSound(audioLink) {
    const sound = new Sound(audioLink, () => sound.play());
  }
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };

  const validateAnswer = selectedOption => {
    // if (indexQues === questions.length - 1) {
    //   // setShowScoreModal(true);
    //   updateRank(user.uid);
    // }

    let correct_option = questions[indexQues]['correct_answer'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      // Set Score
      playSound(audio.success);
      setScore(score + 1);
      fadeIn();

      setPoint(point + 10);
    } else {
      playSound(audio.error);
    }

    console.log('score' + score * 10);
    console.log('point' + point);

    setShowNextButton(true);
  };
  Sound.setCategory('Playback', true);
  if (loading && questions !== 'null') {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  return (
    <View style={styles.container}>
      <RenderProgressBar progressAnim={progressAnim(questions.length)} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 20,
            opacity: 0.6,
            marginRight: 2,
          }}>
          {indexQues + 1}
        </Text>
        <Text style={{fontSize: 18, opacity: 0.6}}>/ {questions.length}</Text>
      </View>

      <View style={styles.question}>
        <Image style={styles.image} source={questions[indexQues].image} />
        <Text style={{fontSize: 25, color: '#000000'}}>
          {questions[indexQues].question}
        </Text>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Text style={styles.fadingText}>score + 10 </Text>
        </Animated.View>
      </View>

      <RenderOptions
        option={option}
        validateAnswer={validateAnswer}
        isOptionsDisabled={isOptionsDisabled}
        correctOption={correctOption}
        currentOptionSelected={currentOptionSelected}
        type={typeQuestion}
      />
      <RenderNextButton
        showNextButton={showNextButton}
        indexQues={indexQues}
        questions={questions}
        handlePressDone={handlePressDone}
        handlePressNext={handlePressNext}
      />
      <Modal animationType="slide" transparent={true} visible={showScoreModal}>
        <ModalResult
          score={score}
          allQuestions={questions}
          restartQuiz={() => navigation.navigate('Home')}
        />
      </Modal>
    </View>
  );
}

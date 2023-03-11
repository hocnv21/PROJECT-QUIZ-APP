/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, SIZES} from '../../contains';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Quiz() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [option, setOption] = useState([]);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOption(getAnswers(data.results[0]));
    setLoading(false);
    console.log(data.results[0]);
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
    console.log(optionss);
    return optionss;
  }
  function handlePressNext() {
    setQues(ques + 1);
    setOption(getAnswers(questions[ques + 1]));
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  }
  function handlePressPrev() {
    setQues(ques - 1);
    setOption(getAnswers(questions[ques - 1]));
    setIsOptionsDisabled(false);
  }
  useEffect(() => {
    getQuiz();
  }, []);
  const validateAnswer = selectedOption => {
    let correct_option = questions[ques]['correct_answer'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
  };

  const renderOptions = () => {
    return (
      <View style={styles.answer}>
        {option.map(op => (
          <TouchableOpacity
            onPress={() => validateAnswer(op)}
            disabled={isOptionsDisabled}
            key={op}
            style={{
              borderWidth: 3,
              borderColor:
                op == correctOption
                  ? COLORS.success
                  : op == currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor:
                op == correctOption
                  ? COLORS.success + '20'
                  : op == currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '20',
              height: 60,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 20, color: COLORS.black}}>{op}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {op == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : op == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {questions && (
        <>
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
              {ques + 1}
            </Text>
            <Text style={{fontSize: 18, opacity: 0.6}}>
              / {questions.length}
            </Text>
          </View>

          <View style={styles.question}>
            <Text style={{fontSize: 25, color: '#000000'}}>
              {questions[ques].question}
            </Text>
          </View>
          {/* <View style={styles.answer}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.text_while}>{option[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.text_while}>{option[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.text_while}>{option[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.text_while}>{option[3]}</Text>
            </TouchableOpacity>
          </View> */}
          {renderOptions()}
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.action} onPress={handlePressPrev}>
              <Text style={styles.text_while}>Prev</Text>
            </TouchableOpacity>

            <View style={{marginRight: 10}}>
              <TouchableOpacity style={styles.action} onPress={handlePressNext}>
                <Text style={styles.text_while}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: '100%',
  },
  question: {
    height: 200,
  },
  answer: {
    flex: 1,
  },
  option: {
    backgroundColor: 'gray',
    borderRadius: 20,
    paddingLeft: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text_while: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bottom: {
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 40,
    flexDirection: 'row',
  },
  action: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});

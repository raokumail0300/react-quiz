const INITIAL_STATE = {
    questions: [
        {
          question: "HTML stand for ________",
          options: [
            "hyper type machine language",
            "Hyper text machine language",
            "hyper text markup languge",
            'hyper transform machin language'
          ],
          correctAns: "hyper text markup languge"
        },
        {
          question: "CSS stand for ________",
          options: [
            "cascading style sheet",
            "cartoon style sheet",
            "car style sheet",
            'candy style sheet'
          ],
          correctAns: "cascading style sheet"
        },
        {
          question: "HTML is programming language",
          options: [
            "True",
            "False",
    
          ],
          correctAns: "False"
        }
      ]
};

const Reducer = (state = INITIAL_STATE) => {
    return state
};

export default Reducer;
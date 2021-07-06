import { useState } from "react";
import { useSelector } from "react-redux";

const Quiz = () => {
      const state = useSelector(state => state);
      console.log(state.questions);
      const questions = state.questions
      const [ind, setInd] = useState(0);
      const [score, setScore] = useState(0);
      const [selectedValue, setSelectedValue] = useState("");
      const [showResult, setShowResult] = useState(false);

      function correctAns() {
        let correctValue = questions[ind].correctAns;
    
        if (selectedValue == correctValue) {
          setScore(score + 1);
        }
    
        if (questions.length == ind + 1) {
          setShowResult(true);
        }
        else {
          setInd(ind + 1)
        }
    
      }

      return (
        <div className="App">
          <div className='p-2'>
    
            <div className='container'>
              {showResult ? (
                <div className='p-3 bg-white rounded shadow text-dark'>
                  <p className='fs-3'>Result</p>
                  <progress id="file" value={score} max={questions.length}></progress>
                  <h1>{((score / questions.length) * 100).toFixed(2)}</h1>
                  {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}
                </div>
              ) : null}
            </div>
    
            {!showResult ? (
              <div className='container p-5 my-2 rounded shadow bg-succes' >
                <p className='fs-4'>Question number <span className='fs-2'>{ind + 1}</span> of {questions.length}</p>
                <h3>{questions[ind].question}</h3>
              </div>
            ) : null}
    
            {!showResult ? (
              <div className='container p-5 my-2 rounded shadow bg-info'>
                <div className='row'>
                  {questions[ind].options.map((e, i) => {
                    return <div className='col-md-4 mt-4' key={i}>
                      <button onClick={() => { setSelectedValue(e) }} className='btn btn-light rounded px-5'>{e}</button>
                    </div>
                  })}
                </div>
              </div>
            ) : null}
    
            {!showResult ? (
              <div className='container'>
                <button onClick={() => { correctAns() }} className='btn btn-danger px-5 rounded-pill'>Next</button>
              </div>
            ) : null}
    
          </div>
    
    
        </div>
      );
}

export default Quiz;
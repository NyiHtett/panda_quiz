'use client'
import Link from 'next/link';
import React, {useState} from 'react';
import { dataForNum } from '../dataForNum';
const Page = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [checked, setChecked] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [finish, setFinish] = useState(false);
    const {questions} = dataForNum;
    const {question, answers, correctAnswer} = questions[activeQuestion];

    //select and check 
    const onAnswerSelected = (answer, index) => {
        setChecked(true);
        setSelectedAnswerIndex(index);
        if(answer != correctAnswer) {
            alert("Try again buddy, it's wrong");
        }
        else {
            setChecked(false)
            setSelectedAnswer(0);
            if ((activeQuestion+1) == dataForNum.totalQuestions) {
                setFinish(true);
            }
            else {
                setActiveQuestion(activeQuestion+1)
            }
        }
    }
    return (
        <div className='container'>
            {!(finish) ? (
                <div>
                <h1>Guess Item Number</h1>
                <div>
                <h2> Question: {activeQuestion + 1}<span>/{dataForNum.totalQuestions}</span></h2>
            </div>
                {!showResult ? (
                    <div className='quiz-container'>
                        <h3> {questions[activeQuestion].question}</h3> 
                        <ul>
                            {answers.map((answer, index) => {
                                return (
                                    <li 
                                    key={index} 
                                    className={selectedAnswerIndex == index ? 'li-selected' : 'li-hover'}
                                    onClick={()=> onAnswerSelected(answer, index)}
                                    > <span>{answer}</span></li>
                                )     
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className='quiz-container'></div>
                )}
            </div>
            ) : (
                <div className='container'>
                <h1> Congrats You have done the quiz !</h1>
                <div style={{marginTop: 100}}>
                <Link href="/guessNumber">
                <button onClick={()=>{
                    setActiveQuestion(0)
                    setSelectedAnswerIndex(null)
                    setFinish(false)
                    }}> Reset </button>
                </Link>
                <Link href="/">
                <button> Go back to Menu </button>
                </Link>
                </div>
                </div>
            )}
            
            
        </div>
    )
}

export default Page
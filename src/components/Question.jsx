import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
export default function Question({questionText, answers, onSelectAnswer, selectedAnswer, answerState}) {
	return (
		<div id='question'>
			<QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
			<h2>{questionText}</h2>
			<Answers
				key={activeQuestionIndex}
				onSelect={onSelectAnswer}
				answers={answers}
				selectedAnswer={selectedAnswer}
				answerState={answerState}></Answers>
		</div>
	)
}

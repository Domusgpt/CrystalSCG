import React, { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (question: string, image?: File) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(question, image || undefined);
    setQuestion('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Ask a question..."
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionInput;
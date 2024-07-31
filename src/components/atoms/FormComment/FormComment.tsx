import React, { useState } from "react";
import "./FormComment.css";

interface IFormInput {
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
}

const FormComment: React.FC<IFormInput> = ({
  placeholder,
  required,
}) => {
  const [comment, setComment] = useState("");

  return (
    <div className="form-input__container__comment">
      {!required ? (
        <textarea
          className="form-input__comment"
          id="comentario"
          value={comment}
          placeholder={placeholder}
          onChange={(e) => setComment(e.target.value)}
        />
      ) : (
        <textarea
          className="form-input__comment"
          id="comentario"
          value={comment}
          placeholder={placeholder}
          required
          onChange={(e) => setComment(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormComment;
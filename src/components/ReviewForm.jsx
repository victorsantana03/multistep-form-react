import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({data,  updateFieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">

        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "unsatisfied"}
            required
          
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "neutral"}
            required
            
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "satisfied"}
            required
            
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            checked={data.review === "very_satisfied"}
            required
            
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>

      </div>

      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="cooment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
          value={data.comment || ""}
          required
          
        ></textarea>
      </div>

    </div>
  );
};

export default ReviewForm;

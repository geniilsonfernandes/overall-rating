import React, { useState } from "react";
import Imput from "../Input";
import TextArea from "../TextArea";
import Radio from "../Radio";
import Button from "../Button";
import RatingCounter from "../RatingCounter";
import Checkbox from "../Checkbox";
import { CloseIcon } from "../../Icons";

import * as S from "./styles";

const RatingForm = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [recommed, setRecommed] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, review, recommed, nickname, email, terms, rating });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Close>
          <CloseIcon />
        </S.Close>

        <RatingCounter onRating={setRating} />
        <S.FormItem>
          <Imput
            label="Review title"
            name="title"
            placeholder="Example: Easy to use"
            type="text"
            id="title"
            onChange={setTitle}
          />
        </S.FormItem>

        <S.FormItem>
          <S.Label>Would you recommend this product to a friend?</S.Label>
          <S.RadioGrid>
            <Radio name="recommed" value="yes" id="yes" onCheck={setRecommed}>
              Yes
            </Radio>
            <Radio name="recommed" value="no" id="no" onCheck={setRecommed}>
              No
            </Radio>
          </S.RadioGrid>
        </S.FormItem>

        <S.FormItem>
          <TextArea
            label="Product review"
            name="review"
            id="review"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
            onChange={setReview}
          />
        </S.FormItem>

        <S.FormItemGrid>
          <Imput
            label="Nickname"
            name="nickname"
            placeholder="Example: bob27"
            type="text"
            id="nickname"
            onChange={setNickname}
          />
          <Imput
            label="Email address (will not be published)"
            name="email"
            placeholder="Example: your@email.com"
            type="email"
            id="email"
            onChange={setEmail}
          />
        </S.FormItemGrid>

        <S.FormItem>
          <Checkbox name="terms" value="yes" id="terms-yes" onCheck={setTerms}>
            I accept the terms and conditions
          </Checkbox>
        </S.FormItem>

        <S.Text>
          You will be able to receive emails in connection with this review (eg
          if others comment on your review). All emails contain the option to
          unsubscribe. We can use the text and star rating from your review in
          other marketing.
        </S.Text>

        <S.FormFooter>
          <Button>Submit product review</Button>
        </S.FormFooter>
      </S.Form>
    </S.Wrapper>
  );
};

export default RatingForm;

import React, { useEffect, useState } from "react";
import FormInput from "../FormInput";
import TextArea from "../TextArea";
import Radio from "../FormRadio";
import Button from "../Button";
import RatingCounter from "../RatingCounter";
import Checkbox from "../FormCheckbox";
import PropTypes from "prop-types";
import { CloseIcon } from "../../Icons";

import * as S from "./styles";
import { useValiddate } from "../../hook/useValiddate";

const RatingForm = ({ onClose, onSubmit }) => {
  //values
  const [values, setValues] = useState({
    terms: false,
    title: "",
    nickname: "",
    review: "",
    email: "",
    rating: 0,
    recommed: null
  });

  const title = useValiddate({
    regex: /./i,
    error: "Required"
  });
  const nickname = useValiddate({
    regex: /./i,
    error: "Required"
  });
  const review = useValiddate({
    regex: /./i,
    error: "Don't forget your review"
  });
  const email = useValiddate({
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    error: "Please Enter valid email"
  });

  const onChange = (value) => {
    setValues({
      ...values,
      ...value
    });
  };

  useEffect(() => {
    setValues((s) => ({
      ...s,
      title: title.value,
      nickname: nickname.value,
      review: review.value,
      email: email.value
    }));
  }, [title.value, nickname.value, review.value, email.value]);

  const handleCloseClick = () => {
    onClose && onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    title.onRegexTest();
    nickname.onRegexTest();
    email.onRegexTest();
    review.onRegexTest();

    if (
      title.validate ||
      nickname.validate ||
      email.validate ||
      review.validate
    ) {
      return;
    }
    onSubmit(values);
  };

  return (
    <S.Wrapper>
      <S.Close onClick={() => handleCloseClick()}>
        <CloseIcon />
      </S.Close>
      <S.Form onSubmit={handleSubmit}>
        <RatingCounter onRating={onChange} />

        <S.FormItem>
          <FormInput
            label="Review title"
            name="title"
            placeholder="Example: Easy to use"
            type="text"
            id="title"
            onChange={title.handleChange}
            onBlur={title.handleBlur}
            errorMessage={title.errorMessage}
          />
        </S.FormItem>

        <S.FormItem>
          <S.Label>Would you recommend this product to a friend?</S.Label>
          <S.RadioGrid>
            <Radio name="recommed" value="yes" id="yes" onCheck={onChange}>
              Yes
            </Radio>
            <Radio name="recommed" value="no" id="no" onCheck={onChange}>
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
            onChange={review.handleChange}
            onBlur={review.handleBlur}
            errorMessage={review.errorMessage}
          />
        </S.FormItem>

        <S.FormItemGrid>
          <FormInput
            label="Nickname"
            name="nickname"
            placeholder="Example: bob27"
            type="text"
            id="nickname"
            onBlur={nickname.handleBlur}
            onChange={nickname.handleChange}
            errorMessage={nickname.errorMessage}
          />
          <FormInput
            label="Email address (will not be published)"
            name="email"
            placeholder="Example: your@email.com"
            type="email"
            id="email"
            onChange={email.handleChange}
            onBlur={email.handleBlur}
            errorMessage={email.errorMessage}
          />
        </S.FormItemGrid>

        <S.Text>
          You will be able to receive emails in connection with this review (eg
          if others comment on your review). All emails contain the option to
          unsubscribe. We can use the text and star rating from your review in
          other marketing.
        </S.Text>

        <S.FormFooter>
          <Button disabled={!values.terms}>Submit product review</Button>
          <Checkbox name="terms" value="yes" id="terms-yes" onCheck={onChange}>
            I accept the terms and conditions
          </Checkbox>
        </S.FormFooter>
      </S.Form>
    </S.Wrapper>
  );
};

RatingForm.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
};

export default RatingForm;

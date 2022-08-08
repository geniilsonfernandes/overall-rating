import React, { useState } from "react";
import FormInput from "../FormInput";
import TextArea from "../TextArea";
import Radio from "../FormRadio";
import Button from "../Button";
import RatingCounter from "../RatingCounter";
import Checkbox from "../FormCheckbox";
import PropTypes from "prop-types";
import { CloseIcon } from "../../Icons";

import * as S from "./styles";

const RatingForm = ({ onClose }) => {
  const [values, setValues] = useState({});
  // TODO criar o testes

  const onChange = (value) => {
    setValues({ ...values, ...value });
  };

  const handleCloseClick = () => {
    onClose && onClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </S.FormItem>

        <S.FormItemGrid>
          <FormInput
            label="Nickname"
            name="nickname"
            placeholder="Example: bob27"
            type="text"
            id="nickname"
            onChange={onChange}
          />
          <FormInput
            label="Email address (will not be published)"
            name="email"
            placeholder="Example: your@email.com"
            type="email"
            id="email"
            onChange={onChange}
          />
        </S.FormItemGrid>

        <S.FormItem>
          <Checkbox name="terms" value="yes" id="terms-yes" onCheck={() => {}}>
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

RatingForm.propTypes = {
  onClose: PropTypes.func
};

export default RatingForm;

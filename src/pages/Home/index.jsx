import React, { useState } from "react";
import AverageCard from "../../components/AverageCard";
import UserDisplay from "../../components/UserDisplay";
import RatingCard from "../../components/RatingCard";
import RatingForm from "../../components/RatingForm";
import Button from "../../components/Button";
import mock from "./mock";
import * as S from "./styles";
import Portal from "../../components/Portal";

const Home = () => {
  const [data, setData] = useState(mock.reviews);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleModal = () => {
    setIsFormOpen((s) => !s);
  };

  const handleSubmit = (values) => {
    console.log({ date: new Date() });
    setData((prev) => [...prev, { ...values, date: new Date() }].reverse());

    console.log(data);
  };

  return (
    <>
      <S.HeaderContainer>
        <S.Head>
          <UserDisplay
            excerpt={mock.user.profession}
            src={mock.user.photoURL}
            user={mock.user.name}
          />
          <AverageCard rating={3.5} />
        </S.Head>
      </S.HeaderContainer>

      {isFormOpen && (
        <Portal clickOutSide={handleToggleModal} root="FORMPORTAL">
          <RatingForm onClose={handleToggleModal} onSubmit={handleSubmit} />
        </Portal>
      )}

      <S.MainContainer>
        <S.Section>
          <S.Title>What Peaple are Saying:</S.Title>
          <Button onClick={() => handleToggleModal()}>
            Submit product review
          </Button>
        </S.Section>

        <S.SectionReview>
          {data &&
            data.map((item, i) => (
              <RatingCard
                key={i}
                author={item.nickname}
                date={item.date}
                rating={item.rating}
                review={item.review}
                title={item.title}
              />
            ))}
        </S.SectionReview>
      </S.MainContainer>
    </>
  );
};

export default Home;

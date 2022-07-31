import React from "react";
import AverageCard from "../../components/AverageCard";
import UserDisplay from "../../components/UserDisplay";
import RatingCard from "../../components/RatingCard";
import Button from "../../components/Button";
import mock from "./mock";
import * as S from "./styles";

const Home = () => {
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
      <S.SectionContainer>
        <S.Section>
          <S.Title>What Peaple are Saying:</S.Title>
          <Button>Submit product review</Button>
        </S.Section>
        <S.SectionReview>
          {mock.reviews.map((item, i) => (
            <RatingCard
              key={i}
              author={item.author}
              date={item.date}
              rating={item.rating}
              review={item.review}
              title={item.title}
            />
          ))}
        </S.SectionReview>
      </S.SectionContainer>
    </>
  );
};

export default Home;

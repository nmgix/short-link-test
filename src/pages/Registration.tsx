import { CenterBlock } from "../components/BasicComponents/HoverBlock";
import { Line } from "../components/BasicComponents/Line";
import { Title } from "../components/BasicComponents/Title";
import { Form, FormTitle, FormWrapper } from "../components/BasicComponents/Form";
import { Button } from "../components/BasicComponents/Button";
import { Input } from "../components/BasicComponents/Input/Input";
import styled from "styled-components";
import { Description } from "../components/BasicComponents/Description";
import { CustomImage, StyledImage } from "../components/BasicComponents/CustomImage";
import { OtherLinks, StyledOtherLinks } from "../components/PageComponents/OtherLinks";
import { Device } from "../helpers/media";

const RegistrationPage: React.FC = () => {
  return (
    <CenterBlock>
      <Title />
      <StyledRegistration>
        <FormWrapper>
          <FormTitle>Регистрация</FormTitle>
          <Form>
            <Input label='Почта/логин' type='text' />
            <Input label='Пароль' type='password' />
            <Input label='Повтор пароля' type='password' />
            <Button fullWidth rounded type='submit'>
              Зарегистрироваться
            </Button>
            <Button asLink>Войти в аккаунт</Button>
          </Form>
        </FormWrapper>
        <Line vertical />
        <FunctionallityPreview>
          <FormTitle>Что даёт регистрация?</FormTitle>
          <Description>После регистрации вы будете перенаправлены в личный профиль</Description>
          <CustomImage imageSrc='assets/fp/page.svg' onErrorPlaceholder={<StyledErrorPlaceholder />} />
          <Description>Вы сможете создавать сокращённые ссылки, а так же следить за их трафиком</Description>
          <CustomImage imageSrc='assets/fp/link.svg' onErrorPlaceholder={<StyledErrorPlaceholder />} />
          <Description>В навигации по таблицам вам поможет пагинация</Description>
          <CustomImage imageSrc='assets/fp/pagination.svg' onErrorPlaceholder={<StyledErrorPlaceholder />} />
        </FunctionallityPreview>
      </StyledRegistration>
      <Footer>
        <OtherLinks />
      </Footer>
    </CenterBlock>
  );
};

const StyledErrorPlaceholder = styled.img`
  height: 100px;

  background-color: #b8b8b8;

  border-radius: 10px;

  @media ${Device("768px")} {
    margin-right: 0px;
  }
`;

const StyledRegistration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;

  ${FormWrapper} {
    align-self: center;
  }

  ${Line} {
    margin: 0 30px 0 40px;
  }
`;

const FunctionallityPreview = styled.div`
  display: flex;
  flex-direction: column;
  /* ${StyledImage} {
    height: 200px;
  } */

  ${FormTitle} {
    margin-bottom: 10px;
  }

  & > *:not(${FormTitle}) {
    margin: 0 15px 10px;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0;
  ${StyledOtherLinks} {
    width: 45%;

    @media ${Device("768px")} {
      width: 60%;
    }
  }
`;

export default RegistrationPage;
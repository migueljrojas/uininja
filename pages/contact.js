import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';
import { UIContainer } from 'modules/grid';

const StyledUIContainer = styled(UIContainer)`
  
  @media only screen and (min-width: 1200px) {
    min-height: calc(100vh - 100px);
    padding-top: 50px;
  }
`;

const SectionTitle = styled.h1`
  color: ${getFromTheme('ourWork.title')};
  font-size: 24px;
  margin: 0;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 1200px) {
    position: fixed;
    top: 33px;
    left: 20%;
    margin: auto;
  }
`;

const ContactWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: nowrap;
    min-height: calc(100vh - 150px);
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const ContainerTitle = styled.h3`
  margin: 0;
  margin-bottom: 40px;
  color: ${getFromTheme('contact.title')};
  font-size: 24px;
  text-align: center;
`;

const FormTitle = styled.h4`
  color: ${getFromTheme('contact.title')};
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  
  @media only screen and (min-width: 1200px) {
    width: 60%;
  }
`;

const FormGroup = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  background: ${getFromTheme('contact.inputBackground')};
  padding: 0 20px;
  transition: ${getFromTheme('transition')};
  position: relative;
  z-index: 2;
  outline: none;

  &::placeholder {
    transition: ${getFromTheme('transition')};
  }

  &:focus {
    margin-top: 8px;

    &::placeholder {
      color: transparent;
    }
  }

  &:focus + label {
    top: -5px;
    opacity: 1;
  }
`;

const FormLabel = styled.label`
  transition: ${getFromTheme('transition')};
  position: absolute;
  top: 37%;
  transform: translateY(-50%);
  left: 20px;
  opacity: 0;
  color: ${getFromTheme('contact.labelColor')};
  pointer-events: none;
  z-index: 1;
  font-size: 12px;
`;

const FormSelect = styled.select`
  transition: ${getFromTheme('transition')};
  height: 50px;
  width: 100%;
  background: ${getFromTheme('contact.inputBackground')};
  padding: 0 20px;
  color: rgb(117,117,117);
  outline: none;
  z-index: 2;
  position: relative;

  &:focus {
    color: transparent;
    margin-top: 8px;
  }

  &:focus + label {
    top: -5px;
    opacity: 1;
  }

  option {
    color: rgb(117,117,117);
  }
`;

const FormTextarea = styled.textarea`
  transition: ${getFromTheme('transition')};
  background: ${getFromTheme('contact.inputBackground')};
  height: 120px;
  width: 100%;
  padding: 20px;
  z-index: 2;
  position: relative;
  outline: none;
  margin-bottom: 10px;
  resize: none;

  &::placeholder {
    transition: ${getFromTheme('transition')};
  }

  &:focus {
    margin-top: 8px;

    &::placeholder {
      color: transparent;
    }
  }

  &:focus + label {
    top: -5px;
    opacity: 1;
  }
`;

const FormButton = styled.button`
  width: 50%;
  height: 50px;
  background: ${getFromTheme('contact.buttonBackground')};
  border: none;
  color: ${getFromTheme('contact.buttonColor')};
  display: block;
  margin-left: auto;
`;

const contact = () => (
  <StyledUIContainer>
    <SectionTitle>Contact Us</SectionTitle>
    <ContactWrapper>
      <ContactContainer>
        <ContainerTitle>
          There are ninjas
          <br />
          all around the globe
        </ContainerTitle>
        <img
          alt="Cover"
          src="https://picsum.photos/id/237/200/300"
        />
      </ContactContainer>
      <ContactContainer>
        <FormTitle>Get in touch with us</FormTitle>
        <Form>
          <FormGroup>
            <FormInput placeholder="Name" />
            <FormLabel>Name</FormLabel>
          </FormGroup>
          <FormGroup>
            <FormInput placeholder="Company" />
            <FormLabel>Company</FormLabel>
          </FormGroup>
          <FormGroup>
            <FormSelect defaultValue="country">
              <option
                disabled
                hidden
                value="country"
              >
                Country
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
              <option>Option 6</option>
            </FormSelect>
            <FormLabel>Country</FormLabel>
          </FormGroup>
          <FormGroup>
            <FormTextarea placeholder="Message" />
            <FormLabel>Message</FormLabel>
          </FormGroup>
          <FormGroup>
            <FormButton>Send</FormButton>
          </FormGroup>
        </Form>
      </ContactContainer>
    </ContactWrapper>
  </StyledUIContainer>
);

export default contact;

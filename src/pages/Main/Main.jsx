import { MainContainer, Content, Header, Text, MainBtn } from "./Main.styled";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

export default function Main() {
    return (
      <div>
        <MainContainer>
          <Content>
            <Header>The chemical negatively charged</Header>
            <Text>
              Numerous calculations predict, and experiments confirm, that the
              force field reflects the beam, while the mass defect is not
              formed. The chemical compound is negatively charged. Twhile the
              mass defect is{" "}
            </Text>
            <MainBtn type="button">Get Started</MainBtn>
          </Content>
        </MainContainer>
        <InfoBlock />
      </div>
    );
}
